const createHttpError = require("http-errors");
const { StatusCodes: httpStatus } = require("http-status-codes");
const { Controller } = require("../../controller");

class RoleController extends Controller {
  async addRole(req, res, next) {
    try {
      const { title, permissions } = req.body;
      console.log(title);
      return res
        .status(httpStatus.OK)
        .json({ statusCode: httpStatus.OK, data: { title, permissions } });
    } catch (error) {
      next(createHttpError.BadRequest(error.message));
    }
  }
}

module.exports = {
  RoleController: new RoleController(),
};
