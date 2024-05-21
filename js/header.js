
const header = document.createElement("header");
header.style.backgroundColor = "#333";
header.style.color = "white";
header.style.margin = "0";
header.style.padding = "40px 20px";
header.style.display = "flex";
header.style.justifyContent = "space-between";
header.style.alignItems = "center";

const h1 = document.createElement('h1');
h1.textContent = 'MarketAli'; // Contenido del título
h1.style.margin = "0";

const nav = document.createElement("nav");
const ul = document.createElement("ul");
ul.style.listStyleType = "none";
ul.style.margin = "0";
ul.style.padding = "0";
ul.style.display = "flex";
ul.style.justifyContent = "center";

const navItmes = [
    {href: "../index.html", text: "Inicio"},
    {href: "../tienda.html", text: "Tienda"},
    {href: "../nosotros.html", text:"Acerca de Nosotros"},
    {href: "../contactos.html", text: "Contacto"}
]

navItmes.forEach(function(item){
    const li = document.createElement("li");
    li.style.margin = "0px 10px"

    const a = document.createElement("a");
    a.href = item.href;
    a.textContent = item.text;
    a.style.color = "white";
    a.style.textDecoration = "none";
    a.style.fontSize = "18px";

    li.appendChild(a);
    ul.appendChild(li);
})
header.appendChild(h1);
nav.appendChild(ul);
header.appendChild(nav);  

document.body.prepend(header);