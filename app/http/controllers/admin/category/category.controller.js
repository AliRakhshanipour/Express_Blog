const createHttpError = require("http-errors");
const { StatusCodes: httpStatus } = require("http-status-codes");
const { Controller } = require("../../controller");

class CategoryController extends Controller {
  async createCategory(req, res, next) {
    try {
      return res.status(httpStatus.CREATED).json({
        statusCode: httpStatus.CREATED,
        data: {
          message: "category created successfully",
        },
      });
    } catch (error) {
      next(createHttpError.BadRequest(error.message));
    }
  }
}
module.exports = {
  CategoryController: new CategoryController(),
};
