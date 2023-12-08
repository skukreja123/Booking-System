// const { makeeeror } = require('../utils/error.js').default;
import express from "express";
import { verifyadmin, verifytoken, verifyuser } from "../utils/verify.js"

import { deleteuser, getalluser, getuser, updateuser } from "../contol/user.js"

  const router = express.Router();


//   router.get("/checkauthen",verifytoken, (req,res,next)=>{
//     res.send("Hello User your authenication successfully")
//   })

//   router.get("/checkuser/:id",verifyuser, (req,res,next)=>{
//     res.send("Hello User your authenication successfully now you delete t")
//   })
//   router.get("/checkadmin/:id",verifyadmin, (req,res,next)=>{
//     res.send("Hello admin your authenication successfully  you  delete all counrt t")
//   })

    // UPDATE
    router.put("/:id",verifyuser , updateuser)
  //Delete
  router.delete("/:id",verifyuser,deleteuser)

//GET
router.get("/:id",verifyuser,getuser )

//GET ALL
router.get("/",verifyadmin,getalluser )

export default router
