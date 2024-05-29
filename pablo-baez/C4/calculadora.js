// Obtengo los argumentos de la línea de comandos
const args = process.argv.slice(2); // Ignoro los primeros dos argumentos 'node' y el nombre del archivo

// Verifico si hay argumentos
if (args.length !== 3) {
    console.log('Uso: node miarchivo.js <número> + <número>');
    process.exit(1);
}


const num1 = parseFloat(args[0]);
const operator = args[1].toLowerCase();
const num2 = parseFloat(args[2]);


if (isNaN(num1) || isNaN(num2)) {
    console.log('Por favor, introduce números válidos.');
    process.exit(1);
}


let resultado;
switch (operator) {
    case '+':
        resultado = num1 + num2;
        break;
    case '-':
        resultado = num1 - num2;
        break;
    case '*':
    case 'm':
        resultado = num1 * num2;
        break;
    case '/':
    case 'd':
        if (num2 === 0) {
            console.log('No se puede dividir por cero.');
            process.exit(1);
        }
        resultado = num1 / num2;
        break;
    case '%':
        resultado = num1 % num2;
        break;
    default:
        console.log('Operador no válido. Por favor, usa +, -, *, / o %.');
        process.exit(1);
}

// Resultado
console.log(`El resultado de ${num1} ${operator} ${num2} es: ${resultado}`);
