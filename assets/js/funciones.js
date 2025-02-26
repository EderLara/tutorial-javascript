const botonesDiv = document.getElementById('botones');
const resultadoDiv = document.getElementById('resultado');

resultadoDiv.innerHTML = "Empezamos Funciones hoy!";
botonesDiv.innerHTML = `
    <button class="btn btn-primary" onclick="saludar()">Saludar</button>
    <button class="btn btn-primary" onclick="letraRepeat()">Repetir Letra</button>
`;

function letraRepeat() {
    let letra = prompt("Ingrese una letra");
    let veces = parseInt(prompt("Ingrese la cantidad de veces que se repetirá la letra"));
    resultadoDiv.innerHTML = "";
    for (let i = 1; i <= veces; i++){
        resultadoDiv.innerHTML += letra;
    }
}

function saludar() {
    resultadoDiv.innerHTML = "Hola a todos!";
}