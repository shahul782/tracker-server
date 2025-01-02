const mongoose = require("mongoose");
async function connectDB() {
  try {
    const client = await mongoose.connect(
      "mongodb://127.0.0.1:27017/expenseTracker"
    );
    console.log("MongoDB connected successfully!");
  } catch (error) {
    console.log(error);
    console.log("MongoDB connection failed");
  }
}
module.exports = connectDB;
