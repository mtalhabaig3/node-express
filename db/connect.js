const mongoose = require("mongoose");

const connectDB = async (url) => {
  return mongoose.connect(url).catch((e) => console.log(e));
};

module.exports = connectDB;
