const express = require("express");
const router = express.Router();
const User = require("./../Users");
router.post("/", (req, res) => {
  let state = req.body;
  let account = state.account;
  let acceptUser = state.acceptData;
  User.findOneAndUpdate(
    { account },
    {
      $pull: { requests: { date: acceptUser.date } },
    }
  )
    .then((user) => {
      res.json({
        status: "dashboard",
        error:
          "Request Declined successfully, please re-login once before doing anything else",
      });
    })
    .catch((err) => {
      res.json({
        status: "accept",
        error: "Something went wrong! Please try again later",
      });
    });
});
module.exports = router;
