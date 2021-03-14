const express = require("express");
const router = express.Router();
const User = require("./../Users");
router.post("/", (req, res) => {
  let user = req.body;
  let currentId = user.email;
  let currentBalance = user.balance;
  let payId = user.payUser.email;
  let payBalance = user.payUser.balance;
  let amount = user.amount;
  let x = amount.split(".");
  if (!x[1]) {
    amount += ".00";
  }
  let reciept = {
    date: new Date().toLocaleString(),
    account: user.payUser.account,
    name: user.payUser.name,
    status: "Debit",
    amount: amount,
  };
  let payReciept = {
    date: new Date().toLocaleString(),
    account: user.account,
    name: user.name,
    status: "Credit",
    amount: amount,
  };
  console.log(reciept);
  console.log(payReciept);
  if (amount <= 0)
    res.json({ status: "pay", error: "Amount cannot be negative or 0" });
  else if (amount > currentBalance)
    res.json({ status: "pay", error: "Insufficient balance" });
  else {
    User.findOne({ email: currentId })
      .then((user) => {
        if (user) {
          User.findOne({ email: payId }).then((Puser) => {
            if (Puser) {
              currentBalance = currentBalance - amount;
              payBalance = payBalance + amount;
              res.json({
                balance: currentBalance,
                status: "dashboard",
                error:
                  "Payment Successfull! please re-login to before doing anything else",
              });
              User.findOneAndUpdate(
                { email: currentId },
                {
                  $inc: { balance: -parseInt(amount).toFixed(2) },
                  $push: { history: reciept },
                }
              ).then((user) => console.log(user));
              User.findOneAndUpdate(
                { email: payId },
                {
                  $inc: { balance: parseInt(amount).toFixed(2) },
                  $push: { history: payReciept },
                }
              ).then((user) => console.log(user));
            } else {
              res.json({
                status: "pay",
                error: "Something went wrong please logout once and then try",
              });
            }
          });
        } else {
          res.json({
            status: "pay",
            error: "Something went wrong please logout once and then try",
          });
        }
      })
      .catch((err) =>
        res.json({ status: "pay", error: "Cannot connect to database" })
      );
  }
});

module.exports = router;
