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
        throw new Error("No se puede dividir por cero");
    }
    return a / b;
}


function calcular() {
    const args = process.argv.slice(2);

    if (args.length !== 3) {
        console.log("Uso: node calculadora.js [número1] [operación] [número2]");
        process.exit(1);
    }

    const num1 = parseFloat(args[0]);
    const operacion = args[1];
    const num2 = parseFloat(args[2]);

    if (isNaN(num1) || isNaN(num2)) {
        console.log("Error: Los argumentos deben ser números válidos.");
        process.exit(1);
    }

    let resultado;

    switch (operacion) {
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
            try {
                resultado = dividir(num1, num2);
            } catch (error) {
                console.log(error.message);
                process.exit(1);
            }
            break;
        default:
            console.log("Operación no reconocida. Use +, -, * o /.");
            process.exit(1);
    }

    console.log(`Resultado: ${resultado}`);
}

calcular();