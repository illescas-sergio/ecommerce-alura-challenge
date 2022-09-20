

const todosLosProductos = () => {
    return fetch('https://ecommerce-fakeapi-alura.herokuapp.com/producto');
};

const detalleProducto = (id) => {
    return fetch(`https://ecommerce-fakeapi-alura.herokuapp.com/producto/?id=${id}`);
};

const agregarProducto = (name, imageUrl, price, sectionId, description) => {
    return fetch("https://ecommerce-fakeapi-alura.herokuapp.com/producto", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({name, imageUrl, price, id: uuid.v4(), sectionId, description})
    });
};

const modificarProducto = (name, imageUrl, price, sectionId, description, id) => {
    return fetch(`https://ecommerce-fakeapi-alura.herokuapp.com/producto/${id}`, {
        method: "PUT",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({name, imageUrl, price, sectionId, description})
    })
    .then(respuesta => console.log(respuesta))
    .catch(error => console.log(error));
};

const eliminarProducto = (id) => {
    return fetch(`https://ecommerce-fakeapi-alura.herokuapp.com/producto/${id}`, {
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
    
    
