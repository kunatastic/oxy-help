import { Router,Response,Request } from "express";


const  {User } = require("../models/User");
const router = Router();

const auth = require("../middleware/auth");


router.get("/",(req,res)=>{
  res.send("Ping pong")
})

router.post("/newLocation",auth,async (req,res)=>{

  try {
    console.log(req.id);
    const existUser = await User.findOne({ _id: req.id });
    
    if (!existUser) {
      console.log(req.body);
      return res.status(400).cookie("token", "", {
      httpOnly: true,
      expires: new Date(0),
    }).json({ msg: "user_id manupulated" });
    }

    console.log(existUser);
    
  } catch (err) {
    console.log(err);
    res.status(500).send();
  }
})

module.exports = router;