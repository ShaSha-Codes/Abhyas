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

module.exports = router;
