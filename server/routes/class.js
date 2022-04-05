var express = require("express");
var router = express.Router();
var userSchema = require("../models/userSchema");

/* GET home page. */




router.patch("/add", async (req, res) => {
  console.log(req.body.email)
  console.log(req.body.description)
  console.log(req.body.title)
  console.log(req.body.code)
  userSchema.updateOne({email: req.body.email}, 
    {$push: {courses: {name: req.body.title, code:req.body.code,description:req.body.description}}}).then(()=>{
      res.send("success")
    });
});


module.exports = router;
