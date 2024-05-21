
const footer = document.createElement("footer");
footer.style.backgroundColor = "#333"
footer.style.color = "white";
footer.style.padding = "20px";
footer.style.textAlign = "center";
footer.style.position = "fixed";
footer.style.bottom = "0";
footer.style.width = "100%"

const footerText = document.createElement("p");
footerText.textContent = "Todos los derechos reservados para Juan Jose Ali Figueroa";
footerText.style.margin = "0";

footer.appendChild(footerText);

document.body.appendChild(footer);