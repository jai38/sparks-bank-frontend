const express = require("express");
const router = express.Router();
const User = require("./../Users");
router.post("/", (req, res) => {
  let state = req.body;
  let requestUser = state.requestUser;
  let currentRequest = {
    date: new Date().toLocaleString(),
    name: state.name,
    account: state.account,
    amount: state.amount,
  };
  if (state.amount <= 0) {
    res.json({ status: "request", error: "Amount cannot be negative or 0" });
  } else {
    User.findOneAndUpdate(
      { account: requestUser.account },
      { $push: { requests: currentRequest } }
    )
      .then((user) => {
        res.json({
          status: "dashboard",
          error: `Request sent! Once the request is approved by ${requestUser.name}, Money will be credited in your account`,
        });
      })
      .catch((err) => {
        res.json({
          status: "request",
          error: "something went wrong! please try again later",
        });
      });
  }
});

module.exports = router;
