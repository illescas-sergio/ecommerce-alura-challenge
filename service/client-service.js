console.log("Hola Soy Client-Service");

const cargaIndex = () => {
    return fetch('http://localhost:3000/producto')
    .then(response => response.json())
    .then(data => {
        data.forEach(el => {
            console.log(el)
        })
    })
}

cargaIndex();


const productContainer = document.querySelector("#star-wars");

console.log(productContainer)