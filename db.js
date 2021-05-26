const mongoose = require("mongoose");

var mongoURL =
  "mongodb+srv://Laxman:Laxman159@cluster0.nnntt.mongodb.net/mern-honey";

mongoose.connect(mongoURL, { useUnifiedTopology: true, useNewUrlParser: true });

var db = mongoose.connection;

db.on("connected", () => {
  console.log("Database connected succesfully ");
});

db.on("error", () => {
  console.log("MongoDb connection failed ");
});

module.exports = mongoose;
