const express = require("express");
const router = express.Router();
const User = require("./../Users");
const validator = require("email-validator");

router.post("/", (req, res) => {
  const { name, email, account, password } = req.body;
  User.findOne({ email: email }).then((user) => {
    if (user) {
      res.json({ status: "signup", error: "Email Id is taken" });
    } else {
      User.findOne({ account: account }).then((user) => {
        if (user) {
          res.json({ status: "signup", error: "Account No. is taken" });
        } else {
          if (!validator.validate(email)) {
            res.json({ status: "signup", error: "Please Enter a valid Email" });
          } else {
            const newUser = new User({
              name: name,
              email: email.toLowerCase(),
              account: account,
              password: password,
              balance: 10000,
            });
            newUser
              .save()
              .then(() =>
                res.json({
                  status: "login",
                  error: "Registeration Successfull Please login to procced",
                })
              )
              .catch(() =>
                res.json({
                  status: "signup",
                  error: "Cannot connect to database",
                })
              );
          }
        }
      });
    }
  });
});

module.exports = router;
