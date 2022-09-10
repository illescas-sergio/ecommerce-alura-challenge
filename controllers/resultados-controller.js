import { clienteService } from "../service/client-service.js";
import { valorBusqueda } from "./search-controller.js";


const containerResultados = document.querySelector("[data-items]");

const inputValue = valorBusqueda();

console.log(inputValue);


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
}

clienteService.todosLosProductos().then(resp => resp.json()).then(res => {
    console.log(res)
    return res.filter(el => el.name === inputValue);
    }).then(arr => {
        console.log(arr)
        arr.forEach(({imageUrl, name, price, id}) => {
           const producto = nuevaCard(imageUrl, name, price, id);
           containerResultados.appendChild(producto);
        })
    });




// clienteService.todosLosProductos().then(resp => resp.json()).then(res => {
//     console.log(res)
//     return res.filter(el => el.name.toLowerCase().includes(inputValue.toLowerCase()));
//     }).then(arr => {
//         console.log(arr)
//         arr.forEach(({imageUrl, name, price, id}) => {
//            const producto = nuevaCard(imageUrl, name, price, id);
//            containerResultados.appendChild(producto);
//         })
//     });