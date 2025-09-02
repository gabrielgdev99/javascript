//FETCH API

document.addEventListener("click", (e) => {
  const el = e.target;
  const tag = el.tagName.toLowerCase();

  if (tag === "a") {
    e.preventDefault();
    carregapag(el);
  }
});

async function carregapag(el) {
  try {
    const href = el.getAttribute("href");
    const response = await fetch(href);

    if (response.status !== 200) throw new Error("ERRO 404!");

    const html = await response.text();
    carregaResult(html);
  } catch (e) {
    console.log("ERROR 404");
  }
}

function carregaResult(response) {
  const resultado = document.querySelector(".resultado");
  resultado.innerHTML = response;
}
