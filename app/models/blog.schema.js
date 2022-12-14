const { Types, model, Schema } = require("mongoose");

const commentSchema = new Schema(
  {
    user: { type: Types.ObjectId, ref: "users", required: true },
    comment: { type: String, required: true },
    parent: { type: Types.ObjectId, ref: "comment" },
  },
  {
    timestamps: true,
    versionKey: false,
    id: false,
    toJSON: {
      virtuals: true,
    },
  }
);

const schema = new Schema(
  {
    title: {
      type: String,
      required: true,
      lowercase: true,
    },
    short_text: { type: String, required: true, lowercase: true },
    text: { type: String, required: true, lowercase: true },
    image: { type: String, required: true },
    category: { type: [Types.ObjectId], default: [] },
    tags: { type: [String] },
    comments: { type: [commentSchema], default: [] },
    likes: { type: [Types.ObjectId], default: [] },
    dislikes: { type: [Types.ObjectId], default: [] },
    bookmarks: { type: [Types.ObjectId], default: [] },
  },
  {
    timestamps: true,
    id: false,
    versionKey: false,
    toJSON: {
      virtuals: true,
    },
  }
);

module.exports = {
  BlogModel: model("blog", schema),
  CommentModel: model("comment", commentSchema),
};
