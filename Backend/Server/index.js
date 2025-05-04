import connectDB from "./config/db.js";
import express from 'express'
const app = express()
await connectDB()
const PORT =  process.env.PORT || 5000



app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
    
})