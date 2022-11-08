const createHttpError = require("http-errors");
const { PermissionModel } = require("../models/permission.schema");
const { RoleModel } = require("../models/role.schema");

// RBAC (Role Base Access Control)
const checkPermissions = (requiredPermissions = []) => {
  return async function (req, res, next) {
    try {
      const user = req.user;
      const role = await RoleModel.findOne({ title: user.role });
      const permissions = await PermissionModel.find({
        _id: { $in: role.permissions },
      });
      const userPermissions = permissions.map((permission) => permission.title);
      const hasPermission = requiredPermissions.every((permission) => {
        return userPermissions.includes(permission);
      });
      console.log(hasPermission);
      if (hasPermission || requiredPermissions.length === 0) return next();
      else
        throw createHttpError.Forbidden(
          "You Do Not Have Access To This Section"
        );
    } catch (error) {
      next(createHttpError.BadRequest(error.message));
    }
  };
};

module.exports = {
  checkPermissions,
};
