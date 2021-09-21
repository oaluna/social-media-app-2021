const express = require("express");
const mongoose = require("mongoose");
const config = require("config");

const app = express();

app.use(express.json());

const db = process.env.DB || "mongodb://localhost:27017"

mongoose
  .connect(db)
  .then(() => console.log("💻 MongoDB Successfully Connected"))
  .catch(err => console.error(err));

app.get("/", (req, res) => {
  res.send("Server connected and working 🔥");
});


const port = process.env.PORT || 3000;

app.listen(port, () => `Server running on port ${port} 🔥`);