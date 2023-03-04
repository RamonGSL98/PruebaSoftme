const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/home.html");
});

app.get("/producto", (req, res) => {
  res.sendFile(__dirname + "/public/producto.html");
});

app.get("/bootstrap.js", (req, res) => {
  res.sendFile(__dirname + "/node_modules/bootstrap/dist/js/bootstrap.js");
});

app.use(express.static("public"));
app.listen(process.env.PORT || 3000);
