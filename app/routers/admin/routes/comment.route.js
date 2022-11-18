const {
  CommentController,
} = require("../../../http/controllers/admin/blog/comment.controller");

const router = require("express").Router();

router.post("/create-comment", CommentController.createComment);
router.get("/get-comments/:id", CommentController.getCommentsOfBlog);
router.delete("/delete-comment/:id", CommentController.deleteComment);

module.exports = {
  ApiCommentRouter: router,
};
