const joi = require("joi");
const createHttpError = require("http-errors");
const { OBJECTIDPATTERN } = require("../../../utils/constants");

const categoryValidator = joi.object({
  title: joi
    .string()
    .min(3)
    .error(createHttpError.BadRequest("please enter a title for the category")),
  parent: joi
    .string()
    .pattern(OBJECTIDPATTERN)
    .error(createHttpError.BadRequest("please enter parent correctly")),
  description: joi
    .string()
    .min(10)
    .allow("")
    .error(
      createHttpError.BadRequest(
        "please enter description for the category correctly"
      )
    ),
});

module.exports = {
  categoryValidator,
};
