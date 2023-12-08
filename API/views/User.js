import { Schema, model } from 'mongoose';

const UserSchma = new Schema({
    name:{
        type: String,
        required: true,
        unique: true
    },
    Email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type:String,
        required: true
    },
    isadmin:{
        type: Boolean,
        default:false
    },
},{timestamps:true })

export default model("User",UserSchma)

