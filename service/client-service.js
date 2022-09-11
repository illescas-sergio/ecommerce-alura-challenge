

const todosLosProductos = () => {
    return fetch('http://localhost:3000/producto');
};

const detalleProducto = (id) => {
    return fetch(`http://localhost:3000/producto?id=${id}`);
};

const productosSimilares = (sectionId) => {
    return fetch(`http://localhost:3000/producto?id=${sectionId}`);
};

const crearProducto = (name, imageUrl, price, id = uuid.v4(), sectionId, description) => {
    return fetch("http://localhost:3000/producto", {
        method: "POST",
        headers: {"content-type": "aplication/json"},
        body: JSON.stringify({name, imageUrl, price, id, sectionId, description})
    });
};

const modificarProducto = (name, imageUrl, price, sectionId, description) => {
    return fetch(`http://localhost:3000/producto?id=${id}`, {
        method: "PUT",
        headers: {"content-type": "aplication/json"},
        body: JSON.stringify({name, imageUrl, price, id: uuid.v4(), sectionId, description})
    });
};

const eliminarProducto = (id) => {
    return fetch(`http://localhost:3000/producto?id=${id}`, {
        method: "DELETE",
        headers: {"content-type": "aplication/json"},
        body: JSON.stringify({name, imageUrl, price, id: uuid.v4(), sectionId, description})
    });
};

export const clienteService = {
    todosLosProductos,
    detalleProducto,
    productosSimilares
};


