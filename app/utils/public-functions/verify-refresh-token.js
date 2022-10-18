const createHttpError = require("http-errors");
const { decode } = require("jsonwebtoken");
const { UserModel } = require("../../models/user.schema");
const verifyRefreshToken = (token) => {
  return new Promise(async (resolve, reject) => {
    const decodedToken = decode(token, { complete: true });
    const { phone } = decodedToken.payload || {};
    const user = await UserModel.findOne({ phone });
    if (!user) reject(createHttpError.NotFound("No User Found"));
    resolve(phone);
  });
};

module.exports = {
  verifyRefreshToken,
};
