const router = require("express").Router();
const {
  CategoryController,
} = require("../../../http/controllers/admin/category/category.controller");

router.post("/create", CategoryController.createCategory);
router.get("/list", CategoryController.getCategories);
router.delete("/delete/:id", CategoryController.deleteCategory);

module.exports = {
  ApiCategoryRouter: router,
};
