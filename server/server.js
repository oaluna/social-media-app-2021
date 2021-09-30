const express = require("express");
const mongoose = require("mongoose");
const config = require("./config/Config");

const app = express();

app.use(express.json());

const mongoUri =
  process.env.MONGO_URI || config.mongoUri ||
  "mongodb://dbLuna:QJkCJ11LKg9QklFj@cluster0-shard-00-01.gzj6j.azure.mongodb.net:27017/test?authSource=admin&replicaSet=Cluster0-shard-0&w=majority&readPreference=primary&appname=MongoDB%20Compass&retryWrites=true&directConnection=true&ssl=true";

mongoose
  .connect(mongoUri)
  .then(() => console.log("💻 MongoDB Connected"))
  .catch(err => console.error(err));

app.get("/", (req, res) => {
  res.send("Server working 🔥");
});


const port = process.env.PORT || 5000;

app.listen(port, () => `Server running on port port 🔥`);