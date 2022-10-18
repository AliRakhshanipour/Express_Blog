const createHttpError = require("http-errors");
const { StatusCodes: httpStatus } = require("http-status-codes");
const { Controller } = require("../controller");

class HomeController extends Controller {
  indexPage(req, res, next) {
    try {
      return res.status(httpStatus.OK).send("Index Page");
    } catch (error) {
      next(createHttpError.InternalServerError(error.message));
    }
  }
}

module.exports = {
  HomeController: new HomeController(),
};
