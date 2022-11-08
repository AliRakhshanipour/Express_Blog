const createHttpError = require("http-errors");
const { StatusCodes: httpStatus } = require("http-status-codes");
const { CategoryModel } = require("../../../../models/category.schema");
const { deleteEmptyValues } = require("../../../../utils/delete-empty-values");
const {
  categoryValidator,
} = require("../../../validations/admin/category.validation");
const { Controller } = require("../../controller");

class CategoryController extends Controller {
  async createCategory(req, res, next) {
    try {
      await categoryValidator.validateAsync(req.body);
      const data = { ...req.body };
      deleteEmptyValues(data);
      const { parent } = req.body;
      if (parent) {
        const checkParent = await CategoryModel.findOne({ _id: parent });
        if (!checkParent)
          throw createHttpError.NotFound("there is no parent with this id");
      }
      await this.checkCategoryExist(data.title);
      const category = await CategoryModel.create(data);
      if (!category) throw createHttpError.BadRequest("No category Created");
      else
        return res.status(httpStatus.CREATED).json({
          statusCode: httpStatus.CREATED,
          data: {
            message: "category created successfully",
          },
        });
    } catch (error) {
      next(createHttpError.BadRequest(error.message));
    }
  }
  async checkCategoryExist(title) {
    const category = await CategoryModel.findOne({ title });
    if (category) throw createHttpError.BadRequest("Category already exists");
    else return true;
  }
}
module.exports = {
  CategoryController: new CategoryController(),
};
