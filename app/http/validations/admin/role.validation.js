const createHttpError = require("http-errors");
const joi = require("joi");

const createRoleValidator = joi.object({
  title: joi
    .string()
    .min(3)
    .max(16)
    .uppercase()
    .error(createHttpError.BadRequest("Please Enter A Valid Title")),
  permissions: joi
    .array()
    .items(joi.string().pattern(/^(?=[a-f\d]{24}$)(\d+[a-f]|[a-f]+\d)/))
    .error(createHttpError.BadRequest("Please Enter a Valid Permission")),
});

const editRoleValidator = joi.object({
  permissions: joi
    .array()
    .items(joi.string().pattern(/^(?=[a-f\d]{24}$)(\d+[a-f]|[a-f]+\d)/))
    .error(createHttpError.BadRequest("Please Enter a Valid Permission")),
});

module.exports = {
  createRoleValidator,
  editRoleValidator,
};
