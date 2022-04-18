var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const mongoose = require("mongoose");
const passport = require("passport");
const passportLocal = require("passport-local").Strategy;
const URI = require("./config/keys").URI;
const session = require("express-session");
const cors = require("cors");
const classRouter = require("./routes/class");
var indexRouter = require("./routes/index");
var certificateRouter = require("./routes/certificate");
var usersRouter = require("./routes/users");

http = require('http');
var app = express();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

io.on("connection", (socket) => {
  console.log("User Online");

  socket.on("canvas-data", (data) => {
    socket.broadcast.emit("canvas-data", data);
  });
});

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(
  session({
    secret: "Big Secret",
    resave: true,
    saveUninitialized: true,
  })
);

app.use(passport.initialize());
app.use(passport.session());
require("./config/passportConfig")(passport);

app.use(
  cors({
    origin: "http://localhost:3001",
    credentials: true,
  })
);
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser("Big Secret"));
app.use(express.static(path.join(__dirname, "public")));

mongoose.connect(URI).then(() => console.log("Connected to Database"));

app.use("/certificate", certificateRouter);
app.use("/class", classRouter);
app.use("/", indexRouter);

// app.use("/users", usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});


module.exports = app;
