'use strict';

function loginUsuario(){
    // capturamos los valores de los input
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    
    alert('Iniciando sesión');
    // redirecciona la url:
    window.location.href = 'index.html';    
}