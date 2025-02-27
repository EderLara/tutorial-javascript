'use strict';

let usuarios = [];

function registroUsuario(){
    let usuario = [];

    // Obtenemos los valores de los campos del formulario:
    console.log('Registrando usuario');

    let nombres = document.getElementById('nombre').value;
    let apellidos = document.getElementById('apellidos').value;
    let genero = document.getElementById('genero').value;
    let email = document.getElementById('correoemail').value;
    let email2 = document.getElementById('confirmacorreo').value;
    let fecha_nace = document.getElementById('fechanace').value;
    let departamento = document.getElementById('departamento').value;
    let municipio = document.getElementById('municipio').value;
    let telefono = document.getElementById('telefono').value;
    let password = document.getElementById('passusuario').value;
    let password2 = document.getElementById('confirmapass').value;
    let etnia = document.getElementById('etnia').value;
    let vulnerabilidades = document.getElementById('vulnerabilidades').value;
    let estrato = document.getElementById('estrato').value;

    let correo = "";
    let contrasena = "";

    // Validacion de correo:
    if (email !== email2){
        alert('Los correos no coinciden');
    }else {
        correo = email;
    }
    // Validacion de contraseña:
    if (password !== password2){
        alert('Las contraseñas no coinciden');
    }else {
        contrasena = password;
    }
    alert('Usuario registrado con éxito');
    // Creamos el usuario en el arreglo:
    usuario.push(nombres);
    usuario.push(apellidos);
    usuario.push(genero);
    usuario.push(correo);
    usuario.push(contrasena);
    usuario.push(fecha_nace);
    usuario.push(departamento);
    usuario.push(municipio);
    usuario.push(telefono);
    usuario.push(etnia);
    usuario.push(vulnerabilidades);
    usuario.push(estrato);

    alert(usuario);

}