const { Types, model, Schema } = require("mongoose");

const schema = new Schema(
  {
    title: { type: String, required: true },
    permissions: {
      type: [Types.ObjectId],
      ref: "permissions",
      default: [],
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

module.exports = {
  RoleModel: model("role", schema),
};
