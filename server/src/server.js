const express = require("express");
const app = express();
const cors = require("cors");
const connectDB = require("./config/Database");
const automacoesRouter = require("./routes/Automacoes");
const usuariosRouter = require("./routes/Usuarios");
const testeAutomacoesRouter = require("./routes/TestAutomacoes");

const corsOptions = {
  origin: "*",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  preflightContinue: false,
  optionsSuccessStatus: 204,
};
require("dotenv").config();

app.use(express.json());
// connectDB();

app.use(cors(corsOptions));
app.use("/automacoes", automacoesRouter);
app.use("/usuarios", usuariosRouter);
app.use("/teste/automacoes", testeAutomacoesRouter);
app.get("/", (req, res) => {
  res.send("Server do webhooker ativado");
});

app.listen(process.env.PORT, () => {
  console.log("Server is running");
});