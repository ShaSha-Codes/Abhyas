var express = require("express");
var router = express.Router();
var userSchema=require("../models/userSchema")
/* GET home page. */

router.post("/register",async(req,res,next)=>{
  const user = new userSchema(req.body);
  try {
    await user.save();
    console.log("Done")
    res.send(user);
  } catch (error) {
    res.status(500).send(error);
  }
})

router.get("/users/:email",async(req,res,next)=>{
  const email = req.params.email;
  const data=await userSchema.findOne({email:email})
  if(data==null){
    res.json(false)
  }else{
    res.json(true)
  }
})




router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

module.exports = router;
