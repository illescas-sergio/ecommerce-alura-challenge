const URL_FAKEAPI = "https://fakeapi-jxva.onrender.com";

function todosLosProductos() {
    return fetch(URL_FAKEAPI + '/producto');
}

const detalleProducto = (id) => {
    return fetch(`${URL_FAKEAPI}/producto/?id=${id}`);
};

const agregarProducto = (name, imageUrl, price, sectionId, description) => {

    return fetch(URL_FAKEAPI + "/producto", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({name, imageUrl, price, id: uuid.v4(), sectionId, description})
    }).then(respuesta => console.log(respuesta))
    .catch(error => console.log(error));
};

const modificarProducto = (name, imageUrl, price, sectionId, description, id) => {
    return fetch(`${URL_FAKEAPI}/producto/${id}`, {
        method: "PUT",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({name, imageUrl, price, sectionId, description})
    })
    .then(respuesta => respuesta.json()).then(resp => console.log(resp))
    .catch(error => console.log(error));
};

const eliminarProducto = (id) => {
    return fetch(`${URL_FAKEAPI}/producto/${id}`, {
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
    
     
