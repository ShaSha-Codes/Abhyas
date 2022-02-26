var express = require("express");
var router = express.Router();
var userSchema=require("../models/userSchema")
/* GET home page. */

router.post("/",async(req,res,next)=>{
  const user = new userSchema(req.body);
  try {
    await user.save();
    console.log("Done")
    res.send(user);
  } catch (error) {
    res.status(500).send(error);
  }
})

router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

module.exports = router;
