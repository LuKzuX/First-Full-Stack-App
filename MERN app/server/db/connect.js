const mongoose = require("mongoose");

const connectDB = (string) => {
  return mongoose.connect(string)
};

module.exports = connectDB
