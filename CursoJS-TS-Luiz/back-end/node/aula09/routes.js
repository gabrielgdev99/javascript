const express = require("express");
const route = express.Router();
const homePag = require("./controllers/homeController");
const contato = require("./controllers/contatoController");

// Rotas da home
route.get("/", homePag.homePag);
route.post("/", homePag.trataPost);

// Rotas de contato
route.get("/contato", contato.homePag);

module.exports = route;
