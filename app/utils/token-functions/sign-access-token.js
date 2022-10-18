const createHttpError = require("http-errors");
const { sign } = require("jsonwebtoken");
require("dotenv").config();

function signAccessToken(user) {
  return new Promise(async (resolve, reject) => {
    const payload = {
      phone: user.phone,
      userId: user._id,
    };
    const secretKey = process.env.SECRET_KEY;
    const options = {
      expiresIn: "1h",
    };
    sign(payload, secretKey, options, (error, token) => {
      if (error)
        throw reject(createHttpError.InternalServerError(error.message));
      return resolve(token);
    });
  });
}

module.exports = { signAccessToken };
