const formLogin = document.querySelector("[data-formLogin]");
const correo = document.querySelector("[data-mailUsuario]");
const clave = document.querySelector("[data-pass]");
const botonLogin = document.querySelector("[data-login]");

const mensajesCustom = {
    email: {valueMissing: "Debe ingresar su correo electrónico",
        patternMismatch: "El correo debe tener un formato válido",
        typeMismatch: "Debe ser un email válido"},
    password: {
        patternMismatch: "La contraseña debe contener al menos una mayúscula, al menos una minúscula, al menos un número, al menos 8 caracteres; sin espacios",
        valueMissing: "Debe ingresar su contraseña",
        typeMismatch: "Debe coincidir con el formato esperado"}
};


correo.addEventListener('input', () => {
    
    if(correo.validity.patternMismatch){
        correo.setCustomValidity(mensajesCustom.email.patternMismatch);
    } else if(correo.validity.typeMismatch){
        correo.setCustomValidity(mensajesCustom.password.typeMismatch); 
    } else if(correo.validity.valueMissing){
        correo.setCustomValidity(mensajesCustom.email.valueMissing); 
    } else {
        console.log("soy el else")
        correo.setCustomValidity("");    
    }
    correo.reportValidity();
    console.log(correo.validity)
 });

 clave.addEventListener('input', () => {
    
    if(clave.validity.patternMismatch){
        console.log("soy pattern misMatch")
        clave.setCustomValidity(mensajesCustom.password.patternMismatch);
    } else if(clave.validity.typeMismatch){
        console.log("soy type misMatch")
        clave.setCustomValidity(mensajesCustom.password.typeMismatch); 
    } else if(clave.validity.valueMissing){
        console.log("soy value missing")
        clave.setCustomValidity(mensajesCustom.password.valueMissing); 
    } else {
        console.log("soy el else")
        clave.setCustomValidity("");    
    }
    clave.reportValidity();
    console.log(clave.validity)
 });

botonLogin.addEventListener("click", (e) => {
    
    console.log("submiteando")
    e.preventDefault();

    correo.checkValidity();
    clave.checkValidity();

    if(correo.checkValidity() && clave.checkValidity()){
        correo.setCustomValidity("");
        clave.setCustomValidity(""); 
        formLogin.submit()
        window.location.href = "/screens/productos.html";
    } else {
        correo.checkValidity();
        clave.checkValidity();
        alert("Ingrese los datos requeridos")
    }
});