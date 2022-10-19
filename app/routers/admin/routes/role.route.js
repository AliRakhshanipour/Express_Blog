const {
  RoleController,
} = require("../../../http/controllers/admin/RBAC-system/role.controller");
const router = require("express").Router();

router.post("/addRole", RoleController.addRole);
router.get("/list", RoleController.getRoleList);

module.exports = {
  ApiRoleRouter: router,
};
