import SchemaHotel from "../views/Hotel.js"
import express from "express";
import { errorcreate } from "../utils/error.js";
import Room from "../views/Room.js";


export const createhotel = async (req,res,next)=>{
    const model = new SchemaHotel(req.body);
    console.log(model);
    try{
        const saved = await model.save();
        res.status(200).json(saved);
        console.log('saved');

    } catch(error){
        next(error);
    }
}

export const updatehotel = async (req,res,next)=>{
    try{
        const updatehotel = await SchemaHotel.findByIdAndUpdate(req.params.id, {$set: req.body},{new:true});
        res.status(200).json(updatehotel);
        console.log('saved');

    } catch(error){   
      next(error);
    }
}
  export const deletehotel = async (req,res,next)=>{
    try{
        await SchemaHotel.findByIdAndDelete(req.params.id);
        res.status(200).json("Hotel Data is delete");
        console.log('saved');

    } catch(error){
        next(error);
    }
};

  export const gethotel =  async (req,res,next)=>{
    try{
        const hotelfind = await SchemaHotel.findById(req.params.id);
        res.status(200).json(hotelfind);
        console.log('saved');

    } catch(error){
        next(error);
    }
}


  export const getallhotel = async (req,res,next)=>{
    // const failed = true;
    // if(failed) return next(makeeeror(40 8,"Sorry Something wrong"));
    const {min,max, ...others} = req.query;
    try{
        const hotelall = await SchemaHotel.find({...others,cheapest:{ $gt:min | 1 , $lt: max || 200000},}).limit(req.query.limit);
        res.status(200).json(hotelall);
    } catch(error){
        next(error);
    }
}

export const CountByType = async (req,res,next)=>{
    // const failed = true;
    // if(failed) return next(makeeeror(40 8,"Sorry Something wrong"));
    try{
    const hotelcount = await SchemaHotel.countDocuments({type:"hotel"})
    const apartmentcount =await SchemaHotel.countDocuments({type:"Apartment"})
    const resortcount =await SchemaHotel.countDocuments({type:"Resort"})
    const vellascount =await SchemaHotel.countDocuments({type:"Vellas"})
    const cabincount =await SchemaHotel.countDocuments({type:"Cabin"})

     res.status(200).json([
        {type:"hotel",count:hotelcount},
        {type:"Apartment",count:apartmentcount},
        {type:"Resort",count:resortcount},
        {type:"Vellas",count:vellascount},
        {type:"Cabin",count: cabincount},
     ]);
    } catch(error){
        next(error);
    }
}

// Count Propertie of Cities
export const CountByCity = async (req,res,next)=>{

    const Cities = req.query.Cities.split(",")
    // const failed = true;
    // if(failed) return next(makeeeror(40 8,"Sorry Something wrong"));

    try{
        const list = await Promise.all(Cities.map(city =>{
            return SchemaHotel.countDocuments({city:city})
        }))
        res.status(200).json(list);
    } catch(error){
        next(error);
    }
}

export const countbyroom = async(req,res,next)=>{
    try{
        const hotel =await SchemaHotel.findById(req.params.id);
        const list = await Promise.all(hotel.rooms.map(room=>{
            return Room.findById(room);
        }))
        res.status(200).json(list)

    } catch(error){
        next(error)
    }
}