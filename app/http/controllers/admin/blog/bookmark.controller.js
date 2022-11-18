const createHttpError = require("http-errors");
const { StatusCodes: httpStatus } = require("http-status-codes");
const { BlogModel } = require("../../../../models/blog.schema");
const { Controller } = require("../../controller");

class BookmarkController extends Controller {
  async addToBookmarks(req, res, next) {
    try {
      const { id } = req.params;
      const userId = req.user._id;
      const addToBookmarks = await BlogModel.updateOne(
        { _id: id },
        { $push: { bookmarks: userId } }
      );
      if (addToBookmarks.modifiedCount == 0)
        throw createHttpError.InternalServerError("no bookmarks added");
      else
        return res.status(httpStatus.OK).json({
          statusCode: httpStatus.OK,
          data: {
            message: "added to bookmarks",
          },
        });
    } catch (error) {
      next(createHttpError.BadRequest(error.message));
    }
  }
}

module.exports = {
  BookmarkController: new BookmarkController(),
};
