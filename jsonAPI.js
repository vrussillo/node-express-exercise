const express = require("express");
const ExpressError = require("./expressError");

const app = express();

app.use(express.json());

const CANDIES = [
  { name: "snickers", qty: 43, price: 1.5 },
  { name: "skittles", qty: 26, price: 0.99 },
];

app.get("/candies", (req, res) => {
  res.json(CANDIES);
});

app.post("/candies", (req, res) => {
  CANDIES.push(req.body);
  res.status(201).json(CANDIES);
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
