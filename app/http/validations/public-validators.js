const createHttpError = require("http-errors");
const joi = require("joi");

const isObjectId = joi.object({
  id: joi
    .string()
    .pattern(/^(?=[a-f\d]{24}$)(\d+[a-f]|[a-f]+\d)/)
    .error(createHttpError.BadRequest("permission id is invalid")),
});

module.exports = {
  isObjectId,
};
