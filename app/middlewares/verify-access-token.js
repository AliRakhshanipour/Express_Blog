const createHttpError = require("http-errors");
const { decode } = require("jsonwebtoken");
const { UserModel } = require("../models/user.schema");
const { getToken } = require("../utils/token-functions/get-token-from-header");

async function verifyAccessToken(req, res, next) {
  try {
    const header = req?.headers;
    if (!header.authorization)
      return next(createHttpError.BadRequest("Please Login To Your Account"));
    const [bearer, token] = header?.authorization.split(" ");
    if (token) {
      const decodedToken = decode(token, {
        complete: true,
      });
      if (!decodedToken)
        return next(createHttpError.BadRequest("Please Login To Your Account"));
      else {
        const { phone } = decodedToken.payload;
        const user = await UserModel.findOne(
          { phone },
          { password: 0, otp: 0 }
        );
        if (!user) return next(createHttpError.NotFound("No User Found"));
        req.user = user;
        return next();
      }
    } else
      return next(createHttpError.BadRequest("Please Enter to Your Account"));
  } catch (error) {
    next(createHttpError.BadRequest(error.message));
  }
}

module.exports = {
  verifyAccessToken,
};
