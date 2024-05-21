var productos = [
    {
        id:1,
        nombre:"Camisa de algodon",
        precio: 9000,
        categoria: "Ropa",
        imagen: "../img/camisa.jpg", 
        descripcion: "Una camisa de algodon comoda y elegante."
    },
    {
        id:2,   
        nombre: "Zapatos de cuero",
        precio: 40000,
        categoria: "Calzados",
        imagen: "../img/zapatos.jpg",
        descripcion: "Zapatos de cuero de alta calidad para hombres"
    },
    {
        id: 3,
        nombre: "Bolso de mano",
        precio: 25000,
        categoria: "Accesorios",
        imagen:  "../img/bolso_de_mano.jpg",
        descripcion: "Elegante y practico bolso unisex"
    }
]

var vectorProductos = "";

productos.forEach(producto => {
    vectorProductos += `
        <div class = "producto">
            <img src = ${producto.imagen} alt=${producto.nombre}>
            <h2>${producto.nombre}</h2>
            <p>${producto.descripcion}</p>
            <p>Precio: $${producto.precio}</p>
        </div>
    `;
});

document.addEventListener("DOMContentLoaded", () =>{
    const contenedorProductos = document.getElementById("productos");
    contenedorProductos.innerHTML = vectorProductos;
})