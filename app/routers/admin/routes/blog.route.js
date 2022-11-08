const {
  BlogController,
} = require("../../../http/controllers/admin/blog/blog.controller");
const { stringToArray } = require("../../../middlewares/string-to-array");
const { uploadImage } = require("../../../utils/upload-functions/multer");

const router = require("express").Router();

router.post(
  "/create-blog",
  uploadImage.single("image"),
  stringToArray("tags", "category"),
  BlogController.createBlog
);
router.get("/list", BlogController.getBlogList);

router.patch("/edit/:id", BlogController.editBlog);
router.delete("/delete/:id", BlogController.deleteBlog);

module.exports = {
  ApiBlogRouter: router,
};
