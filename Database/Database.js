const mongoose = require("mongoose");

async function connectDB() {
  try {
    const client = await mongoose.connect(
      "mongodb://0.0.0.0:27017/mini-Ecommerce" ,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log("MongoDB connected successfully!");
  } catch (error) {
    console.log(error);
    console.log("MongoDB connection failed");
  }
}
module.exports = connectDB;

// "mongodb://127.0.0.1:27017/expenseTracker" pass:923IKYHSTB3Reazz