import { clienteService } from "../service/client-service.js";

const formularioAgregar = document.querySelector("[data-formAgregar]");

const dataUrl = document.querySelector("[data-url]");
const categoriaProducto = document.querySelector("[data-categoria]");
const nombreProducto = document.querySelector("[data-nombre]");
const precioProducto = document.querySelector("[data-precio]");

const descripcionProducto = document.querySelector("[data-descripcion]");

const crearProducto = document.querySelector("[data-botonAgregar]");



const mensajesCustom = {
    url: {
        typeMismatch: "Por favor, seleccione una imagen.",
        valueMissing: "Seleccione la imagen del producto."
    }
}

dataUrl.addEventListener('change', () => {
    if(validarExtension()){
        dataUrl.setCustomValidity("");
    } else {
        dataUrl.setCustomValidity(mensajesCustom.url.typeMismatch);
    }
    dataUrl.reportValidity();
});

function validarExtension(){
    const ruta = dataUrl.value;
    const extensions = new RegExp("(.jpg|.jpeg|.png|.gif)$", "i")
    if(!extensions.test(ruta)){
        alert('Please upload file having extensions .jpeg/.jpg/.png/.gif only.');
        return false;
    } 
    return true
};


//Guardar valores
function guardarValor(e){
        valores[e.target.name] = e.target.value;
}

const inputs = document.querySelectorAll('input');

inputs.forEach(input => {
    input.addEventListener('change', (e) => {
        guardarValor(e);
    })  
});

descripcionProducto.addEventListener('change', () => {
    const texto = descripcionProducto.value;
    valores.descripcion = texto;
});

const valores = {
    nombre: "",
    url: "",
    precio: "",
    categoria: "",
    descripcion: ""
};

//Envio de formulario
crearProducto.addEventListener('click', (e)=>{
    e.preventDefault();

   const {nombre, url, precio, categoria, descripcion} = valores;
  

   if(nombre === "" || url === "" || precio === "" || categoria === "" || descripcion === ""){
        crearProducto.setCustomValidity("No puede dejar campos vacios");
   } else {
        crearProducto.setCustomValidity("");
        clienteService.agregarProducto(nombre, url, precio, categoria, descripcion)
        .then(resp => console.log(resp));
        window.location.href = "productos.html";
   }

   crearProducto.reportValidity();
   
});