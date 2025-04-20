const express = require("express");
const app = express();
const connectDB = require("./config/Database");
const automacoesRouter = require("./routes/Automacoes");
const usuariosRouter = require("./routes/Usuarios");
require("dotenv").config();

app.use(express.json());
connectDB();

app.use("/automacoes", automacoesRouter);
app.use("/usuarios", usuariosRouter);
app.get("/", (req, res) => {
  res.send("Server do webhooker ativado");
});

app.listen(process.env.PORT, () => {
  console.log("Server is running");
});