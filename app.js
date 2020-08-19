const express = require("express");

const hostname = "127.0.0.1";
const port = 5000;

const app = express();

app.get("/", (req, res) => {
  res.send("Hello ExpressJS");
});

app.listen(port, () => {
  console.log("Server is running...");
});
