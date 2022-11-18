const createHttpError = require("http-errors");
const joi = require("joi");
const { OBJECTIDPATTERN } = require("../../../utils/constants");

const commentValidator = joi.object({
  parent: joi
    .string()
    .pattern(OBJECTIDPATTERN)
    .error(
      createHttpError.BadRequest("please enter a valid parent id for comment")
    ),
  comment: joi
    .string()
    .min(3)
    .trim()
    .error(createHttpError.BadRequest("please enter a valid comment")),
});
const getCommentsValidator = joi.object({
  id: joi
    .string()
    .pattern(OBJECTIDPATTERN)
    .error(
      createHttpError.BadRequest("please enter a valid parent id for comment")
    ),
});

module.exports = {
  commentValidator,
  getCommentsValidator,
};
