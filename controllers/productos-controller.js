import { clienteService } from "../service/client-service.js";

const containerProductos = document.querySelector("[data-items]");


const nuevaCard = (imageUrl, name, price, id, sectionId) => {
    const card = document.createElement('div');
    card.classList.add("productos__card")
    card.setAttribute("data", "data-card"); 
    
    const divsTemplate = `
        
        <div class="productos__card__img">
            <div class="iconos__menu">
                <a href="/screens/editar-producto.html?id=${id}"><button class="boton-modificar"><i class="fa-solid fa-pen"></i></button></a>
                <button class="boton-eliminar"><i class="fa-solid fa-trash-can"></i></button>
            </div>
            <img src="${imageUrl}" alt="${name}">
        </div>
        <div class="productos__card__title">${name}</div>
        <div class="productos__card__price">$${price}</div>
        <a href="detalle-producto.html?id=${id}&sectionId=${sectionId}" class="productos__card__details" id="${id}">Ver producto</a>
        
    `
    card.innerHTML = divsTemplate;

    const botonDelete = card.querySelector(".boton-eliminar");
    
    botonDelete.addEventListener('click', () => {
        alertify.confirm("¿Quiere eliminar este producto?",
            function(){
                alertify.success('Ok');
                clienteService.eliminarProducto(id).then(resp => console.log(resp));
                window.location.href = "productos.html";
            },
            function(){
                alertify.error('Cancel');
            });
        
    })

    return card
}

clienteService.todosLosProductos().then(resp => resp.json())
.then(data => {
    data.forEach(({imageUrl, name, price, id, sectionId}) => {
        const producto = nuevaCard(imageUrl, name, price, id, sectionId);
        containerProductos.appendChild(producto);
    });
})
