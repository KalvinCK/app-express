const express = require("express");
const routes = express.Router();

routes.get("/", (req, res) => {
  res.render("main");
});

routes.get("/home", (req, res) => {
  res.render("home");
});
routes.get("/sobre", (req, res) => {
  res.render("sobre");
});

module.exports = routes;
