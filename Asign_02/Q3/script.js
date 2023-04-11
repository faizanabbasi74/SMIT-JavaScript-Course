function addPara(text) {
  const newParagraph = document.createElement("p");

  newParagraph.textContent = text;

  const body = document.querySelector("body");

  body.appendChild(newParagraph);
}

addPara("Hello, Faizan Abbasi here");
