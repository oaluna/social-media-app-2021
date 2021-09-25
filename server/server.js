const express = require("express");
const mongoose = require("mongoose"); // new

const mongoUri = process.env.DB;
const port = process.env.PORT || 5000

// Connect to MongoDB database
mongoose
  .connect(mongoUri, { useUnifiedTopology: false, useNewUrlParser: true })
    .then(() => {
      console.log("MongoDB connection established")
}).catch((err) => console.log(err, "Failed to connect"))

const app = express(app);

app.listen(5000, () => {
  console.log("Server has started! Listening from port " + port);
});