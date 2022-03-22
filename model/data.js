const mongoose = require("mongoose");

mongoose.Promise = global.Promise;

mongoose.connect("mongodb://localhost/login", {
  useMongoClient: true,
})
  .then(() => {
    console.log("mongodb conectado...");
  })
  .catch((err) => {
    console.log("Houve um erro " + err);
  });

module.exports = mongoose;