const mongoose = require("mongoose");
require("dotenv").config();

const db = process.env.MONGO_URI || "mongodb://localhost:27017/hackathon";

const connectDB = async () => {
  mongoose
    .connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Connected to MongoDB");
    })
    .catch((err) => {
      console.log(err);
    });
};
module.exports = connectDB;
