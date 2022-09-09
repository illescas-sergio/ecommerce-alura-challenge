import { clienteService } from "../service/client-service.js";

const containerProductos = document.querySelector("[data-items]");
const divTitulo = document.querySelector("[data-titulo]");

const urlSearchParams = new URLSearchParams(window.location.search);
const sectionId = urlSearchParams.get("sectionId");


const nuevoTitulo = () => {

    const divMenu = document.createElement('div');
    divMenu.classList.add("productos__menu");

    const capTitulo = (string) => {

        return string.charAt(0).toUpperCase() + string.slice(1);
    }    

    const nuevoTitulo = capTitulo(sectionId)

    const templateTitulo = `

    <h3 class="productos__title">${nuevoTitulo}</h3>
    <a href="agregar-productos.html">
        <button type="submit" class="productos__boton--agregar">Agregar producto</button>
    </a>
    
    `
    divMenu.innerHTML = templateTitulo;

    return divMenu;
}

divTitulo.appendChild(nuevoTitulo());

console.log(divTitulo)


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

// clienteService.todosLosProductos().then(resp => resp.json()).then(res => {
//     return res.filter(el => el.sectionId === sectionId);
//     }).then(arr => {
//         arr.forEach(({imageUrl, name, price, id, sectionId}) => {
//            const producto = nuevaCard(imageUrl, name, price, id, sectionId);
//            containerProductos.appendChild(producto);
//         })
//     });


