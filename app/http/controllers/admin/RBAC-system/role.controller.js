const createHttpError = require("http-errors");
const { Types } = require("mongoose");
const { StatusCodes: httpStatus } = require("http-status-codes");
const { RoleModel } = require("../../../../models/role.schema");
const {
  removeObjectProperty,
} = require("../../../../utils/public-functions/remove-object-property");
const {
  createRoleValidator,
  editRoleValidator,
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
      await this.checkRoleExistByTitle(title);
      const role = await RoleModel.create({ title, permissions });
      if (!role) throw createHttpError.BadRequest("No Role Added");
      else
        return res.status(httpStatus.CREATED).json({
          statusCode: httpStatus.CREATED,
          message: "Role Created Successfully",
        });
    } catch (error) {
      next(createHttpError.BadRequest(error.message));
    }
  }
  async editRole(req, res, next) {
    try {
      const { id } = req.params;
      await editRoleValidator.validateAsync(req.body);
      const role = await this.checkRoleExistById(id);
      const { permissions } = req.body;
      const permissionUpdateResult = await RoleModel.updateOne(
        { _id: id },
        {
          $addToSet: { permissions: { $each: permissions } },
        }
      );
      if (permissionUpdateResult.modifiedCount == 0)
        throw createHttpError.InternalServerError("Update Failed");
      return res.status(httpStatus.OK).json({
        statusCode: httpStatus.OK,
        data: {
          message: "Role And Permissions Updated Successfully",
          role: role.permissions,
        },
      });
    } catch (error) {
      console.log(error);
      next(createHttpError.BadRequest(error.message));
    }
  }
  async checkRoleExistByTitle(title) {
    const role = await RoleModel.findOne({ title });
    if (role) throw createHttpError.BadRequest("This Role Already Exists");
  }
  async checkRoleExistById(id) {
    const role = await RoleModel.findOne({ id });
    if (!role) throw createHttpError.NotFound("No Role Found With This Id");
    else return role;
  }
}

module.exports = {
  RoleController: new RoleController(),
};
