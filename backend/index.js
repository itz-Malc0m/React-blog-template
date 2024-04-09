import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv';
// import { MongoClient } from "mongodb";

dotenv.config();

mongoose.connect(process.env.MONGO).then(
    () => {console.log("Mongo is active...")}
).catch((err) => {
    console.log(err)
})

const app =  express();

app.listen(3030, () => {
    console.log("Server is running on port 3030...")
});