const formulario = document.querySelector("[data-form]")
const inputNombre = document.querySelector("[data-form-nombre]");
const inputMensaje = document.querySelector("data-form-mensaje");
const botonEnvio = document.querySelector("[data-form-enviar]");


// formulario.addEventListener('submit', (e) => {
//     console.log("enviando formulario");
//     e.preventDefault();
//     window.location.href = ""
// })


formulario.addEventListener('submit', validarFormulario)
  
  
function validarFormulario(e) {
    e.preventDefault();
    
    if(inputNombre.validity) {
      alert('No has escrito nada en el usuario');
      return;
    }
    var clave = document.getElementById('clave').value;
    if (clave.length < 6) {
      alert('La clave no es válida');
      return;
    }
    //this.submit();
  }
