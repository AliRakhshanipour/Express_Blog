const { model, Schema } = require("mongoose");

const schema = new Schema(
  {
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
  },
  {
    timestamps: true,
    id: false,
    versionKey: false,
    toJSON: { virtuals: true },
  }
);

schema.virtual("children", {
  ref: "category",
  localField: "_id",
  foreignField: "parent",
});

const autoPopulate = function (next) {
  this.populate([{ path: "children" }]);
  next();
};

schema.pre("findOne", autoPopulate).pre("find", autoPopulate);

module.exports = {
  CategoryModel: model("category", schema),
};
