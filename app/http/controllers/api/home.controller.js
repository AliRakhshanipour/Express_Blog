const { StatusCodes: httpStatus } = require("http-status-codes");
const { Controller } = require("../controller");

class HomeController extends Controller {
  indexPage(req, res, next) {
    return res.status(httpStatus.OK).send("Index Page");
  }
}

module.exports = {
  HomeController: new HomeController(),
};
