import { clienteService } from "../service/client-service.js";

const banner = document.querySelector("[data-banner]");

const starWars = document.querySelector("[data-starWars]");
const consolas = document.querySelector("[data-consolas]");
const diversos = document.querySelector("[data-diversos]");


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
        <a href="detalle-producto.html?id=${id}&sectionId=${sectionId}" class="card__details" id="${id}">Ver producto</a>
        
    `
    divCard.innerHTML = produtsCardsTemplate;

    return divCard
}



clienteService.todosLosProductos().then(resp => resp.json()).then(res => {
    return res.filter(el => el.sectionId === starWars.parentNode.id);
    }).then(arr => {
        arr.forEach(({imageUrl, name, price, id, sectionId}) => {
           const productos = categoriasCard(imageUrl, name, price, id, sectionId);
           starWars.appendChild(productos);
        })
    });

