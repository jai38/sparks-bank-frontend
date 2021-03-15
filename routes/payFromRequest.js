const express = require("express");
const User = require("./../Users");
const router = express.Router();
router.post("/", (req, res) => {
  let state = req.body;
  let acceptUser = state.acceptData;
  let balance = state.balance;
  let account = state.account;
  let amount = acceptUser.amount;
  let name = state.name;
  let currentBalance = balance - amount;
  let x = amount.split(".");
  if (!x[1]) {
    amount += ".00";
  }
  let reciept = {
    date: new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }),
    account: acceptUser.account,
    name: acceptUser.name,
    status: "Debit",
    amount: amount,
  };
  let payReciept = {
    date: new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }),
    account: account,
    name: name,
    status: "Credit",
    amount: amount,
  };
  if (balance < amount) {
    res.json({ status: "accept", error: "insufficient balance" });
  } else {
    User.findOneAndUpdate(
      { account },
      {
        $inc: { balance: -parseInt(amount) },
        $pull: { requests: { date: acceptUser.date } },
        $push: { history: reciept },
      }
    )
      .then((user) => {
        User.findOneAndUpdate(
          { account: acceptUser.account },
          {
            $inc: { balance: parseInt(amount) },
            $push: { history: payReciept },
          }
        ).then((user) => {
          res.json({
            balance: currentBalance,
            status: "dashboard",
            error:
              "Payment Successfull! please re-login before doing anything else",
          });
        });
      })
      .catch((err) => {
        console.log(err);
        res.json({
          status: "accept",
          error: "Something went wrong! Please try again later",
        });
      });
  }
});
module.exports = router;
