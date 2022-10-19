const createHttpError = require("http-errors");
const { Controller } = require("../../controller");

class PermissionController extends Controller {
  async createPermission(req, res, next) {
    try {
      const data = req.body;
      console.log(data);
      return res.status(200).json({ data });
    } catch (error) {
      next(createHttpError.BadRequest(error.message));
    }
  }
}

module.exports = {
  PermissionController: new PermissionController(),
};
