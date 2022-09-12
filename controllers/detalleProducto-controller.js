import { clienteService } from "../service/client-service.js";

const sectionDetalle = document.querySelector("[data-detalle]");
const divSimilares = document.querySelector("[data-similares]");

const urlSearchParams = new URLSearchParams(window.location.search);
const id = urlSearchParams.get("id");

const detalle = (imageUrl, name, price, id, sectionId, description) => {

    const divDetalle = document.createElement('div');
    divDetalle.classList.add("detalle__producto__principal--div");

    const plantillaDetalle = `

        <div class="detalle__producto__principal--img">
        <img src=${imageUrl} alt="${name}">
        </div>
        <div class="detalle__producto__principal--descripcion">
            <div class="detalle__menu-extra">
                <a href="/screens/editar-producto.html?id=${id}"><button class="boton-modificar">Editar</button></a>
                <button class="boton-eliminar"><i class="fa-regular fa-trash-can"></i></button>
            </div>
            <div class="detalle__producto__titulo">${name}</div>
            <div class="detalle__producto__precio">${price}</div>
            <div class="detalle__producto__descripcion">${description}</div>
        </div>
    
    `
    divDetalle.innerHTML = plantillaDetalle;

    return divDetalle
}

const listaProductosSimilares = (imageUrl, name, price, id) => {

    const divCardSimilares = document.createElement('div');
    divCardSimilares.classList.add('productos__similares--cards');
    

    const contenidoSimilares = `    
        
        <div class="productos__similares__card--img">
            <img src="${imageUrl}" alt="${name}">
        </div>
        <div class="productos__similares__card--title">${name}</div>
        <div class="productos__similares__card--price">${price}</div>
        <a href="detalle-producto.html?id=${id}" class="productos__similares__card--details" id="${id}">Ver producto</a>

    `
    divCardSimilares.innerHTML = contenidoSimilares;

    return divCardSimilares;

}

clienteService.detalleProducto(id).then(response => response.json())
    .then(data => {
        data.forEach(({imageUrl, name, price, id, sectionId, description})=> {
            const sectionIdDeProducto = sectionId;
            const detalleProducto = detalle(imageUrl, name, price, id, sectionId, description);
            sectionDetalle.append(detalleProducto);


            clienteService.todosLosProductos().then(resp => resp.json()).then(res => {
                return res.filter(el => el.sectionId === sectionIdDeProducto);
                }).then(arr => {
                    arr.forEach(({imageUrl, name, price, id, sectionId}) => {
                       const card = listaProductosSimilares(imageUrl, name, price, id, sectionId);
                       divSimilares.appendChild(card);
                    })
                });
        });
    });




    



