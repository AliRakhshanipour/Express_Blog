const {
  RoleController,
} = require("../../../http/controllers/admin/RBAC-system/role.controller");
const router = require("express").Router();

router.post("/addRole", RoleController.addRole);
router.get("/list", RoleController.getRoleList);
router.patch("/editRole/:id", RoleController.editRole);
router.delete("/deleteRole/:id", RoleController.deleteRole);

module.exports = {
  ApiRoleRouter: router,
};
