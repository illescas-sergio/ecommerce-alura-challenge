import { clienteService } from "../service/client-service.js";

const formularioEditar = document.querySelector("[data-formEditar]");

const dataUrl = document.querySelector("[data-url]");
const categoriaProducto = document.querySelector("[data-categoria]");
const nombreProducto = document.querySelector("[data-nombre]");
const precioProducto = document.querySelector("[data-precio]");
const descripcionProducto = document.querySelector("[data-descripcion]");

const crearProducto = document.querySelector("[data-botonAgregar]");

function mostrarInput(e){
    console.log(e.target.value)
}

const inputs = document.querySelectorAll('input');

inputs.forEach(input => {
    input.addEventListener('change', (e) => mostrarInput(e));
});

descripcionProducto.addEventListener('change', () => {
    const texto = descripcionProducto.value;
    console.log(texto)
})


enviarEdicionProducto.addEventListener('click', (e)=>{
    e.preventDefault();
    enviarDatos(urlImagenProducto, categoriaProducto, nombreProducto, precioProducto, descripcionProducto)
    //acá tengo que validar los datos
    // if(todo ok){

    // } else {
    //     la pifiaste man
    // }

    clienteService.modificarProducto(nombreProducto, urlImagenProducto, precioProducto, categoriaProducto, descripcionProducto, idProducto).then(results => {
        console.log(results);
        alert("Producto modificado con éxito");
    })
})