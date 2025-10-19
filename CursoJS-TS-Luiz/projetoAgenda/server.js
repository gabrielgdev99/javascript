require("dotenv").config(); //REFERENTE AS VARIAVEIS DE AMBIENTES DO PROJETO, ARQUIVO .env QUE DEVEMOS dar gitignore

const express = require("express"); //INICIA O APP EXPRESS
const app = express(); //INICIA O APP EXPRESS

const mongoose = require("mongoose"); //INICIA O MONGOOSE E O QUE ELE FAZ É MODELAR A NOSSA BASE DE DADOS DA FORMA QUE CONFIGURARMOS
mongoose
  .connect(process.env.CONNECTIONSTRING)
  .then(() => {
    app.emit("pronto");
  })
  .catch((e) => console.log(e));
//ELE NOS RETORNA UMA PROMISE, QUE RETONA QUANDO A NOSSA BASE DADOS ESTIVER CARREGADA E PRONTA PARA COMEÇAR

const session = require("express-session"); //SALVA UM COOKIE NO NAVEGADOR DO USUARIO E TODA VEZ QUE O USUARIO ACESSAR VAI RESTAURAR AS INFOS
const MongoStore = require("connect-mongo"); //É PRA FALAR QUE AS SESSOES VÃO SER SALVAS NA BASE DE DADOS
const flashMsgs = require("connect-flash"); //MENSAGENS QUE ASSIM QUE LIDAS SUMAM, IDEAL PARA MSGS DE ERROS OU ALGUM FEEDBACK RAPIDO P/ USUARIO
const routes = require("./routes"); //ROTAS DA NOSSA APLICAÇÃO - /HOME /CONTATO
const path = require("path"); //PARA TRABALHAR COM CAMINHOS
const helmet = require("helmet"); //USADO PARA DEIXAR A NOSSA APLICAÇÃO MAIS SEGURA
const csrf = require("csurf"); //GERA UM TOKEN PARA UM FORMULARIO TODA VEZ QUE RECARREGA A PAGINA, GARANTINDO SEGURANÇA
const {
  middlewareGlobal,
  checkCsrfError,
  csrfMiddleware,
} = require("./src/middlewares/middleware"); //MIDDLEWARES QUE SÃO EXECUTADAS NAS ROTAS

app.use(
  helmet({
    contentSecurityPolicy: {
      useDefaults: true,
      directives: {
        defaultSrc: ["'self'"],

        // JS
        scriptSrc: [
          "'self'",
          "https://cdn.jsdelivr.net",
          "https://code.jquery.com",
        ],
        scriptSrcElem: [
          "'self'",
          "https://cdn.jsdelivr.net",
          "https://code.jquery.com",
        ],

        // CSS
        styleSrc: [
          "'self'",
          "https://cdn.jsdelivr.net",
          "https://fonts.googleapis.com",
          "'unsafe-inline'",
        ],
        styleSrcElem: [
          "'self'",
          "https://cdn.jsdelivr.net",
          "https://fonts.googleapis.com",
          "'unsafe-inline'",
        ],

        // ✅ permitir conexões (preconnect/fetch) aos CDNs
        connectSrc: [
          "'self'",
          "https://cdn.jsdelivr.net",
          "https://code.jquery.com",
        ],

        imgSrc: ["'self'", "data:"],
        fontSrc: ["'self'", "https://fonts.gstatic.com", "data:"],
        objectSrc: ["'none'"],
        baseUri: ["'self'"],
        frameAncestors: ["'self'"],
        upgradeInsecureRequests: [], // opcional
      },
    },
  })
);
app.use(express.urlencoded({ extended: true })); //HABILITA QUE PODEMOS POSTAR FORMULARIOS PARA DENTRO DA NOSSA APLICAÇÃO
app.use(express.json());
app.use(express.static(path.resolve(__dirname, "public"))); //TODOS ARQUIVOS QUE SÃO ESTATICOS QUE PODEM SER USADOS NA NOSSA APLICAÇÃO

const sessionOptions = session({
  secret: "ahfpoadgfadmbfadjggoadsjbadfgç3131(asdsa*",
  store: MongoStore.create({ mongoUrl: process.env.CONNECTIONSTRING }),
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 7,
    httpOnly: true,
  },
}); //CONFIGURAÇÕES DE SESSIONS OPTS

app.use(sessionOptions); //INICIA SESSIONSOPTS
app.use(flashMsgs()); //INICIA FLASHMSG

app.set("views", path.resolve(__dirname, "src", "views")); //ARQUIVOS QUE RENDERIZAMOS NA TELA (CAMINHO)
app.set("view engine", "ejs"); //É A ENGINE QUE ESTAMOS USANDO PARA RENDERIZAR O EJS

app.use(csrf()); //INICIA CSRF
// Nossos proprios middlewares -> INICIA OS MIDDLEWARES
app.use(middlewareGlobal);
app.use(checkCsrfError);
app.use(csrfMiddleware);
app.use(routes);

//INICIA O APP
app.on("pronto", () => {
  app.listen(3000, () => {
    console.log("Acessar http://localhost:3000");
    console.log("Servidor executando na porta 3000");
  });
});
