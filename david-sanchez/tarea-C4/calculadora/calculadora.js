// Definir las funciones matemáticas básicas
function sumar(a, b) {
    return a + b;
}

function restar(a, b) {
    return a - b;
}

function multiplicar(a, b) {
    return a * b;
}

function dividir(a, b) {
    if (b === 0) {
        console.log("Error: No se puede dividir por cero.");
        return null;
    }
    return a / b;
}

// Función principal que procesa los argumentos de línea de comandos y ejecuta la operación correspondiente
function main() {
    const args = process.argv.slice(2); // Obtener los argumentos de línea de comandos

    if (args.length !== 3) {
        console.log("estructur: node calculadora.js <número1> <operador> <número2>");
        console.log("Operaciones : +, -, *, /");
        return;
    }

    const num1 = parseFloat(args[0]);
    const operador = args[1];
    const num2 = parseFloat(args[2]);

    let resultado;

    switch (operador) {
        case '+':
            resultado = sumar(num1, num2);
            break;
        case '-':
            resultado = restar(num1, num2);
            break;
        case '*':
            resultado = multiplicar(num1, num2);
            break;
        case '/':
            resultado = dividir(num1, num2);
            break;
        default:
            console.log("Operador no reconocido. Use: +, -, *, /");
            return;
    }

    if (resultado !== null) {
        console.log(`Resultado: ${resultado}`);
    }
}

// Ejecutar la función principal
main();
