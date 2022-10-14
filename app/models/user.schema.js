const { Schema, Types, model } = require("mongoose");

const schema = new Schema("user", {
  first_name: {
    type: String,
    lowercase: true,
  },
  last_name: { type: String, lowercase: true },
  username: { type: String, lowercase: true },
  email: { type: String, lowercase: true },
  phone: { type: String },
  password: { type: String },
  role: { type: Types.ObjectId },
  avatar: { type: String },
  interested_in: { type: [Types.ObjectId], default: [] },
  otp: {
    type: Object,
    default: {
      code: 0,
      expires: 0,
    },
  },
});

module.exports = {
  UserModel: model("user", schema),
};
