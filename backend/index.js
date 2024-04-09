import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv';
import userRoutes from "./routes/users.routes.js";
import authRoutes from "./routes/auth.route.js"
// import { MongoClient } from "mongodb";

dotenv.config();

mongoose.connect(process.env.MONGO).then(
    () => {console.log("Mongo is active...")}
).catch((err) => {
    console.log(err)
})

const app =  express();

app.use(express.json())

app.listen(3030, () => {
    console.log("Server is running on port 3030...")
});

app.use('/api/users',userRoutes )
app.use('/api/auth',authRoutes )


app.use((err, req,res, next) =>{
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error'

    res.status(statusCode).json({
        success: false,
        statusCode,
        message
    })
})