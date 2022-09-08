

const todosLosProductos = () => {
    return fetch('http://localhost:3000/producto');
}

const detalleProducto = (id) => {
    return fetch(`http://localhost:3000/producto?id=${id}`);
}

const productosSimilares = (sectionId) => {
    return fetch(`http://localhost:3000/producto?id=${sectionId}`);
}


export const clienteService = {
    todosLosProductos,
    detalleProducto,
    productosSimilares
}


