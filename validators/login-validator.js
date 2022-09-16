const formLogin = document.querySelector("[data-formLogin]");
const correo = document.querySelector("data-mailUsuario");
const clave = document.querySelector("data-pass");
const botonLogin = document.querySelector("[data-login]");

//validar contraseña
// al menos una mayuscula
// al menos una minuscula
// al menos un numero
// al menos 8 caracteres
// sin espacios

// puedes usar la expresión regular:

// var regex =/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])\w{8,}$/;
// la cual valida contraseñas de al menos una letra, al menos un numero, al menos una letra mayúscula, al menos 8 caracteres, no permite espacios.

// Este es un ejemplo usando la Regexp y validando campos para confirmar el valor de la contraseña:

// function checkPassword(valor){
//     var myregex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/; 
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
