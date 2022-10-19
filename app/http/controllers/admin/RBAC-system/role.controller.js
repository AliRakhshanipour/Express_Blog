const createHttpError = require("http-errors");
const { StatusCodes: httpStatus } = require("http-status-codes");
const { RoleModel } = require("../../../../models/role.schema");
const {
  createRoleValidator,
} = require("../../../validations/admin/role.validation");
const { Controller } = require("../../controller");

class RoleController extends Controller {
  async getRoleList(req, res, next) {
    try {
      const roles = await RoleModel.find({});
      if (!roles) throw createHttpError.NotFound("No Role Found");
      return res.status(httpStatus.OK).json({
        statusCode: httpStatus.OK,
        data: { roles },
      });
    } catch (error) {
      next(createHttpError.BadRequest(error.message));
    }
  }
  async addRole(req, res, next) {
    try {
      await createRoleValidator.validateAsync(req.body);
      const { title, permissions } = req.body;
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
