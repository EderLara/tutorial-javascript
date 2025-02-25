
// Comentario( // ), Variables: let, var
let nombre = "Eder Lara T";
let Nombre = 'Roger, ';
let nomBre = `Julieth`;
// Cómo debemos escribir variables:
// Forma pascal Case: Nombre
// Forma camell Case: nombreCompleto, nombre
// Forma snake Case : nombre_completo

// Forma de escribir:
// Variables = snake_case
// Funciones = cammelCase
// Clases = PascalCase

// Constantes:
const DATABASE = 'MySQL';


//console.log(nombre, Nombre, nomBre, DATABASE);

// Tipos de Datos:
// Tipos de datos primitivos (números, cadenas, booleanos, null, undefined)

let numero = 123
let enteros = 123         // int = 32,63 y piquito
let flotantes = 234.23    // float = 
let texto = `Esto es un texto @!"#$$%&//(976487.23123"`
let booleano = true || false
let dato_null = null;
let dato_indefinido;

dato_indefinido = `Hola Porque estas sola, sola te veo pasar...`
console.log(enteros, flotantes, texto, dato_indefinido )
dato_indefinido = 123.32

console.log(enteros, flotantes, texto, dato_indefinido )

// Operadores:
// Operadores aritméticos (+, -, *, /, **, //, %)

let sumando = 1
let otro_sumando = 6
let suma = sumando + otro_sumando;
console.log(suma);
let variable_texto = 'hola' + 'Por qué estás sola?' 
console.log(variable_texto);

// Estructuras de control
let numero_1 = 15
let numero_2 = 86

if (numero_1 >= numero_2){
    console.log(numero_1 + ' es mayor que '+ numero_2);
    console.log(numero_1 + numero_2);
  }
  else{
    console.log(numero_2 + ' es mayor que '+ numero_1);
    console.log(numero_2 - numero_1);
    if (numero_2 % numero_1 != 0){
      console.log('No existe un número que multiplicado por '+numero_1+ ' Me dé exactamente '+ numero_2)
    }
  }

  //

  switch (numero_1){
    case 30:
      console.log(numero_1 + ' es par');
      break;
    case 31:
      console.log('mensaje de ' + numero_2);
      break;
    default: 
      console.log(numero_2 + ' no es el número que esperabamos');
      break;
    }

    
if (numero_2 % 2 === 0){
    console.log(numero_2 + ' es par')
    
    switch (numero_2){
    case 30:
      console.log(numero_2 + ' es par');
      break;
    case 31:
      console.log('mensaje de ' + numero_2);
      break;
    default: 
      console.log(numero_2 + ' no es el número que esperabamos');
      break;
    }
  }else if(numero_2 / 7 === 12){
    console.log(numero_2 + ' es divisible por 7');
  }

  
  // Ciclos

  
for (let i=10; i <= numero_1; i++){
    console.log(i);
  }
  
  // 
  let i = 0;
  while (i <= numero_1){
    // todo programa
    console.log(i);
    i = i + 1;
  }
  // 
  let j = 0
  do {
    console.log(j);
    j = j + 1;
  }while (j <= numero_1)
  

// Seleccionar por ID
let elementoPorId = document.getElementById("miElemento");

// Seleccionar por clase
let elementosPorClase = document.getElementsByClassName("miClase");

// Seleccionar por etiqueta
let elementosPorEtiqueta = document.getElementsByTagName("div");

// Seleccionar usando un selector CSS
let elementoPorSelector = document.querySelector(".miClase");
let elementosPorSelectorTodos = document.querySelectorAll(".miClase");


/**
 * Temas vistos en clase del 25 de febrero de 2025
 */

// Métodos de arreglos:

// 1. Agregar elementos al final de un arreglo
let frutas = ['manzana', 'banana'];
frutas.push('naranja');
console.log(frutas); // ['manzana', 'banana', 'naranja']

// 2. Eliminar el último elemento de un arreglo
let ultimaFruta = frutas.pop();
console.log(frutas); // ['manzana', 'banana']
console.log(ultimaFruta); 

// 3. Agregar elementos al inicio de un arreglo
frutas.unshift('fresa');
console.log(frutas); // ['fresa', 'manzana', 'banana']

