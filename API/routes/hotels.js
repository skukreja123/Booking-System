// const { makeeeror } = require('../utils/error.js').default;

// This one for another function which help me to verify the admin/
import SchemaHotel from "../views/Hotel.js"
import express from "express";
import { verifyadmin, verifytoken, verifyuser } from "../utils/verify.js"

import { CountByCity, CountByType, countbyroom, createhotel, deletehotel, getallhotel, gethotel, updatehotel } from "../contol/hotels.js";

  const router = express.Router();

  // CREATE
    router.post("/",verifyadmin,createhotel )
    // UPDATE
    router.put("/:id",verifyadmin,updatehotel)
  //Delete
  router.delete("/:id",verifyadmin,deletehotel )

//GET
router.get("/find/:id", gethotel)
//GET ALL
router.get("/", getallhotel)

router.get("/CountByCity", CountByCity)
router.get("/CountByType", CountByType)
router.get("/room/:id",countbyroom)


export default router