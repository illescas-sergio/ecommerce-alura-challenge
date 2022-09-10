import { clienteService } from "../service/client-service.js";

const banner = document.querySelector("[data-banner]");

const starWars = document.querySelector("[data-tipo = star-wars]");
const consolas = document.querySelector("[data-tipo = consolas]");
const diversos = document.querySelector("[data-tipo = diversos]");

// Texto para banner
const textoBanner = () => {
    const productosEnPromocion = "Consolas"; // Cambio aquí la familia de productos
    const titular = "Febrero Promocional"; // Cambio aquí el titulo
    const subtitulo = "Productos seleccionados con 33% de descuento" // Cambio aquí el subtitulo

    const divBanner = document.createElement('div');
    divBanner.classList.add("banner__text", "container");

    const templateTextoBanner = `
        <h1 class="banner__title">${titular}</h1>
        <p class="banner__subtitle">${subtitulo}</p>
        <a href="/screens/promocionados.html?sectionId=${productosEnPromocion.toLowerCase()}"><button class="banner__boton--ver">Ver ${productosEnPromocion}</button></a>`
    divBanner.innerHTML = templateTextoBanner;
    return divBanner
}

banner.appendChild(textoBanner());



const categoriasCard = (imageUrl, name, price, id, sectionId) => {
    const divCard = document.createElement('div');
    divCard.classList.add("products__cards") 
    
    const produtsCardsTemplate = `
        
        <div class="card__img">
            <img src="${imageUrl}" alt="${name}">
        </div>
        <div class="card__title">${name}</div>
        <div class="card__price">${price}</div>
        <a href="/screens/detalle-producto.html?id=${id}" class="card__details" id="${id}">Ver producto</a>
        
    `
    divCard.innerHTML = produtsCardsTemplate;

    return divCard
}


clienteService.todosLosProductos().then(resp => {
    return resp.json();
})
.then(data => {

    return data.forEach((el) => {

        const productos = categoriasCard(el.imageUrl, el.name, el.price, el.id, el.sectionId);

        if(el.sectionId === "star-wars"){
            starWars.appendChild(productos);
        };
        if(el.sectionId === "consolas"){
            consolas.appendChild(productos);
        };
        if(el.sectionId === "diversos"){
            diversos.appendChild(productos);
        }
        
    });
})

