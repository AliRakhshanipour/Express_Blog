const createHttpError = require("http-errors");
const { PermissionModel } = require("../../../../models/permission.schema");
const {
  removeObjectProperty,
} = require("../../../../utils/public-functions/remove-object-property");
const {
  addPermissionValidator,
  editPermissionValidator,
} = require("../../../validations/admin/permission.validation");
const { Controller } = require("../../controller");
const { StatusCodes: httpStatus } = require("http-status-codes");
const { isObjectId } = require("../../../validations/public-validators");

class PermissionController extends Controller {
  async addPermission(req, res, next) {
    try {
      const data = { ...req.body };
      await addPermissionValidator.validateAsync(data);
      removeObjectProperty(data);
      const permission = await PermissionModel.create(data);
      if (!permission) throw createHttpError.BadRequest("No Permission Added");
      return res.status(httpStatus.CREATED).json({
        statusCode: httpStatus.CREATED,
        data: {
          message: "Permission Added Successfully",
        },
      });
    } catch (error) {
      next(createHttpError.BadRequest(error.message));
    }
  }
  async deletePermission(req, res, next) {
    try {
      const { id } = req.params;
      await isObjectId.validateAsync(req.params);
      await this.findPermissionById(id);
      const deletePermission = await PermissionModel.deleteOne({ _id: id });
      if (deletePermission.deletedCount == 0)
        throw createHttpError.InternalServerError("No Permission Deleted");
      else
        res.status(httpStatus.OK).json({
          statusCode: httpStatus.OK,
          message: "Permission Deleted Successfully",
        });
    } catch (error) {
      next(createHttpError.BadRequest(error.message));
    }
  }
  async editPermission(req, res, next) {
    try {
      const { id } = req.params;
      await isObjectId.validateAsync(req.params);
      await this.findPermissionById(id);
      await editPermissionValidator.validateAsync(req.body);
      const data = { ...req.body };
      removeObjectProperty(data);
      const editResult = await PermissionModel.updateOne(data);
      if (editResult.modifiedCount == 0)
        throw createHttpError.InternalServerError("Update Failed");
      else
        return res.status(httpStatus.OK).json({
          statusCode: httpStatus.OK,
          message: "Permission Edited Successfully",
        });
    } catch (error) {
      next(createHttpError.BadRequest(error.message));
    }
  }
  async getPermissionsList(req, res, next) {
    try {
      const permissions = await PermissionModel.find({});
      if (!permissions) throw createHttpError.NotFound("No Permission Found");
      else
        return res.status(httpStatus.OK).json({
          statusCode: httpStatus.OK,
          data: { permissions },
        });
    } catch (error) {
      next(createHttpError.BadRequest(error.message));
    }
  }
  async findPermissionById(id) {
    const permission = await PermissionModel.findOne({ _id: id });
    if (!permission)
      throw createHttpError.BadRequest("No Permission Found With This ID");
  }
}

module.exports = {
  PermissionController: new PermissionController(),
};
