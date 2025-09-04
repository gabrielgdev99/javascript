//FETCH API

// fetch("./pessoas.json") //PARA BUSCAR OS DADOS DO JSON
//   .then((response) => response.json())
//   .then((json) => loadElements(json));

//AXIOS

axios("pessoas.json").then((response) => loadElements(response.data));

function loadElements(json) {
  const table = document.createElement("table");
  for (let person of json) {
    const tr = document.createElement("tr");

    let td = document.createElement("td");
    td.innerHTML = person.nome;
    tr.appendChild(td);

    td = document.createElement("td");
    td.innerHTML = person.idade;
    tr.appendChild(td);

    // td = document.createElement("td");
    // td.innerHTML = person.salario;
    // tr.appendChild(td);

    table.appendChild(tr);
  }

  const result = document.querySelector(".resultado");
  result.appendChild(table);
}
