const express = require("express");
const axios = require("axios");
const ejs = require("ejs");
const { forecastRoute } = require("./controllers/forecast");
const { router } = require("./routers");

const app = express();

app.set("view engine", "ejs");

app.use("/", router);

app.listen("6500", () => {
  console.log("Server is running");
});
