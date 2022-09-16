const formulario = document.querySelector("[data-form]")
const inputNombre = document.querySelector("[data-form = form-nombre]");
const inputMensaje = document.querySelector("[data-form = form-mensaje]");
const botonEnvio = document.querySelector("[data-form = enviar]");


formulario.addEventListener('input', () => {
  inputNombre.setCustomValidity("");
  inputMensaje.setCustomValidity("");
  inputNombre.checkValidity();
  inputMensaje.checkValidity();
});

inputNombre.addEventListener('invalid', () => {
  if(inputNombre.value === ""){
    inputNombre.setCustomValidity("Por favor ingrese su nombre");
  }
  
});

inputMensaje.addEventListener('invalid', () => {
  const mensaje = inputMensaje.value;
  if(mensaje && mensaje.length < 3) inputMensaje.setCustomValidity("El mensaje debe tener al menos tres caracteres");
  else if(mensaje === ""){
    inputMensaje.setCustomValidity("Ingrese un mensaje");
  } 
  
});

botonEnvio.addEventListener('click', (e) => {
  e.preventDefault();
  inputNombre.checkValidity();
  inputMensaje.checkValidity();
  
  if(inputNombre.validity.valid && inputMensaje.validity.valid){
    alert("El mensaje se ha enviado correctamente")
    formulario.submit();
    
  } else {
    inputNombre.reportValidity();
    inputMensaje.reportValidity();
  }
});
