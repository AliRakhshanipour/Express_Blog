const {
  PermissionController,
} = require("../../../http/controllers/admin/RBAC-system/permission.controller");

const router = require("express").Router();

router.post("/add", PermissionController.addPermission);
router.get("/list", PermissionController.getPermissionsList);
router.patch("/edit/:id", PermissionController.editPermission);
router.delete("/delete/:id", PermissionController.deletePermission);

module.exports = {
  ApiPermissionRouter: router,
};
