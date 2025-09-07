exports.homePag = (req, res) => {
  res.send(`
    <form action="/" method="POST">
    Nome: <input type="text" name="nome"><br>
    Outro Campo: <input type="text" name="aquioutrocampo">
    <button>Enviar</button>
    `);
};

exports.trataPost = (req, res) => {
  res.send("Ei, sou sua nova rota de POST");
};
