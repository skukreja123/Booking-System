import { errorcreate } from "../utils/error.js";
import jwt from "jsonwebtoken";



export const verifytoken = (req,res,next) => {
    const token = req.cookies.access_token;

    if(!token)
    {
        return next(errorcreate(401,"You are not authticated"));
    }

    jwt.verify(token,process.env.JWT,(err,user)=>{
        if(err)
        {
            return next(errorcreate(409,"Token not valied"));
        }
        req.user = user;
        next();
    })
}



export const verifyuser  = (req,res,next) =>{
    verifytoken(req,res,next, () =>{
        if(req.user.id === req.params.id || req.user.isadmin)
        {
            next();
        }
        else{
            if(err)
            {
                return next(errorcreate(409,"you are not authorized"));
            }

        }

    })
}


export const verifyadmin  = (req,res,next) =>{
    verifytoken(req,res,next, () =>{
        if(req.user.isadmin)
        {
            next();
        }
        else{
            if(err)
            {
                return next(errorcreate(409,"you are not authorized"));
            }

        }

    })
}