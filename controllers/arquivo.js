const axios = require("axios");

class Arquivo {
  constructor(req, res) {
    this.req = req;
    this.res = res;
  }

  exibir() {
    let arquivo = this.req.body.arquivo;

    axios
      .get("https://6b8e7676-8581-4b94-867e-7b0aa6be4019.mock.pstmn.io/professor/:matricula" + arquivo)
      .then((response) => {
        console.log(response.data);
        this.res.render("arquivo/exibirProf", {
          datetime: response.data.datetime,
          value: response.data.value,
        });
      })
      .catch((e) => {
        this.res.render("arquivo/erro");
      });
  }

  cadastrar() {
    let arquivo = this.req.body.arquivo;
    let texto = this.req.body.texto;

    axios
      .post("https://6b8e7676-8581-4b94-867e-7b0aa6be4019.mock.pstmn.io/professor/:matricula", {
        arquivo: arquivo,
        texto: texto,
      })
      .then((response) => {
        this.res.render("arquivo/sucesso");
      })
      .catch((e) => {
        this.res.render("arquivo/erro");
      });
  }
}
module.exports = Arquivo;
