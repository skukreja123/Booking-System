
import mongoose from "mongoose";

const   RoomSchma = new mongoose.Schema({
    title:{
        type: String,
        required: true,
        unique: true
    },
    price:{
        type: Number,
        required: true,
    },
    maxpeople:{
        type: Number,
        required: true,
    },
    desc:{
        type:String,
        required: true
    },
    roomnumber:[{number: Number,unavailableDate:{type:[Date] }}],
},{timestamps:true });

// [
//     {number:101,unavailableDate:[01.05.2022,02.05.2022]}
// ]

export default mongoose.model("Room",RoomSchma)

