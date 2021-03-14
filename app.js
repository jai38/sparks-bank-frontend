const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
mongoose
  .connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "frontend/build")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend/build"));
});
app.use("/signup", require("./routes/signup"));
app.use("/login", require("./routes/login"));
app.use("/dashboard", require("./routes/dashboard"));
app.use("/pay", require("./routes/pay"));
app.use("/request", require("./routes/request"));
app.use("/payFromRequest", require("./routes/payFromRequest"));
app.use("/declineFromRequest", require("./routes/declineFromRequest"));
// if (process.env.NODE_ENV == "production") {
//   app.use(express.static("frontend/build"));
// }
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`On Port ${PORT}`));
