

const todosLosProductos = () => {
    return fetch('https://63292516d2c97d8c5261c902.mockapi.io/api/producto');
};

const detalleProducto = (id) => {
    return fetch(`http://localhost:3000/producto/?id=${id}`);
};

const agregarProducto = (name, imageUrl, price, sectionId, description) => {
    return fetch("http://localhost:3000/producto", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({name, imageUrl, price, id: uuid.v4(), sectionId, description})
    });
};

const modificarProducto = (name, imageUrl, price, sectionId, description, id) => {
    return fetch(`http://localhost:3000/producto/${id}`, {
        method: "PUT",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({name, imageUrl, price, sectionId, description})
    })
    .then(respuesta => console.log(respuesta))
    .catch(error => console.log(error));
};

const eliminarProducto = (id) => {
    return fetch(`http://localhost:3000/producto/${id}`, {
        method: "DELETE"
    });
};

export const clienteService = {
    todosLosProductos,
    detalleProducto,
    modificarProducto,
    agregarProducto,
    eliminarProducto
};
    
    
