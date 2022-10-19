const { stringToArray } = require("../../middlewares/string-to-array");
const { ApiBlogRouter } = require("./routes/blog.route");
const { ApiPermissionRouter } = require("./routes/permission.route");
const { ApiRoleRouter } = require("./routes/role.route");

const router = require("express").Router();

router.use("/blog", ApiBlogRouter);
router.use("/role", stringToArray("permissions"), ApiRoleRouter);
router.use("/permission", ApiPermissionRouter);

module.exports = {
  AdminRoutes: router,
};