// 4. Eliminar el primer elemento de un arreglo
let primeraFruta = frutas.shift();
console.log(frutas); // ['manzana', 'banana']
console.log(primeraFruta);

// 5. Encontrar la posición de un elemento en un arreglo
let posicionBanana = frutas.indexOf('banana');
console.log(posicionBanana); // 1

// 6. Eliminar un elemento de un arreglo a partir de su posición
frutas.splice(posicionBanana, 1);
console.log(frutas); // ['manzana']

// 7. Copiar un arreglo
let copiaFrutas = frutas.slice();
console.log(copiaFrutas); // ['manzana']

// 8. Recorrer un arreglo
for (let fruta of frutas) {
    console.log(fruta);
}

// 9. Filtrar elementos de un arreglo
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let pares = numeros.filter(numero => numero % 2 === 0);
console.log(pares); // [2, 4, 6, 8, 10]

// 10. Mapear elementos de un arreglo
let cuadrados = numeros.map(numero => numero ** 2);
console.log(cuadrados); // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]


// Manejo del DOM:

const botonesDiv = document.getElementById('botones');
const resultadoDiv = document.getElementById('resultado');
resultadoDiv.innerHTML = 'Hola Mundo!!';
// 1.1. Par o impar
function parImpar() {
    const numero = parseInt(prompt("Introduce un número entero:"));
    resultadoDiv.innerHTML = numero % 2 === 0 ? `${numero} es par` : `${numero} es impar`;
}

// 1.2. Positivo o negativo
function positivoNegativo() {
    const numero = parseInt(prompt("Introduce un número entero:"));
    resultadoDiv.innerHTML = numero >= 0 ? `${numero} es positivo` : `${numero} es negativo`;
}

// 1.3. Suma, resta y producto (si es positivo)
function operaciones() {
    const num1 = parseInt(prompt("Introduce un número:"));
    if (num1 > 0) {
        const num2 = parseInt(prompt("Introduce otro número:"));
        resultadoDiv.innerHTML = `Suma: ${num1 + num2}, Resta: ${num1 - num2}, Producto: ${num1 * num2}`;
    } else {
        resultadoDiv.innerHTML = "El primer número debe ser positivo.";
    }
}

// 1.4. Mayor de dos números
function mayorDos() {
    const num1 = parseInt(prompt("Introduce el primer número:"));
    const num2 = parseInt(prompt("Introduce el segundo número:"));
    resultadoDiv.innerHTML = num1 > num2 ? `${num1} es mayor` : `${num2} es mayor`;
}

// 1.5. Mayor de tres números
function mayorTres() {
    const num1 = parseInt(prompt("Introduce el primer número:"));
    const num2 = parseInt(prompt("Introduce el segundo número:"));
    const num3 = parseInt(prompt("Introduce el tercer número:"));
    const mayor = Math.max(num1, num2, num3);
    resultadoDiv.innerHTML = `${mayor} es el mayor`;
}

// 1.6. Mayor de cuatro números
function mayorCuatro() {
    const num1 = parseInt(prompt("Introduce el primer número:"));
    const num2 = parseInt(prompt("Introduce el segundo número:"));
    const num3 = parseInt(prompt("Introduce el tercer número:"));
    const num4 = parseInt(prompt("Introduce el cuarto número:"));
    const mayor = Math.max(num1, num2, num3, num4);
    resultadoDiv.innerHTML = `${mayor} es el mayor`;
}

// 1.7. Estado del agua
function estadoAgua() {
    const temperatura = parseFloat(prompt("Introduce la temperatura del agua:"));
    if (temperatura < 0) {
        resultadoDiv.innerHTML = "Estado sólido";
    } else if (temperatura < 100) {
        resultadoDiv.innerHTML = "Estado líquido";
    } else {
        resultadoDiv.innerHTML = "Estado gaseoso";
    }
}

// 1.8. Año bisiesto
function anioBisiesto() {
    const anio = parseInt(prompt("Introduce un año:"));
    const esBisiesto = (anio % 4 === 0 && anio % 100 !== 0) || anio % 400 === 0;
    resultadoDiv.innerHTML = esBisiesto ? `${anio} es bisiesto` : `${anio} no es bisiesto`;
}

