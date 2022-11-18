const createHttpError = require("http-errors");
const joi = require("joi");

const userCompleteProfile = joi.object({
  first_name: joi
    .string()
    .min(2)
    .trim()
    .error(createHttpError.BadRequest("please enter a valid first name")),
  last_name: joi
    .string()
    .min(2)
    .trim()
    .error(createHttpError.BadRequest("please enter a valid last name")),
  email: joi
    .string()
    .email()
    .error(createHttpError.BadRequest("please enter a valid email")),
  password: joi
    .string()
    .pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/)
    .error(createHttpError.BadRequest("please enter a valid password")),
  fileUploadPath: joi
    .string()
    .error(createHttpError.BadRequest("please enter a file upload path")),
  file_name: joi
    .string()
    .error(createHttpError.BadRequest("please enter a file name")),
});

module.exports = {
  userCompleteProfile,
};
