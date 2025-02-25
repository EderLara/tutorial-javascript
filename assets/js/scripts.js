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