require("dotenv").config();

const express = require("express");
const formidable = require("express-formidable");
const cors = require("cors");

const app = express();
app.use(cors());
// app.use(formidable());

// install mongoose later
// const mongoose = require("mongoose");

const charactersRoutes = require("./routes/characters");
app.use(charactersRoutes);

const comicsRoutes = require("./routes/comics");
app.use(comicsRoutes);

app.all("*", (req, res) => {
  res.status(404).json("Page not Found");
});

app.listen(process.env.PORT, () => {
  console.log("Server Started 🚀");
});
