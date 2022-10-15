const { AdminRoutes } = require("./admin/admin.route");
const { IndexPageRoutes } = require("./api");

const router = require("express").Router();

router.use("/", IndexPageRoutes);
router.use("/admin", AdminRoutes);

module.exports = {
  AllRoutes: router,
};
