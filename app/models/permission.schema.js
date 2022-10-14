const { model, Schema } = require("mongoose");

const schema = new Schema({
  title: { type: String, required: true },
  description: { type: String },
});

module.exports = {
  PermissionModel: model("permission", schema),
};
