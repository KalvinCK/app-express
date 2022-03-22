var express = require("express");
var { engine } = require("express-handlebars");
const bodyParser = require("body-parser");
const path = require("path");

var app = express();
const porta = 3000;

const rotas = require("./controllers/routes");

// body parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Handlebars
app.engine("handlebars", engine({ defaultLayout: "index" }));
app.set("view engine", "handlebars");
// app.set("views", "./views");

// statics - Publics
app.use(express.static(path.join(__dirname + "/public")));

// Roteamento
app.use("/", rotas);

// Formularios
app.post("/add", (req, res) => {
  res.send("Nome enviado");
});

app.listen(porta, () => {
  console.log("server rodando");
});
