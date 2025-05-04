import mongoose from "mongoose"
import dotenv from 'dotenv';
dotenv.config();

//Function to connect to the MongoDb Database
const connectDB = async () => {
    mongoose.connection.on('connected',()=>console.log('Database connected'));
    await mongoose.connect(`${process.env.MONGODB_URI}/BudgetTracker`)
}

export default connectDB;