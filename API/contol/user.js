import SchemaUser from "../views/User.js"
import express from "express";
import { errorcreate } from "../utils/error.js";


export const updateuser = async (req,res,next)=>{
    try{
        const updateUser = await SchemaUser.findByIdAndUpdate(req.params.id, {$set: req.body},{new:true});
        res.status(200).json(updateUser);
        console.log('saved');

    } catch(error){   
      next(error);
    }
}


  export const deleteuser = async (req,res,next)=>{
    try{
        await SchemaUser.findByIdAndDelete(req.params.id);
        res.status(200).json("User Data is delete");
        console.log('saved');

    } catch(error){
        next(error);
    }
};

  export const getuser =   async (req,res,next)=>{
    try{
        const Userfind = await SchemaUser.findById(req.params.id);
        res.status(200).json(Userfind);
        console.log('saved');

    } catch(error){
        next(error);
    }
}

  export const getalluser = async (req,res,next)=>{
    // const failed = true;
    // if(failed) return next(makeeeror(408,"Sorry Something wrong"));

    try{
        const Userall = await SchemaUser.find();
        res.status(200).json(Userall);
    } catch(error){
        next(error);
    }
}