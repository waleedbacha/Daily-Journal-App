
import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

export const dbConnection  = async() => {
try {
    await mongoose.connect(process.env.DB_URI , {
        dbName: process.env.DB_NAME,
    })
    console.log("Databasse Connected Successfully")
} catch (err) {
    console.log("Failed to connect" , err.message)
}
}

