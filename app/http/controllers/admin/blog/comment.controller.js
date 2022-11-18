const createHttpError = require("http-errors");
const { StatusCodes: httpStatus } = require("http-status-codes");
const { CommentModel, BlogModel } = require("../../../../models/blog.schema");
const {
  commentValidator,
} = require("../../../validations/admin/comment.validation");
const { isObjectId } = require("../../../validations/public-validators");
const { Controller } = require("../../controller");

class CommentController extends Controller {
  async createComment(req, res, next) {
    try {
      await commentValidator.validateAsync(req.body);
      const user = req.user._id;
      const { comment, parent } = req.body;
      await this.checkBlogExist(parent);
      const createdComment = await CommentModel.create({
        user,
        comment,
        parent,
      });
      if (!createdComment)
        throw createHttpError.InternalServerError(
          "comment not created successfully"
        );
      const pushComment = await BlogModel.updateOne(
        { _id: parent },
        {
          $push: { comments: createdComment },
        }
      );
      if (!pushComment)
        throw createHttpError.InternalServerError("comment addition failed");
      else
        return res.status(httpStatus.CREATED).json({
          statusCode: httpStatus.CREATED,
          data: {
            message: "comment created successfully",
          },
        });
    } catch (error) {
      next(createHttpError.BadRequest(error.message));
    }
  }
  async getCommentsOfBlog(req, res, next) {
    try {
      await isObjectId.validateAsync(req.params);
      const { id } = req.params;
      const comments = await BlogModel.findOne({ _id: id }, { comments: 1 });
      if (!comments)
        throw createHttpError.NotFound("no blog found with this id");
      else
        return res.status(httpStatus.OK).json({
          data: comments,
        });
    } catch (error) {
      next(createHttpError.BadRequest(error.message));
    }
  }
  async deleteComment(req, res, next) {
    try {
      await isObjectId.validateAsync(req.params);
      const { id } = req.params;
      const checkComment = await this.checkCommentExist(id);
      const comment = await CommentModel.deleteOne({ _id: id });
      if (comment.deletedCount == 0)
        throw createHttpError.InternalServerError("no comment deleted");
      const updateCommentsBlog = await BlogModel.updateOne(
        {
          _id: checkComment.parent,
        },
        {
          $pull: {
            comments: { _id: id },
          },
        }
      );
      console.log(updateCommentsBlog);
      if (updateCommentsBlog.modifiedCount == 0)
        throw createHttpError.InternalServerError(
          "comment not deleted successfully"
        );
      else
        return res.status(httpStatus.OK).json({
          statusCode: httpStatus.OK,
          data: { message: "Comment deleted successfully" },
        });
    } catch (error) {
      next(createHttpError.BadRequest(error.message));
    }
  }
  async checkBlogExist(id) {
    const blog = await BlogModel.findOne({ _id: id });
    if (!blog) throw createHttpError.NotFound("no blog found with this id");
    return true;
  }
  async checkCommentExist(id) {
    const comment = await CommentModel.findOne({ _id: id });
    if (!comment)
      throw createHttpError.NotFound("no comment found with this id");
    return comment;
  }
}

module.exports = {
  CommentController: new CommentController(),
};
