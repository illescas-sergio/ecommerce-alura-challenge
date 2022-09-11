const inputBusqueda = document.querySelector("[data-searchInput]");
const botonBusqueda = document.querySelector("[data-searchButton]");

let valorBusqueda;

inputBusqueda.addEventListener('keyup', (e) => {
    console.log(e.target.value)
    valorBusqueda = e.target.value;
})


botonBusqueda.addEventListener("click", () => {
    if(!inputBusqueda.value){
       alert("Ingrese lo que desea buscar")
    } else {
        window.location.href = `/screens/resultados.html?value=${valorBusqueda}`;
        inputBusqueda.value ="";    
    }
});

