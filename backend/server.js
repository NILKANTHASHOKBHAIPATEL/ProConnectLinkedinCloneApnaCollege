import express from 'express';

import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import postRoutes from "./routes/posts.router.js";
import userRoutes from "./routes/user.router.js";


dotenv.config();

const app=express();

app.use(cors());
app.use(express.json());
app.use(postRoutes);
app.use(userRoutes);
app.use(express.static('uploads'));


const start=async()=>{
    const connectDB=await mongoose.connect("mongodb+srv://chandrikaapatel1974_db_user:0kUkaC3k6yVLAqBt@cluster0.iivvwfc.mongodb.net/?appName=Cluster0");

    app.listen(9090,()=>{
        console.log("server is listening on port 9090");
    });
}

start();