// 1.9. Día siguiente
function diaSiguiente() {
    const fecha = new Date(prompt("Introduce la fecha (YYYY-MM-DD):"));
    fecha.setDate(fecha.getDate() + 1);
    resultadoDiv.innerHTML = `El día siguiente es: ${fecha.toISOString().slice(0, 10)}`;
}

// 1.10. Nombre del mes
function nombreMes() {
    const mes = parseInt(prompt("Introduce el número del mes (1-12):"));
    const nombresMeses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    resultadoDiv.innerHTML = nombresMeses[mes - 1] || "Mes inválido";
}

// 1.11. Nombre del día de la semana
function nombreDiaSemana() {
    const inicial = prompt("Introduce la inicial del día de la semana:");
    const inicialMinuscula = inicial.toLowerCase();
    switch (inicialMinuscula) {
        case 'l':
            resultadoDiv.innerHTML = "Lunes";
            break;
        case 'm':
            resultadoDiv.innerHTML = "Martes";
            break;
        case 'x':
            resultadoDiv.innerHTML = "Miércoles";
            break;
        case 'j':
            resultadoDiv.innerHTML = "Jueves";
            break;
        case 'v':
            resultadoDiv.innerHTML = "Viernes";
            break;
        case 's':
            resultadoDiv.innerHTML = "Sábado";
            break;
        case 'd':
            resultadoDiv.innerHTML = "Domingo";
            break;
        default:
            resultadoDiv.innerHTML = "Día inválido";
    }
}

// Estructuras de repetición:
// 2.1. Mayúsculas a minúsculas
function minusculas() {
    const alfabeto = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let minusculas = "";
    for (let letra of alfabeto) {
        minusculas += letra.toLowerCase();
    }
    resultadoDiv.innerHTML = minusculas;
}

// 2.2. Promedio de 100 alumnos
function promedioAlumnos() {
    let suma = 0;
    for (let i = 0; i < 100; i++) {
        suma += parseInt(prompt(`Edad del alumno ${i + 1}:`));
    }
    resultadoDiv.innerHTML = `Promedio: ${suma / 100}`;
}

// 2.3. Promedio de 7 calificaciones
function promedioCalificaciones() {
    let suma = 0;
    for (let i = 0; i < 7; i++) {
        suma += parseFloat(prompt(`Calificación ${i + 1}:`));
    }
    resultadoDiv.innerHTML = `Promedio: ${suma / 7}`;
}

// 2.4. Cubo y cuarta de 10 números
function cuboCuarta() {
    let resultados = "";
    for (let i = 0; i < 10; i++) {
        const num = parseFloat(prompt(`Número ${i + 1}:`));
        resultados += `Número: ${num}, Cubo: ${Math.pow(num, 3)}, Cuarta: ${Math.pow(num, 4)}<br>`;
    }
    resultadoDiv.innerHTML = resultados;
}

// 2.5. Números positivos de 10 números
function numerosPositivos() {
    let positivos = "";
    for (let i = 0; i < 10; i++) {
        const num = parseFloat(prompt(`Número ${i + 1}:`));
        if (num > 0) {
            positivos += `${num}, `;
        }
    }
    resultadoDiv.innerHTML = `Positivos: ${positivos}`;
}

// 2.6. Positivos, negativos y neutros de 20 números
function conteoNumeros() {
    let positivos = 0, negativos = 0, neutros = 0;
    for (let i = 0; i < 20; i++) {
        const num = parseFloat(prompt(`Número ${i + 1}:`));
        if (num > 0) positivos++;
        else if (num < 0) negativos++;
        else neutros++;
    }
    resultadoDiv.innerHTML = `Positivos: ${positivos}, Negativos: ${negativos}, Neutros: ${neutros}`;
}

// 2.7. Negativos a positivos de 15 números
function negativosAPositivos() {
    let positivos = "";
    for (let i = 0; i < 15; i++) {
        const num = parseFloat(prompt(`Número ${i + 1}:`));
        if (num < 0) {
            positivos += `${Math.abs(num)}, `;
        }
    }
    resultadoDiv.innerHTML = `Positivos: ${positivos}`;
}

// 2.8. Suma y media de N números
function sumaMedia() {
    const n = parseInt(prompt("Cantidad de números:"));
    let suma = 0;
    for (let i = 0; i < n; i++) {
        suma += parseFloat(prompt(`Número ${i + 1}:`));
    }
    resultadoDiv.innerHTML = `Suma: ${suma}, Media: ${suma / n}`;
}

