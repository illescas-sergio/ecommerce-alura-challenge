import { clienteService } from "../service/client-service.js";

// const formularioEditar = document.querySelector("[data-formAgregar]");

// const dataUrl = document.querySelector("[data-url]");
// const categoriaProducto = document.querySelector("[data-categoria]");
// const nombreProducto = document.querySelector("[data-nombre]");
// const precioProducto = document.querySelector("[data-precio]");
const descripcionProducto = document.querySelector("[data-descripcion]");

const crearProducto = document.querySelector("[data-botonAgregar]");

function mostrarInput(e){
    console.log(e.target.name + " - - - " + e.target.value);
}

function guardarValor(e){
        valores[e.target.name] = e.target.value;
}

const inputs = document.querySelectorAll('input');

inputs.forEach(input => {
    input.addEventListener('change', (e) => {
        mostrarInput(e);
        guardarValor(e);
    })
        
});

descripcionProducto.addEventListener('change', () => {
    const texto = descripcionProducto.value;
    console.log(texto)
    valores.descripcion = texto;
});

const valores = {
    nombre: "",
    url: "",
    precio: "",
    categoria: "",
    descripcion: ""
}



crearProducto.addEventListener('click', (e)=>{
   e.preventDefault();
   const name = valores.nombre;
   const imageUrl = valores.url;
   const price = valores.precio;
   const sectionId = valores.categoria;
   const description = valores.descripcion;
   console.log("voy a enviar esto");
   console.log(valores);
   clienteService.agregarProducto(name, imageUrl, price, sectionId, description)
   .then(resp => console.log(resp));
   window.location.href = "../index.html";
});