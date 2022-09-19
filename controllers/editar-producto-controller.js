import { clienteService } from "../service/client-service.js";

const urlSearch = new URLSearchParams(window.location.search);
const idProducto = urlSearch.get("id");

// const formularioEditar = document.querySelector("[data-formEditar]");

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

console.log(valores);

function guardarInput(e){
    valores[e.target.name] = e.target.value;
    console.log(valores);
}

function obtenerDataProducto(idProducto){
    clienteService.detalleProducto(idProducto).then((resp) => resp.json())
    .then(data => {
        console.log(data);
        data.forEach(item => {

        //los guardo en el objeto que voy a pasar a la funcion PUT
        //para que lo que no se edita se conserve.
        valores.url = item.imageUrl;
        valores.nombre = item.name;
        valores.categoria = item.sectionId;
        valores.precio = item.price;
        valores.descripcion = item.description;
        
        //muestro los valores que vienen de la db en el form
        // urlImagenProducto.value = item.imageUrl; //al input file no se le puede asignar el value
        categoriaProducto.value = item.sectionId;
        nombreProducto.value = item.name;
        precioProducto.value = item.price;
        descripcionProducto.value = item.description;
        });
        
    });
}

obtenerDataProducto(idProducto)

enviarEdicionProducto.addEventListener('click', (e) => {
    e.preventDefault();
    const {nombre, url, precio, categoria, descripcion, id} = valores;
    clienteService.modificarProducto(nombre, url, precio, categoria, descripcion, id)
    .then(resp => console.log(resp));
    window.location.href = "/screens/productos.html";
})