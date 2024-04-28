require("dotenv").config();
require("./config/database").connect();
const express = require("express");
const auth = require("./middleware/auth");
const UserRouter = require("./routes/user");
const cors = require("cors")

const app = express();

app.use(express.json());
app.use(cors())


// Login
app.use("/user", UserRouter);

app.post("/welcome", auth, (req, res) => {
  res.status(200).send("Welcome to X1 🙌");
});

module.exports = app;
