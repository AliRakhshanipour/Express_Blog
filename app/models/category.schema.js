const { model, Schema } = require("mongoose");

const schema = new Schema({
  title: {
    type: String,
    required: true,
  },
  parent: {
    type: String,
    ref: "category",
    default: undefined,
  },
  description: {
    type: String,
    default: "",
  },
});

module.exports = {
  CategoryModel: model("category", schema),
};
