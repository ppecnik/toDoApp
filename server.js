const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config({ path: "./config.env" });
const PORT = process.env.PORT || 3000;

const app = express();

mongoose
  .connect(process.env.DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Database connected!"));

app.listen(PORT, () => {
  console.log(`Express is running on port ${PORT}`);
});
