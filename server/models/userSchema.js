const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  courses: [
    {
      code: String,
      name: String,
      description: String,
      videos: [{ title: String,description: String, upload: String }],
      assignments: [{ name: String }],
      quiz: [{ name: String }],
    },
  ],
  type: {
    type: String,
    required: true,
  },
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
