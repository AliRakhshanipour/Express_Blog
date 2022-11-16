const {
  CommentController,
} = require("../../../http/controllers/admin/blog/comment.controller");

const router = require("express").Router();

router.post("/create-comment", CommentController.createComment);

module.exports = {
  ApiCommentRouter: router,
};
