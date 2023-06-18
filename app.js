//basic lib import
const express = require("express");
const bodyParser = require("body-parser");
const router = require("./routes/api");
const app = express();

//security lib import
const rateLimit = require("express-rate-limit");
const cors = require("cors");
const helmet = require("helmet");
const mongoSanitize = require("express-mongo-sanitize");
const xss = require("xss-clean");
const hpp = require("hpp");

//database lib import
const mongoose = require("mongoose");

//security middleware implement
app.use(cors());
app.use(helmet());
app.use(mongoSanitize());
app.use(xss());
app.use(hpp());

//body parser implement
app.use(bodyParser.json());

//request rate limit
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
});
app.use(limiter);

//database connect
const uri = "mongodb://127.0.0.1:27017/Shop";
const options = { user: "", pass: "", autoIndex: true };
mongoose
  .connect(uri, options)
  .then(() => console.log("DB connected"))
  .catch((err) => console.log(err));

app.use("/api/v1", router);

//undefined route
app.use("*", (req, res) => {
  res.status(404).json({
    status: "fail",
    message: "Route not found",
  });
});

module.exports = app;
