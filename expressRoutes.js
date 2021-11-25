const e = require("express");
const express = require("express");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/dogs", (req, res) => {
  console.log("DOGGIES");
  res.send("<h1>WOOFFFF</h1>");
});

const greetings = {
  en: "hello",
  fr: "bonjour",
  ic: "hallo",
  js: "konnichiwa",
};

app.get("/greet/:language", (req, res) => {
  const lang = req.params.language;
  const greeting = greetings[lang];
  if (!greeting) return res.send("invalid language");
  res.send(greeting.toUpperCase());
});

app.get("/search", (req, res) => {
  const { term, sort } = req.query;
  return res.send(`search page!, Term is: ${term}, Sort is: ${sort}`);
});

app.post("/register", (req, res) => {
  res.send(`Welcome, ${req.body.username}!!!`);
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
