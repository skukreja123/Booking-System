import express from "express";
import {
  createRoom,
  deleteRoom,
  getRoom,
  getRooms,
  updateRoom,
  updateRoomAvailability,
} from "../contol/room.js";
import { verifyadmin } from "../utils/verify.js";

const router = express.Router();
//CREATE
router.post("/:hotelid", verifyadmin, createRoom);

//UPDATE
router.put("/availability/:id", updateRoomAvailability);
router.put("/:id", verifyadmin, updateRoom);
//DELETE
router.delete("/:id/:hotelid", verifyadmin, deleteRoom);
//GET

router.get("/:id", getRoom);
//GET ALL

router.get("/", getRooms);

export default router;
