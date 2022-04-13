var express = require("express");
var router = express.Router();
var userSchema = require("../models/userSchema");

/* GET home page. */

router.patch("/add", async (req, res) => {
  userSchema
    .updateOne(
      { email: req.body.email },
      {
        $push: {
          courses: {
            name: req.body.title,
            code: req.body.code,
            description: req.body.description,
          },
        },
      }
    )
    .then(() => {
      res.send("success");
    });
});

router.patch("/add/video", async (req, res) => {
  console.log(req.body.class);
  console.log(req.body.email);
  console.log(req.body.title);
  console.log(req.body.description);
  console.log(req.body.upload);
  userSchema
    .updateOne(
      { email: req.body.email, "courses.code": req.body.class },
      {
     
                $push:{
                "courses.$.videos": {
                  title: req.body.title,
                  description: req.body.description,
                  upload: req.body.upload
                }
            
           
          },
      }
    )
    .then(() => {
      res.send("success video saved on MongoDB");
    });
});

router.post("/get/info", async (req, res) => {
  let resData
  userSchema
    .findOne({ email: req.body.email, "courses.code": req.body.class })
    .then((data) => {
      for(let i=0;i<data.courses.length;i++){
        if(data.courses[i].code===req.body.class){
          resData=data.courses[i];
          break
        }
      }
      res.send(resData);
    });
})


router.post("/data", async (req, res) => {
  userSchema.findOne({ email: req.body.email }).then((data) => {
    res.send(data.courses);
  });
});

module.exports = router;
