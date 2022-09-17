const formLogin = document.querySelector("[data-formLogin]");
const correo = document.querySelector("[data-mailUsuario]");
const clave = document.querySelector("[data-pass]");
const botonLogin = document.querySelector("[data-login]");

const mensajesCustom = {
    email: {valueMissing: "Debe ingresar su correo electrónico",
    patternMismatch: "El correo debe tener un formato valido"},
    password: {
        patternMismatch: "La contraseña debe contener al menos una mayuscula, al menos una minuscula, al menos un nuúmero, al menos 8 caracteres; sin espacios",
        valueMissing: "Debe ingresar su contraseña"}
};


 

botonLogin.addEventListener("click", (e) => {
    e.preventDefault();

    correo.addEventListener('change', () => {
   
        if(correo.validity.patternMismatch){
         correo.setCustomValidity(mensajesCustom.email.patternMismatch);
        }
        if(correo.validity.valueMissing){
         correo.setCustomValidity(mensajesCustom.email.valueMissing); 
        }
        correo.reportValidity();
     });
     
     clave.addEventListener('change', () => {
        
         if(clave.validity.patternMismatch){
             clave.setCustomValidity(mensajesCustom.password.patternMismatch);
         }
         if(clave.validity.valueMissing){
             clave.setCustomValidity(mensajesCustom.password.valueMissing); 
         }
         clave.reportValidity();
      });
   
    if(!correo.checkValidity() || !clave.checkValidity()){
        return
    }else {
        formLogin.submit()
        window.location.href = "index.html";
    }
});



// function checkPassword(valor){
//     const myregex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/; 

//    if(myregex.test(valor)){
//        alert(valor+" es valido :-) !");
//        return true;        
//    }else{
//       alert(valor+" NO es valido!");
//        return false;        
//    }   
//  }




// La expresión regular final para validar el email con JavaScript sería:

// /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3,4})+$/
// Para la implementación de validar el email con JavaScript vamos a crear un formulario, el cual llamará a la función validarEmail. Esta función será la que ejecute la expresión regular.

// function validarEmail(email){...}
// La expresión regular la ejecutaremos mediante el método test del objeto RegExp. El objeto RegExp, como su nombre bien indica, representa las expresiones regulares.

// function validarEmail(valor) {
//   if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3,4})+$/.test(valor)){
//    alert("La dirección de email " + valor + " es correcta.");
//   } else {
//    alert("La dirección de email es incorrecta.");
//   }
// }


//validar email

// function validateEmail(){
                
//     // Get our input reference.
//     var emailField = document.getElementById('user-email');
    
//     // Define our regular expression.
//     var validEmail =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

//     // Using test we can check if the text match the pattern
//     if( validEmail.test(emailField.value) ){
//         alert('Email is valid, continue with form submission');
//         return true;
//     }else{
//         alert('Email is invalid, skip form submission');
//         return false;
//     }
// }



// TRAIDO DE INDEX FORM
