const path = require("path");
const pathFile = path.resolve(__dirname, "teste.json");
// const write = require("./modules/escrever");
const read = require("./modules/ler");

//WRITE
// const persons = [
//   { name: "Jorge" },
//   { name: "Maria" },
//   { name: "Luiz" },
//   { name: "Vagner" },
// ];

// const json = JSON.stringify(persons, "", 2);
// write(pathFile, json);

//READ
async function readFile(pathF) {
  const data = await read(pathF);
  renderData(data);
}

function renderData(data) {
  data = JSON.parse(data);
  data.forEach((val) => console.log(val));
}

readFile(pathFile);
