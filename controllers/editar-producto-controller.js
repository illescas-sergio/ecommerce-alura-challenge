import { clienteService } from "../service/client-service.js";

const urlSearch = new URLSearchParams(window.location.search);
const idProducto = urlSearch.get("id");

const formularioEditar = document.querySelector("[data-formEditar]");

const urlImagenProducto = document.querySelector("[data-url]");
const categoriaProducto = document.querySelector("[data-sectionId]");
const nombreProducto = document.querySelector("[data-name]");
const precioProducto = document.querySelector("[data-price]");
const descripcionProducto = document.querySelector("[data-description]");

const enviarEdicionProducto = document.querySelector("[data-enviarEdicion]");

const inputs = document.querySelectorAll('input');

inputs.forEach(input => {
    input.addEventListener('change', (e) => guardarInput(e));
});

descripcionProducto.addEventListener('change', (e) => guardarInput(e));

const valores = {
    url: "",
    categoria: "",
    nombre: "",
    precio: "",
    descripcion: "",
    id: idProducto
};

function guardarInput(e){
    valores[e.target.name] = e.target.value;
}


function obtenerDataProducto(idProducto){
    clienteService.detalleProducto(idProducto).then((resp) => resp.json())
    .then(data => {
        console.log(data);
        data.forEach(item => {

        urlImagenProducto.value = item.imageUrl;
        categoriaProducto.value = item.sectionId;
        nombreProducto.value = item.name;
        precioProducto.value = item.price;
        descripcionProducto.value = item.description;
        });
        
    });
}

obtenerDataProducto(idProducto)

formularioEditar.addEventListener("submit", (e)=>{
    e.preventDefault();
    console.log(valores)
    clienteService.modificarProducto(valores.nombre, valores.url, valores.precio, valores.categoria, valores.descripcion, idProducto)
})