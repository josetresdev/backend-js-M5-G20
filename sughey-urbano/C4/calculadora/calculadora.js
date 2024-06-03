// calculadora.js

function suma(a, b) {
    return a + b;
}

function resta(a, b) {
    return a - b;
}

function multiplicacion(a, b) {
    return a * b;
}

function division(a, b) {
    if (b === 0) {
        return "Error: División por cero";
    }
    return a / b;
}

function calcular(numero1, operacion, numero2) {
    const a = parseFloat(numero1);
    const b = parseFloat(numero2);

    switch (operacion) {
        case '+':
            return suma(a, b);
        case '-':
            return resta(a, b);
        case '*':
            return multiplicacion(a, b);
        case 'div':
            return division(a, b);
        default:
            return "Operación no válida. Usa +, -, * o div";
    }
}

const args = process.argv.slice(2);
const [numero1, operacion, numero2] = args;

if (numero1 && operacion && numero2) {
    const resultado = calcular(numero1, operacion, numero2);
    console.log(`Resultado: ${resultado}`);
} else {
    console.log("Uso: node calculadora.js [numero1] [operacion] [numero2]");
    console.log("Ejemplo: node calculadora.js 5 + 3");
}
