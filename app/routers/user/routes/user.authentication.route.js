const {
  UserAuthenticationController,
} = require("../../../http/controllers/user/authentication/user.authentication.controller");
const {
  verifyAccessToken,
} = require("../../../middlewares/verify-access-token");

const router = require("express").Router();

router.post("/send-code", UserAuthenticationController.sendOtp);
router.post("/check-otp", UserAuthenticationController.checkOtp);

module.exports = {
  ApiUserAuthenticationRouter: router,
};
