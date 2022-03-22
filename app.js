var express = require("express");
var handlebars = require("express-handlebars");
const rotas = require("./controllers/routes");
const bodyParser = require("body-parser");
const path = require("path");
const mongoose = require("./model/data")

const porta = 3000;

const app = express();

// body parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Handlebars
app.engine("handlebars", handlebars({ defaultLayout: "index" }));
app.set("view engine", "handlebars");

// statics - Publics
app.use(express.static(path.join(__dirname + "/public")));

// Roteamento
app.use("/", rotas);

mongoose;

app.listen(porta, () => {
  console.log("server rodando");
});
