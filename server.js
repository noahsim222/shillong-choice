const express = require("express");
const Pizza = require("./models/pizzaModel");

const app = express();
const db = require("./db.js");
app.use(express.json());

const pizzasRoute = require("./routes/pizzasRoute");
const userRoute = require("./routes/userRoute");
const ordersRoute = require("./routes/ordersRoute");
const path = require("path");

app.use("/api/pizzas/", pizzasRoute);
app.use("/api/users/", userRoute);
app.use("/api/orders/", ordersRoute);

if (process.env.NODE_ENV === "production") {
  app.use("/", express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "/client/build/index.html"));
  });
}

// app.get("/", (req, res) => {
//   res.send("Server working");
// });
// app.get("/getpizzas", (req, res) => {
//   Pizza.find({}, (err, docs) => {
//     if (err) {
//       console.log(err);
//     } else {
//       res.send(docs);
//     }
//   });
// });

const port = process.env.PORT || 5000;

app.listen(port, () => `Server running on port `);
