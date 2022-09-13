

const todosLosProductos = () => {
    return fetch('http://localhost:3000/producto');
};

const detalleProducto = (id) => {
    return fetch(`http://localhost:3000/producto?id=${id}`);
};

const agregarProducto = (name, imageUrl, price, id = uuid.v4(), sectionId, description) => {
    return fetch("http://localhost:3000/producto", {
        method: "POST",
        headers: {"content-type": "aplication/json"},
        body: JSON.stringify({name, imageUrl, price, id, sectionId, description})
    });
};

const modificarProducto = (name, imageUrl, price, sectionId, description, id) => {
    return fetch(`http://localhost:3000/producto?id=${id}`, {
        method: "PUT",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({name, imageUrl, price, sectionId, description, id})
    })
    .then(respuesta => console.log(respuesta))
    .catch(error => console.log(error));
};

const actualizarCliente = (nombre, email, id) => {
    return fetch(`http://localhost:3000/perfil/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ nombre, email }),
    })
      .then((respuesta) => respuesta)
      .catch((err) => console.log(err));
  };

const eliminarProducto = (id) => {
    return fetch(`http://localhost:3000/producto?id=${id}`, {
        method: "DELETE"
    });
};

export const clienteService = {
    todosLosProductos,
    detalleProducto,
    modificarProducto
};


