import { Router,Response,Request } from "express";
const router = Router();

const auth = require("../middleware/auth");


router.get("/",(req,res)=>{
  res.send("Ping pong")
})

router.post("/newLocation",auth,async (req,res)=>{
  try {
    console.log(req.body);
    const existUser = await User.findOne({ email: req.body.user_id });

    if (!existUser) {
      return res.status(400).json({ msg: "user_id manupulated" });
    }

    
  } catch (err) {
    console.log(err);
    res.status(500).send();
  }


})

module.exports = router;