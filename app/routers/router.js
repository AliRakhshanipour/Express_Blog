const { IndexPageRoutes } = require("./api");

const router = require("express").Router();

router.use("/", IndexPageRoutes);

module.exports = {
  AllRoutes: router,
};
