const express = require("express");
const usuariosRouter = express.Router();
const UsuariosController = require("../controllers/UsuariosController");

usuariosRouter.post("/", UsuariosController.criar);
usuariosRouter.get("/:id", UsuariosController.buscarPorId);
usuariosRouter.post("/login", UsuariosController.login);

module.exports = usuariosRouter;
