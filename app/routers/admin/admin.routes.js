const { ApiBlogRouter } = require("./routes/blog.route");

const router = require("express").Router();

router.use("/blog", ApiBlogRouter);

module.exports = {
  AdminRoutes: router,
};
