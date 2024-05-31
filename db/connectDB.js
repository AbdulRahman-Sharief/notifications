const mongoose = require("mongoose");
const connectDB = async () =>
  await mongoose
    .connect(process.env.MONGODB_URL, {
      connectTimeoutMS: 10000,
      socketTimeoutMS: 45000,
    })
    .then(() => {
      console.log("Success => Connected to database...");
    })
    .catch((err) => {
      console.log("🚀 ~ file: database.js:10 ~ err:", err);
      console.log("Error => Cannot connect to database!");
    });

module.exports = connectDB;
