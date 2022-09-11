import { clienteService } from "../service/client-service.js";

const urlSearchParams = new URLSearchParams(window.location.search);
const searchValue = urlSearchParams.get("value");

const containerResultados = document.querySelector("[data-items]");

const nuevaCard = (imageUrl, name, price, id) => {
    const card = document.createElement('div');
    card.classList.add("productos__card")
    card.setAttribute("data", "data-card"); 
    
    const divsTemplate = `
        
        <div class="productos__card__img">
            <img src="${imageUrl}" alt="${name}">
        </div>
        <div class="productos__card__title">${name}</div>
        <div class="productos__card__price">${price}</div>
        <a href="detalle-producto.html?id=${id}" class="productos__card__details" id="${id}">Ver producto</a>
        
    `
    card.innerHTML = divsTemplate;

    return card
};

const ceroResultados = () => {

    const card = document.createElement('div');
    
    const template = `
        
    <h5 class="productos__title">No hay resultados</h5>
        
    `
    card.innerHTML = template;

    return card
}


clienteService.todosLosProductos().then(resp => resp.json()).then(res => {
    return res.filter(el => el.name.toLowerCase().includes(searchValue.toLowerCase()));
    }).then(arr => {
        if(arr.length === 0){
            const producto = ceroResultados();
            containerResultados.append(producto);
        } else {
            arr.forEach(({imageUrl, name, price, id}) => {
                const producto = nuevaCard(imageUrl, name, price, id);
                containerResultados.appendChild(producto);
             })
        }
        
    });