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

router.post("/data", async (req, res) => {
  userSchema.findOne({ email: req.body.email }).then((data) => {
    res.send(data.courses);
  });
});

module.exports = router;
