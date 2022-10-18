require("dotenv").config();
const createHttpError = require("http-errors");
const { sign } = require("jsonwebtoken");

function signRefreshToken(user) {
  return new Promise(async (resolve, reject) => {
    const payload = {
      phone: user.phone,
    };
    const secretKey = process.env.SECRET_KEY_REFRESH;
    const options = {
      expiresIn: "1y",
    };
    sign(payload, secretKey, options, (error, token) => {
      if (error) reject(createHttpError.InternalServerError(error.message));
      return resolve(token);
    });
  });
}

module.exports = {
  signRefreshToken,
};
