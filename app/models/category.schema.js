const { model, Schema } = require("mongoose");

const schema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    default: "",
  },
});

module.exports = {
  CategoryModel: model("category", schema),
};
