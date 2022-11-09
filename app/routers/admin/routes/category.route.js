const router = require("express").Router();
const {
  CategoryController,
} = require("../../../http/controllers/admin/category/category.controller");

router.post("/create", CategoryController.createCategory);
router.get("/list", CategoryController.getCategories);

module.exports = {
  ApiCategoryRouter: router,
};
