require("dotenv").config();
const express = require("express")
const cors = require("cors");
const path = require("path");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const incomeRoutes = require("./routes/incomeRoutes");
const expenseRoutes = require("./routes/expenseRoutes");
const dashboardRoutes = require("./routes/dashboardRoutes");

const app = express();

//  Middleware to handle cors 
app.use(
  cors()
);

app.use(express.json());

connectDB();

app.get('/',(req,res)=>res.send("API Working"))

 app.use("/api/v1/auth", authRoutes);

 app.use("/api/v1/income", incomeRoutes);

 app.use("/api/v1/expense", expenseRoutes);

 app.use("/api/v1/dashboard", dashboardRoutes);

 // Server uploads folder
 app.use("/uploads", express.static(path.join(__dirname, "uploads")));

const PORT = process.env.PORT||5000;
app.listen(PORT,()=>console.log(`Server is running on port ${PORT} `));