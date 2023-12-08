import express from "express";
import { login, register } from "../contol/auth.js";
  const router = express.Router();

  router.get('/',(req,res)=>{
    res.send('HellO world')
  });

  router.post("/register",register);
  router.post("/Login",login);

  // module.exports = router

   export default router