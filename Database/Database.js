// const mongoose = require("mongoose");

// async function connectDB() {
//   try {
//     const client = await mongoose.connect(
//       "mongodb+srv://shahul1145:Shahul@123@cluster0.q83rynw.mongodb.net/tracker" ,
//       {
//         useNewUrlParser: true,
//         useUnifiedTopology: true,
//       }
//     );
//     console.log("MongoDB connected successfully!");
//   } catch (error) {
//     console.log(error);
//     console.log("MongoDB connection failed");
//   }
// }
// module.exports = connectDB;

// // "mongodb://127.0.0.1:27017/expenseTracker" pass:923IKYHSTB3Reazz


const mongoose = require("mongoose");

async function connectDB() {
  try {

    const uri = "mongodb+srv://shahul1145:Shahul%40123@cluster0.q83rynw.mongodb.net/tracker?retryWrites=true&w=majority";

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
