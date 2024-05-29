// Estas Son las funciones que se debe tomar en la calculadora, son basicas
function sumar(a, b) {
    return a + b;
}

function restar(a, b) {
    return a - b;
}

function multiplicar(a, b) {
    return a * b;
}
// esta es la funcion donde se lanzar'a la calculadora y muestra  todos los eventos de ella
function main() {
    
    function dividir(a, b) {
        if (b === 0) {
            console.log("Error: No se puede dividir por cero.");
            return null;
        }
        return a / b;
    }
    const args = process.argv.slice(2);

    if (args.length !== 3) {
        console.log("Estructura: calculadora.js <número1> <operador> <número2>");
        console.log("Operaciones : +, -, *, /");
        console.log("Ejem < 5 > < + > < 3 >");
        return;
    }
    //numeros
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
// se ejecuta la funciön
main();