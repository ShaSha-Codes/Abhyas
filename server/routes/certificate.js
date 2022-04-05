const express = require("express");
const router = express.Router();
const certificateSchema = require("../models/certificateSchema");

router.get("/verify/:cred", async (req, res) => {
  certificateSchema
    .findOne({ cred: req.params.cred })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.send(err);
    });
});

module.exports = router;
