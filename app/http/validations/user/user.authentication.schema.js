const createHttpError = require("http-errors");
const joi = require("joi");

const phoneNumberValidator = joi.object({
  phone: joi
    .string()
    .pattern(/09[0-9]{9}/)
    .error(createHttpError.BadRequest("please enter a valid phone number")),
});

const checkOtpValidator = joi.object({
  phone: joi
    .string()
    .pattern(/09[0-9]{9}/)
    .error(createHttpError.BadRequest("please enter a valid phone number")),
  code: joi
    .string()
    .min(4)
    .max(6)
    .error(createHttpError.BadRequest("please enter a valid code")),
});

module.exports = {
  phoneNumberValidator,
  checkOtpValidator,
};
