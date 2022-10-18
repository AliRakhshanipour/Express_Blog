const { verifyAccessToken } = require("../middlewares/verify-access-token");
const { AdminRoutes } = require("./admin/admin.routes");
const { IndexPageRoutes } = require("./api/routes/index.route");

const { AuthenticationRoutes } = require("./user/authentication.routes");

const router = require("express").Router();

router.use("/", IndexPageRoutes);
router.use("/admin", verifyAccessToken, AdminRoutes);
router.use("/authentication", AuthenticationRoutes);

module.exports = {
  AllRoutes: router,
};
