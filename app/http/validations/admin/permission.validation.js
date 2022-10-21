const createHttpError = require("http-errors");
const joi = require("joi");

const addPermissionValidator = joi.object({
  title: joi
    .string()
    .min(4)
    .max(40)
    .error(createHttpError.BadRequest("Please Enter A Valid Title")),
  description: joi
    .string()
    .min(4)
    .allow("", null, " ")
    .error(createHttpError.BadRequest("Please Enter a Valid Description")),
});

const editPermissionValidator = joi.object({
  title: joi
    .string()
    .min(4)
    .max(40)
    .error(createHttpError.BadRequest("Please Enter A Valid Title")),
  description: joi
    .string()
    .min(4)
    .allow("", null, " ")
    .error(createHttpError.BadRequest("Please Enter a Valid Description")),
});

const deletePermissionValidator = joi.object({
  id: joi
    .string()
    .pattern(/^(?=[a-f\d]{24}$)(\d+[a-f]|[a-f]+\d)/)
    .error(createHttpError.BadRequest("permission id is invalid")),
});

module.exports = {
  addPermissionValidator,
  deletePermissionValidator,
  editPermissionValidator,
};
