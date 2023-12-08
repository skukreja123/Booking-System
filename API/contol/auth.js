
import User from "../views/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";



export const register = async (req,res,next)=>{
    try{
        // for encype d the password
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password,salt);

        const newuser = new User({
            name: req.body.name,
            Email : req.body.Email,
            password: hash,
        })
        await newuser.save();
        console.log("User Has been Created");
        res.status(200).send("User Has been Created");
    }
    catch(error)
    {
        next(error);
    }
};


export const login = async (req,res,next)=>{
    try{
        const user = await  User.findOne({name : req.body.name});
        if(!user) return next(error);
        //compare the hash password
        const comparepassword = await bcrypt.compare(req.body.password,user.password);
        if(!comparepassword) return next(error);

        const token = jwt.sign({id:user._id , isadmin:user.isadmin}, process.env.JWT);

        const {password, isadmin, ...otherDetails} = user._doc; 
        res.cookie("access_token",token,{
            httyOnly : true,
        }).status(200).json({details:{...otherDetails},isadmin});
    }
    catch(error)
    {
            next(error);
    }
}
