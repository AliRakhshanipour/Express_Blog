const { ApiBlogRouter } = require("./routes/blog.route");
const { ApiRoleRouter } = require("./routes/role.route");

const router = require("express").Router();

router.use("/blog", ApiBlogRouter);
router.use("/role", ApiRoleRouter);

module.exports = {
  AdminRoutes: router,
};
