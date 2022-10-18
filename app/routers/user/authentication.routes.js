const {
  ApiUserAuthenticationRouter,
} = require("./routes/user.authentication.route");

const router = require("express").Router();

router.use("/user", ApiUserAuthenticationRouter);

module.exports = {
  AuthenticationRoutes: router,
};
