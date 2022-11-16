const createHttpError = require("http-errors");
const { StatusCodes: httpStatus } = require("http-status-codes");
const { CommentModel, BlogModel } = require("../../../../models/blog.schema");
const { Controller } = require("../../controller");

class CommentController extends Controller {
  async createComment(req, res, next) {
    try {
      const user = req.user._id;
      const { comment, parent } = req.body;
      console.log(req.body);
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
}

module.exports = {
  CommentController: new CommentController(),
};