// 2.9. Calificación media y baja de 40 alumnos
function calificaciones() {
    let suma = 0, baja = Infinity;
    for (let i = 0; i < 40; i++) {
        const calificacion = parseFloat(prompt(`Calificación ${i + 1}:`));
        suma += calificacion;
        if (calificacion < baja) baja = calificacion;
    }
    resultadoDiv.innerHTML = `Media: ${suma / 40}, Baja: ${baja}`;
}

// 2.10. Tabla de multiplicar
function tablaMultiplicar() {
    const num = parseInt(prompt("Número para la tabla:"));
    let tabla = "";
    for (let i = 1; i <= 10; i++) {
        tabla += `${num} x ${i} = ${num * i}<br>`;
    }
    resultadoDiv.innerHTML = tabla;
}

// Agrega botones para ejecutar cada función
botonesDiv.innerHTML += `
    <div class="row">
        <button class="btn btn-dark col-3 mt-2 mb-2" onclick="parImpar()">Par o Impar</button>
        <button class="btn btn-dark col-3 mt-2 mb-2" onclick="positivoNegativo()">Positivo o Negativo</button>
        <button class="btn btn-dark col-3 mt-2 mb-2" onclick="operaciones()">Operaciones</button>
        <button class="btn btn-dark col-3 mt-2 mb-2" onclick="mayorDos()">Mayor de Dos</button>
        <button class="btn btn-dark col-3 mt-2 mb-2" onclick="mayorTres()">Mayor de Tres</button>
        <button class="btn btn-dark col-3 mt-2 mb-2" onclick="mayorCuatro()">Mayor de Cuatro</button>
        <button class="btn btn-dark col-3 mt-2 mb-2" onclick="estadoAgua()">Estado del Agua</button>
        <button class="btn btn-dark col-3 mt-2 mb-2" onclick="anioBisiesto()">Año Bisiesto</button>
        <button class="btn btn-dark col-3 mt-2 mb-2" onclick="diaSiguiente()">Día Siguiente</button>
        <button class="btn btn-dark col-3 mt-2 mb-2" onclick="nombreMes()">Nombre del Mes</button>
        <button class="btn btn-dark col-3 mt-2 mb-2" onclick="nombreDiaSemana()">Nombre del Día</button>

        <button class="btn btn-primary col-3 mt-2 mb-2" onclick="minusculas()">Minúsculas</button>
        <button class="btn btn-primary col-3 mt-2 mb-2" onclick="promedioAlumnos()">Promedio Alumnos</button>
        <button class="btn btn-primary col-3 mt-2 mb-2" onclick="promedioCalificaciones()">Promedio Calificaciones</button>
        <button class="btn btn-primary col-3 mt-2 mb-2" onclick="cuboCuarta()">Cubo y Cuarta</button>
        <button class="btn btn-primary col-3 mt-2 mb-2" onclick="numerosPositivos()">Números Positivos</button>
        <button class="btn btn-primary col-3 mt-2 mb-2" onclick="conteoNumeros()">Conteo Números</button>
        <button class="btn btn-primary col-3 mt-2 mb-2" onclick="negativosAPositivos()">Negativos a Positivos</button>
        <button class="btn btn-primary col-3 mt-2 mb-2" onclick="sumaMedia()">Suma y Media</button>
        <button class="btn btn-primary col-3 mt-2 mb-2" onclick="calificaciones()">Calificaciones</button>
        <button class="btn btn-primary col-3 mt-2 mb-2" onclick="tablaMultiplicar()">Tabla Multiplicar</button>
    </div>
`;

// Funciones para el manejo del DOM:
function cambiarColor() {
    const color = prompt("Introduce un color:");
    resultadoDiv.style.color = color;
}

function cambiarFondo() {
    const color = prompt("Introduce un color:");
    resultadoDiv.style.backgroundColor = color;
}

function agregarTexto(){
    const saludo = document.getElementById('saludo'); // Capturamos la etiqueta con el id saludo
    const texto = 'Muchachos buenas noches, mi nombre es Eder Lara y soy el profesor de la clase de programación';
    saludo.innerHTML = texto; // Cambiamos el contenido de la etiqueta saludo
}