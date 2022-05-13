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
      videos: [{ title: String, description: String, upload: String }],
      assignments: [{ title: String, description: String, upload: String }],
      quiz: [{ code:String,title: String, description: String,status:String,marks:Number, qa:[{
        question: String,
        option1:String,
        option2:String,
        option3:String,
        option4:String,
        answer:String
      }
      ] }],
      notes: [{title: String, description: String, upload: String }],
      users: [{ email: String, name: String }]
    },
  ],
  type: {
    type: String,
    required: true,
  },
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
