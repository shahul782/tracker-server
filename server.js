const express = require("express");
const cors = require("cors");
const connectDB = require("./Database/Database");
const expenseRouter = require("./Routes/Tracker"); 

const app = express();
app.use(cors());

app.use(express.json());
connectDB();
app.use("/api/v1", expenseRouter); 
app.get("/", (req, res) => {
  res.send("Hello World!");
})
const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
