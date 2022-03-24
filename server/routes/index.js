var express = require("express");
const passportConfig = require("../config/passportConfig");
var router = express.Router();
var userSchema = require("../models/userSchema");
const passport = require("passport");
/* GET home page. */

router.post("/register", async (req, res, next) => {
  const user = new userSchema(req.body);
  try {
    await user.save();
    console.log("Done");
    res.send(user);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.post("/login",(req,res,next)=>{
  passport.authenticate("local",(err,user,info)=>{
    if(err)throw err;
    if(!user) res.send("No User Exists");
    else{
      req.login(user,err=>{
        if(err) throw err;
        res.send(user)
        console.log(req.user)
      })
    }
  })(req,res,next);
})

router.get("/users/timepass", async (req, res, next) => {
    res.send(req.user)
});



router.get("/users/:email", async (req, res, next) => {
  const email = req.params.email;
  const data = await userSchema.findOne({ email: email });
  if (data == null) {
    res.json(false);
  } else {
    res.json(true);
  }
});

router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

module.exports = router;
