const express = require("express");
const path = require("path");

const app = express();

// Get main file
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/index.html"));
});

app.get("/style.css", (req, res) => {
  res.sendFile(path.join(__dirname + "/style.css"));
});

app.get("/script.js", (req, res) => {
  res.sendFile(path.join(__dirname + "/script.js"));
});

// Get the images
app.get("/images/gallery-img-1.jpg", (req, res) => {
  res.sendFile(path.join(__dirname + "/images/gallery-img-1.jpg"));
});
app.get("/images/gallery-img-2.jpg", (req, res) => {
  res.sendFile(path.join(__dirname + "/images/gallery-img-2.jpg"));
});
app.get("/images/gallery-img-3.jpg", (req, res) => {
  res.sendFile(path.join(__dirname + "/images/gallery-img-3.jpg"));
});
app.get("/images/gallery-img-4.jpg", (req, res) => {
  res.sendFile(path.join(__dirname + "/images/gallery-img-4.jpg"));
});
app.get("/images/gallery-img-5.jpg", (req, res) => {
  res.sendFile(path.join(__dirname + "/images/gallery-img-5.jpg"));
});
app.get("/images/gallery-img-6.jpg", (req, res) => {
  res.sendFile(path.join(__dirname + "/images/gallery-img-6.jpg"));
});

app.get("/images/card-img-1.png", (req, res) => {
  res.sendFile(path.join(__dirname + "/images/card-img-1.png"));
});
app.get("/images/card-img-2.png", (req, res) => {
  res.sendFile(path.join(__dirname + "/images/card-img-2.png"));
});
app.get("/images/card-img-3.png", (req, res) => {
  res.sendFile(path.join(__dirname + "/images/card-img-3.png"));
});

app.listen(3000);
