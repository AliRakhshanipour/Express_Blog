const createHttpError = require("http-errors");
const { StatusCodes: httpStatus } = require("http-status-codes");
const { BlogModel } = require("../../../../models/blog.schema");
const { createImagePath } = require("../../../../utils/create-image-path");
const { deleteEmptyValues } = require("../../../../utils/delete-empty-values");
const {
  createBlogValidator,
} = require("../../../validations/admin/blog.validation");
const { Controller } = require("../../controller");
const { join } = require("path");
const {
  unlinkFileFromServer,
} = require("../../../../utils/upload-functions/unlink-file");

class BlogController extends Controller {
  async getBlogList(req, res, next) {
    try {
      const blogs = await BlogModel.find({});
      if (!blogs) throw createHttpError.NotFound("no blog found");
      else
        return res.status(httpStatus.OK).json({
          statusCode: httpStatus.OK,
          data: { blogs },
        });
    } catch (error) {
      next(createHttpError.BadRequest(error.message));
    }
  }
  async createBlog(req, res, next) {
    try {
      await createBlogValidator.validateAsync(req.body);
      req.body.image = createImagePath(
        req.body.fileUploadPath,
        req.body.file_name
      );
      let data = { ...req.body };
      // delete fileUploadPath and fileName fro req.body
      Object.keys(data).forEach((key) => {
        if (key == "fileUploadPath" || key == "file_name") delete data[key];
      });
      // delete empty values from req.body
      deleteEmptyValues(data);
      //check blog exist
      await this.checkBlogExist(data.title);
      // create blog in mongo database
      const blog = await BlogModel.create(data);
      if (!blog) throw createHttpError.InternalServerError("No blog Created");
      else
        return res.status(httpStatus.CREATED).json({
          statusCode: httpStatus.CREATED,
          data: { message: "blog created successfully" },
        });
    } catch (error) {
      const image = join(req.body.fileUploadPath, req.body.file_name);
      unlinkFileFromServer(image);
      next(createHttpError.BadRequest(error.message));
    }
  }
  async deleteBlog(req, res, next) {
    try {
      const { id } = req.params;
      console.log(id);
      const deleteBlogResult = await BlogModel.deleteOne({ _id: id });
      if (deleteBlogResult.deletedCount === 0)
        throw createHttpError.InternalServerError("no blog deleted");
      else
        return res.status(httpStatus.OK).json({
          statusCode: httpStatus.OK,
          data: { message: "blog deleted successfully" },
        });
    } catch (error) {
      next(createHttpError.BadRequest(error.message));
    }
  }
  async editBlog(req, res, next) {
    try {
      const { id } = req.params;
      const data = { ...req.body };
      deleteEmptyValues(data);
      const editResult = await BlogModel.updateOne({ _id: id }, { $set: data });
      if (editResult.modifiedCount === 0)
        throw createHttpError.InternalServerError("no blog updated");
      else
        return res.status(httpStatus.OK).json({
          statusCode: httpStatus.OK,
          data: { message: "blog updated successfully" },
        });
    } catch (error) {
      next(createHttpError.BadRequest(error.message));
    }
  }
  async checkBlogExist(title) {
    const blog = await BlogModel.findOne({ title });
    if (blog)
      throw createHttpError.BadRequest("a blog with this title already exists");
    else return true;
  }
}

module.exports = {
  BlogController: new BlogController(),
};
