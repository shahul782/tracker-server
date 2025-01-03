


const mongoose = require("mongoose");

async function connectDB() {
  try {

    const uri = "mongodb+srv://shahul1145:Shahul%40123@cluster0.q83rynw.mongodb.net/tracker";

    const client = await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected successfully!");
  } catch (error) {
    console.error("Error:", error.message);
    console.error("MongoDB connection failed");
  }
}

module.exports = connectDB;
