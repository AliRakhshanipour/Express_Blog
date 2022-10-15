const createHttpError = require("http-errors");
const { StatusCodes: httpStatus } = require("http-status-codes");
const { Controller } = require("../../controller");

class BlogController extends Controller {
  async getBlogList(req, res, next) {
    try {
      return res.status(httpStatus.OK).json({
        statusCode: httpStatus.OK,
        data: {
          message: "list fetched successfully",
        },
      });
    } catch (error) {
      next(createHttpError.BadRequest(error.message));
    }
  }
}

module.exports = {
  BlogController: new BlogController(),
};
