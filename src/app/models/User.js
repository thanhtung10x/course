const { Schema, model } = require("mongoose");
const slug = require("mongoose-slug-generator");
const mongooseDelete = require("mongoose-delete");

const User = new Schema(
  {
    email: { type: String, required: true },
    password: { type: String, required: true },
    avatar: { type: String },
    fullname: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

// Add plugins
User.plugin(mongooseDelete, {
  deletedAt: true,
  overrideMethods: "all",
});

module.exports = model("User", User);
