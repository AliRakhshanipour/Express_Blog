const { checkPermissions } = require("../../middlewares/permission.guard");
const { stringToArray } = require("../../middlewares/string-to-array");
const { ApiBlogRouter } = require("./routes/blog.route");
const { ApiCategoryRouter } = require("./routes/category.route");
const { ApiCommentRouter } = require("./routes/comment.route");
const { ApiPermissionRouter } = require("./routes/permission.route");
const { ApiRoleRouter } = require("./routes/role.route");

const router = require("express").Router();

router.use("/blog", ApiBlogRouter);
router.use("/category", ApiCategoryRouter);
router.use("/role", stringToArray("permissions"), ApiRoleRouter);
router.use("/permission", ApiPermissionRouter);
router.use("/comment", ApiCommentRouter);

module.exports = {
  AdminRoutes: router,
};
