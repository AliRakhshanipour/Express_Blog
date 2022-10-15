const {
  BlogController,
} = require("../../../http/controllers/admin/blog/blog.controller");

const router = require("express").Router();

router.get("/list", BlogController.getBlogList);

module.exports = {
  ApiBlogRouter: router,
};
