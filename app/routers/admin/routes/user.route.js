const {
  UserController,
} = require("../../../http/controllers/admin/user/user.controller");
const { uploadImage } = require("../../../utils/upload-functions/multer");

const router = require("express").Router();

router.patch(
  "/complete-profile",
  uploadImage.single("avatar"),
  UserController.completeUserProfile
);

module.exports = {
  ApiUserRouter: router,
};
