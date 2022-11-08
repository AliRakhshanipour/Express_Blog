const router = require("express").Router();
const {
  CategoryController,
} = require("../../../http/controllers/admin/category/category.controller");

router.post("/create", CategoryController.createCategory);

module.exports = {
  ApiCategoryRouter: router,
};
