const createHttpError = require("http-errors");
const { UserModel } = require("../../../../models/user.schema");
const { deleteEmptyValues } = require("../../../../utils/delete-empty-values");
const {
  userCompleteProfile,
} = require("../../../validations/user/user.validation");
const { Controller } = require("../../controller");
const path = require("path");
const { StatusCodes: httpStatus } = require("http-status-codes");

class UserController extends Controller {
  async completeUserProfile(req, res, next) {
    try {
      // await userCompleteProfile.validateAsync(req.body);
      const userId = req.user._id;
      const image = path.join(req.body.fileUploadPath, req.body.file_name);
      req.body.image = image;
      const data = { ...req.body };
      Object.keys(data).forEach((key) => {
        if (key == "fileUploadPath" || key == "file_name") delete data[key];
      });
      deleteEmptyValues(data);
      const user = await UserModel.updateOne(
        { _id: userId },
        {
          $set: data,
        }
      );
      if (user.modifiedCount == 0)
        throw createHttpError.InternalServerError(
          "user profile was not completed successfully"
        );
      return res.status(httpStatus.OK).json({
        statusCode: httpStatus.OK,
        data: { message: "user profile successfully completed" },
      });
    } catch (error) {
      next(createHttpError.BadRequest(error.message));
    }
  }
}

module.exports = {
  UserController: new UserController(),
};
