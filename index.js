const express = require("express");
var Home = require("./controllers/home");
var Arquivo = require("./controllers/arquivo");

const app = express();
const port = 3001;

app.set("view engine", "ejs");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  let homeController = new Home(req, res);
  homeController.index();
});

app.get("/exibirProf", (req, res) => {
  let homeController = new Home(req, res);
  homeController.exibir();
});

app.post("/exibirProf", (req, res) => {
  let arquivoController = new Arquivo(req, res);
  arquivoController.exibir();
});

app.get("/cadastrarProf", (req, res) => {
  let homeController = new Home(req, res);
  homeController.cadastrar();
});

app.post("/cadastrarProf", (req, res) => {
  let arquivoController = new Arquivo(req, res);
  arquivoController.cadastrar();
});

app.listen(port, () => {
  console.log("Iniciei na porta " + port);
});
