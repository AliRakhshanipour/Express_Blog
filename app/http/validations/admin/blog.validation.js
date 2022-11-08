const createHttpError = require("http-errors");
const joi = require("joi");
const { OBJECTIDPATTERN } = require("../../../utils/constants");

const createBlogValidator = joi.object({
  title: joi
    .string()
    .min(3)
    .error(createHttpError.BadRequest("please enter a valid title")),
  short_text: joi
    .string()
    .min(10)
    .error(createHttpError.BadRequest("please enter a valid short text")),
  text: joi
    .string()
    .min(20)
    .error(createHttpError.BadRequest("please enter a valid text")),
  fileUploadPath: joi
    .string()
    .trim()
    .error(createHttpError.BadRequest("image can not be empty")),
  file_name: joi
    .string()
    .trim()
    .error(createHttpError.BadRequest("please upload image correctly")),
  category: joi
    .array()
    .items(joi.string().pattern(OBJECTIDPATTERN))
    .allow("")
    .error(createHttpError.BadRequest("please enter a valid category")),
  tags: joi
    .array()
    .allow("")
    .error(createHttpError.BadRequest("please enter tag correctly")),
});

module.exports = {
  createBlogValidator,
};
