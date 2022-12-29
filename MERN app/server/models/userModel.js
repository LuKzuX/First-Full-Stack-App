const mongoose = require("mongoose");
const {isEmail} = require('validator')

const schema = new mongoose.Schema({
  name: { type: String, minLength: 3, required: [true, "please enter a name"] },
  email: {
    type: String,
    required: [true, "please enter an email"], 
    unique: true,
    lowercase: true,
    validate: [isEmail, 'please enter a valid email'],
  },
  password: {
    type: String,
    required: [true, "please enter a password"],
    minlength: [6, 'minimum password length is 6 characters'],
  },
  image: { type: String },
  isAdmin: { type: Boolean, required: true },
});

const User = mongoose.model("User", schema);
module.exports = User;
