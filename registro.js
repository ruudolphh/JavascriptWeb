document.getElementById('formRegistro').addEventListener('submit', function (event) {

    event.preventDefault(); // Evita que se recargue la pagina al enviar el formulario

    let username = document.getElementById('username').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let tlf = document.getElementById('tlf').value;

    if (username === '' || email === '' || password === '' || tlf === '') {
        mostrarMensaje('Por favor complete todos los campos.', 'error');
        return false;
    }
    
    let expressionRegular = /^[a-zA-Z0-9]+$/;
    // Expresion regular para que el usuario no pueda poner un usuario con caracteres especiales
    if (!username.match(expressionRegular)){
        alert("El nombre de usuario no cumple los requisitos");
        return false;
    }

    let expressionRegular1 = /^[^\s@]{2,25}@[^\s@]+\.[^\s@]+$/;
    // Expresion regular para validar el formato del email
    if (!email.match(expressionRegular1)){
        alert("El email no cumple los requisitos");
        return false;
    }

    let expressionRegular2 = /^[0-9]{9}$/;
    // Expresion regular para verificar que es un numero de 9 digitos
    if (!tlf.match(expressionRegular2)){
        alert("El nuemro de telefono no cumple los requisitos");
        return false;
    }

    let expressionRegular3 = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[.!@#$%^&*()_+])[a-zA-Z\d.!@#$%^&*()_+]{8,}$/ ;
    // Expresion regular para que la contraseña sea segura (Mayus, Minus, Caracteres especiales...)
    if (!password.match(expressionRegular3)){
        alert("La contraseña no cumple los requisitos de seguridad");
        return false;
    }
    
    // más validaciones

    Registrarse(username)
});

function Registrarse(username){
    if (window.confirm('¿Estás seguro de que quieres continuar?')) {
        mostrarMensaje('Registro exitoso para ' + username + '!', 'success');
      } 
}

// Funcion del registro
function mostrarMensaje(mensaje, tipo) {
    var mensajeDiv = document.getElementById('mensaje');
    mensajeDiv.innerHTML = mensaje;
    mensajeDiv.className = tipo;
}