const createHttpError = require("http-errors");
const { Controller } = require("../../controller");
const jwt = require("jsonwebtoken");
const { StatusCodes: httpStatus } = require("http-status-codes");
const {
  randomNumberGenerator,
} = require("../../../../utils/public-functions/random-number-generator");
const {
  phoneNumberValidator,
  checkOtpValidator,
} = require("../../../validations/user/user.authentication.schema");
const {
  removeObjectProperty,
} = require("../../../../utils/public-functions/remove-object-property");
const { UserModel } = require("../../../../models/user.schema");
const { EXPIRES_TIME, ROLE } = require("../../../../utils/constants");
const {
  signAccessToken,
} = require("../../../../utils/token-functions/sign-access-token");

class UserAuthenticationController extends Controller {
  async sendOtp(req, res, next) {
    try {
      await phoneNumberValidator.validateAsync(req.body); /// for validate phone number
      const { phone } = req.body; // phone number user entered
      let code = randomNumberGenerator(); // random number generator
      const result = await this.saveUser(phone, code);
      if (!result)
        throw createHttpError.Unauthorized("Login Failed, Please Try Again");
      return res.status(httpStatus.OK).json({
        statusCode: httpStatus.OK,
        data: {
          message: "Verification code sent successfully",
          code,
          phone,
        },
      });
    } catch (error) {
      next(createHttpError.BadRequest(error.message));
    }
  }
  async checkOtp(req, res, next) {
    try {
      await checkOtpValidator.validateAsync(req.body);
      const { phone, code } = req.body;
      const user = await UserModel.findOne({ phone });
      if (!user)
        throw createHttpError.NotFound("No User Found With This Phone Number");
      if (user.otp.code != code)
        throw createHttpError.Unauthorized("Code Is Not Correct");
      const accessToken = await signAccessToken(user);
      return res.status(httpStatus.OK).json({
        data: {
          accessToken,
        },
      });
    } catch (error) {
      next(createHttpError.BadRequest(error.message));
    }
  }
  async saveUser(phone, code) {
    let otp = {
      code,
      expiresIn: new Date().getTime() + EXPIRES_TIME,
    };
    const user = await this.checkUserExist(phone);
    if (user) return await this.updateUser(phone, { otp });
    else return !!(await UserModel.create({ phone, otp, role: ROLE }));
  }
  async checkUserExist(phone) {
    const user = await UserModel.findOne({ phone });
    return !!user;
  }
  async updateUser(phone, data = {}) {
    removeObjectProperty(data);
    console.log(data);
    const updateResult = await UserModel.updateOne({ phone }, { $set: data });
    return !!updateResult.modifiedCount;
  }
}

module.exports = {
  UserAuthenticationController: new UserAuthenticationController(),
};
