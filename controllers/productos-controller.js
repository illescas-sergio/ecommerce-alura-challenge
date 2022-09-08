import { clienteService } from "../service/client-service.js";

const containerProductos = document.querySelector("[data-items]");


const nuevaCard = (imageUrl, name, price, id, sectionId) => {
    const card = document.createElement('div');
    card.classList.add("productos__card")
    card.setAttribute("data", "data-card"); 
    
    const divsTemplate = `
        
        <div class="productos__card__img">
            <img src="${imageUrl}" alt="${name}">
        </div>
        <div class="productos__card__title">${name}</div>
        <div class="productos__card__price">${price}</div>
        <a href="detalle-producto.html?id=${id}&sectionId=${sectionId}" class="productos__card__details" id="${id}">Ver producto</a>
        
    `
    card.innerHTML = divsTemplate;

    return card
}

clienteService.todosLosProductos().then(resp => resp.json())
.then(data => {
    data.forEach(({imageUrl, name, price, id, sectionId}) => {
        const producto = nuevaCard(imageUrl, name, price, id, sectionId);
        containerProductos.appendChild(producto);
    });
})
