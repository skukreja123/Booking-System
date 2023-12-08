import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authmethod from "./routes/auth.js";
import usermethod from "./routes/user.js";
import hotelmethod from "./routes/hotels.js";
import roommethod from "./routes/room.js";
import cookieParser from "cookie-parser";
import cors from "cors";


const port = 8000
dotenv.config();

const app = express();
// config();

const connect = async () => {
    try {
      await mongoose.connect(process.env.MONGO);
      console.log("Connected to mongoDB.");
    } catch (error) {
      throw error;
    }
  };

  mongoose.connection.on("disconnected", () => {
    console.log("mongoDB disconnected!");
  });

app.use(cors());
app.use(cookieParser())
app.use(express.json());

app.use('/api/auth',authmethod);
app.use('/api/rooms',roommethod);
app.use('/api/hotels',hotelmethod);
app.use('/api/user',usermethod);

app.use((err,req,res,next)=>{
    const errorstatus = err.status || 500
    const errormessage = err.message || "Something went Wrong"; 
    return res.status(errorstatus).json({
        success: false,
        status: errorstatus,
        message: errormessage,
        stack: err.stack,
    });
})


app.listen(port, () => {
    connect();
    console.log(`Example app listening on port ${port}!`)
});