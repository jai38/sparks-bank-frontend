const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  account: {
    type: Number,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  balance: {
    type: Number,
    require: true,
  },
  history: {
    type: Array,
  },
  requests: {
    type: Array,
  },
});
const User = mongoose.model("User", UserSchema);
module.exports = User;
