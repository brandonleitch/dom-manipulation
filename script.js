const content = document.querySelector(".content")

const p_red = document.createElement("p");
p_red.style.color = "red";
p_red.textContent = "Hey I'm red!"

content.appendChild(p_red);

const h3_blue = document.createElement("h3");
h3_blue.style.color = "blue";
h3_blue.textContent = "I'm a blue h3!";

content.appendChild(h3_blue);

const div = document.createElement("div");
div.style.border = "3px solid black";
div.style.backgroundColor = "pink";

const h1 = document.createElement("h1");
h1.textContent = "I'm in a div";
const p = document.createElement("p");
p.textContent = "ME TOO!"

div.appendChild(h1);
div.appendChild(p);

content.appendChild(div);
