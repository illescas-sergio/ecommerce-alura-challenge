

const todosLosProductos = () => {
    return fetch('http://localhost:3000/producto');
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
    modificarProducto,
    agregarProducto
};

//saco los return porque en las funciones flecha el return está implicito:
    //y queda todo en una linea


    // const crearCliente = (nombre, email) => {
    //         return fetch("http://localhost:3000/perfil", {
    //             method: "POST",
    //             headers: {
    //                 "content-type": "application/json"
    //             },
    //             body: JSON.stringify({nombre, email, id: uuid.v4()})
    //         })
    // }
    
    // const eliminarCliente = (id) => {
        
    //         return fetch(`http://localhost:3000/perfil/${id}`, {
    //             method: "DELETE",
    //         });
    // }
    
    // const actualizarCliente = (nombre, email, id) => {
    
    //         return fetch(`http://localhost:3000/perfil/${id}`, {
    //             method: "PUT",
    //             headers: {
    //                 "content-type": "application/json"
    //             },
    //             body: JSON.stringify({nombre, email})
    //         })
    //         .then(respuesta => respuesta)
    //         .catch(err => console.log(err));
    // }
    
    
    
    // export const clientServices = {
    //     listaClientes,
    //     crearCliente,
    //     eliminarCliente,
    //     detalleCliente,
    //     actualizarCliente
    // };
    
