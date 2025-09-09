const mongoose = require("mongoose");

const HomeSchema = new mongoose.Schema({
  titulo: String,
  titulo2: { type: String, required: true }, //required só salva no banco se tiver preenchido
  descricao: String,
});

const HomeModel = mongoose.model("Home", HomeSchema);

class Home {}

module.exports = Home;
