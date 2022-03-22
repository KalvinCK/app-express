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
routes.get("/login", (req, res) => {
  res.render("login");
});

routes.post("/add", (req, res) => {
  res.send("adicionado");
});

module.exports = routes;
