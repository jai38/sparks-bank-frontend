const express = require("express");
const router = express.Router();
const User = require("./../Users");

router.post("/", (req, res) => {
  let { email, password } = req.body;
  let allUsers = {};
  User.find()
    .then((users) => {
      allUsers = users;
      email = email.toLowerCase();
      User.findOne({ email }).then((user) => {
        if (user) {
          if (user.password == password) {
            res.json({
              allUsers: users,
              data: user,
              status: "dashboard",
              error: "success",
            });
          } else {
            res.json({
              allUsers: users,
              data: user,
              status: "login",
              error: "Invalid Password",
            });
          }
        } else {
          res.json({
            allUsers: users,
            data: user,
            status: "login",
            error: "Invalid EmailId",
          });
        }
      });
    })
    .catch((err) => {
      res.json({
        allUsers: allUsers,
        status: "login",
        error: "Cannot connect to database",
      });
    });
});

module.exports = router;
