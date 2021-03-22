const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const bankRoutes = require("./Routes/User");
const env=require("dotenv");

env.config();
const app = express();
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

app.use("/api", bankRoutes);

app.get("/", (req, res) => {
  if (req) {
    console.log("GOT REQUEST");
  }
  res.send("Working");
});
console.log(process.env)
mongoose
  .connect(
    process.env.MONGODB,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }
  )
  .then(() => {
    console.log("CONNECTED TO DB");
    app.listen(process.env.PORT || 8000, () =>
      console.log("listening on Port 8000....")
    );
  });