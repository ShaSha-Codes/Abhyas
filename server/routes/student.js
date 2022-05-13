var express = require("express");
var router = express.Router();
var userSchema = require("../models/userSchema");

/* GET home page. */

router.post("/get", async (req, res) => {
  userSchema.findOne({ email: req.body.email }).then((data) => {
    res.send(data);
  });
});


router.post("/getClass", async (req, res) => {
  userSchema
    .findOne({ "courses.code": req.body.code })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      console;
    });
});


router.post("/get/quiz", async (req, res) => {
  let resData;
  let courseCode;
  userSchema
    .findOne({ type: "teacher", "courses.quiz.code": req.body.code })
    .then((data) => {
      for (let i = 0; i < data.courses.length; i++) {
        for(let j=0; j<data.courses[i].quiz.length; j++){
          if (data.courses[i].quiz[j].code === req.body.code) {
            courseCode=data.courses[i].code
            resData = data.courses[i].quiz[j];
            break;
          }
        }
      }

      res.send([courseCode,resData]);
    });
});



router.patch("/submit/quiz", async (req, res) => {
  console.log(req.body.code)
  console.log(req.body.marks)
  console.log(req.body.qa)
  console.log(req.body.status)
  console.log(req.body.email)
  console.log(req.body.courseCode)
    userSchema
      .updateOne(
        { email: req.body.email,"courses.code":req.body.courseCode },
        {
          $push: {
            "courses.$.quiz": {
              code: req.body.code,
              qa: req.body.qa,
              marks: req.body.marks,
              status: req.body.status,

            },
          },
        }
      )
      .then(() => {
        res.send(true);
      });
  });
  

router.patch("/add/teacher", async (req, res) => {
  userSchema
    .updateOne(
      { email: req.body.teacher, "courses.code": req.body.class },
      {
        $push: {
          "courses.$.users": {
            email: req.body.email,
            name: req.body.name,
          },
        },
      }
    )
    .then(() => {
      res.send("User added in teacher class db");
    });
});

router.patch("/addClass", async (req, res) => {
  userSchema
    .updateOne(
      { email: req.body.email },
      {
        $push: {
          courses: {
            name: req.body.name,
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

router.post("/get/info", async (req, res) => {
  let resData;
  userSchema
    .findOne({ "courses.code": req.body.code,type:"student" })
    .then((data) => {
      for (let i = 0; i < data.courses.length; i++) {
        if (data.courses[i].code === req.body.class) {
          resData = data.courses[i];
          break;
        }
      }
      res.send(resData);
    });
});


module.exports = router;
