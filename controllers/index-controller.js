console.log("Hola Index")

const banner = document.querySelector("[data-banner]");


// Texto para banner
const textoBanner = () => {

    const productosEnPromocion = "Consolas"; // Cambio aquí la familia de productos
    const titular = "Febrero Promocional";
    const subtitulo = "Productos seleccionados con 33% de descuento"

    const divBanner = document.createElement('div');
    divBanner.classList.add("banner__text", "container");

    const templateTextoBanner = `

        <h1 class="banner__title">${titular}</h1>
        <p class="banner__subtitle">${subtitulo}</p>
        <a href="/screens/promocionados.html?sectionId=${productosEnPromocion.toLowerCase()}"><button class="banner__boton--ver">Ver ${productosEnPromocion}</button></a>    
    
    `
    divBanner.innerHTML = templateTextoBanner;

    return divBanner

}

banner.appendChild(textoBanner());