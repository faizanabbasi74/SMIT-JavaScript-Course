function addListItem(text) {
  
  let ul = document.getElementById("myList");

  let li = document.createElement("li");

  li.textContent = text;

  ul.appendChild(li);
}


addListItem("Macronis");