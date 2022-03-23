const mongoose = require("mongoose");

mongoose.Promise = global.Promise;

mongoose.connect("mongodb://localhost/login")
  .then(() => {
    console.log("mongodb conectado...");
  })
  .catch((err) => {
    console.log("Houve um erro " + err + " Finalizando o servidor");
  });

module.exports = mongoose;