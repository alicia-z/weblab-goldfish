/*
|--------------------------------------------------------------------------
| api.js -- server routes
|--------------------------------------------------------------------------
|
| This file defines the routes for your server.
|
*/

const express = require("express");

// import models so we can interact with the database
const User = require("./models/user");

// import authentication library
const auth = require("./auth");

// api endpoints: all these paths will be prefixed with "/api/"
const router = express.Router();

//initialize socket
const socketManager = require("./server-socket");

router.post("/login", auth.login);
router.post("/logout", auth.logout);
router.get("/whoami", (req, res) => {
  if (!req.user) {
    // not logged in
    return res.send({});
  }
  console.log(req.user)
  res.send(req.user);
});

router.post("/initsocket", (req, res) => {
  // do nothing if user not logged in
  if (req.user)
    socketManager.addUser(req.user, socketManager.getSocketFromSocketID(req.body.socketid));
  res.send({});
});

// |------------------------------|
// | write your API methods below!|
// |------------------------------|

router.post("/profileinfo", (req, res) => {
  // console.log(req.body.googleid)
  console.log(req.body.match)
  if (req.body.googleid) {
    User.findOne({ googleid: req.body.googleid }).then(
    (user) => {
      if (req.body.grad_year) user.grad_year = req.body.grad_year
      if (typeof req.body.has_swipes !== undefined) user.has_swipes = req.body.has_swipes
      if (req.body.major) user.major = req.body.major
      if (req.body.gender) user.gender = req.body.gender
      if (req.body.new_match) user.matches.push(req.body.new_match)
    user.save().then(() => (res.send(user)))}
    );
  }
});

router.get("/user", (req, res) => {
  User.findOne({ _id: req.query._id}).then((user) => {
    console.log(user);
    res.send(user);
  });
});

router.get("/users", (req, res) => {
  User.find({}).then((users) => res.send(users));
})

// anything else falls to this "not found" case
router.all("*", (req, res) => {
  console.log(`API route not found: ${req.method} ${req.url}`);
  res.status(404).send({ msg: "API route not found" });
});

module.exports = router;
