
const inputBusqueda = document.querySelector("[data-searchInput]");
const botonBusqueda = document.querySelector("[data-searchButton]");



botonBusqueda.addEventListener("click", () => {
    if(!inputBusqueda.value){
       alert("Ingrese lo que desea buscar")
    } else {
        console.log(inputBusqueda.value);
        //window.location.href = "/screens/resultados.html"    
        inputBusqueda.value = "";
    }
});

const valorBusqueda = () => {
    return inputBusqueda.value;
};

export const valoresSearch = {

    valor: valorBusqueda

}