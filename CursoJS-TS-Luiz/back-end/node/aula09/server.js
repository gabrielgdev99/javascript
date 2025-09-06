const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true })); //É ASSIM QUE TRATA O POST PARA SER ENVIADO COMO UM OBJETO


app.get("/testes/:idUsuarios?/:parametro?", (req, res) => {
  console.log(req.params); //O QUE VEM NA ROTA DA URL - Ex: /profiles/3
  console.log(req.query); //VEM NA QUERY STRING COM PAR DE CHAVE E VALOR - Ex: /profiles/?chave1=valor1&chave2=valor2
  res.send(req.params);
});

app.post("/", (req, res) => {
  console.log(req.body); //CHAVES QUE VIEREM DE ACORDO COM O FORMULARIO ENVIADO (metodo post)
  res.send(`O que você me enviou foi: ${req.body.nome}`);
});

app.listen(3000, () => {
  console.log("Acessar http://localhost:3000");
  console.log("Servidor executando na porta 3000");
});
