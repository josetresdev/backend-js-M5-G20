function calculadora(num1, operador, num2) {
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
            return 'ERROR!!! No se puede dividir entre cero, elige otro numero';
        }
        return a / b;
    }
    

    let resultado;
    switch (operador) {
        case '+':
            resultado = suma(num1, num2);
            break;
        case '-':
            resultado = resta(num1, num2);
            break;
        case '*':
            resultado = multiplicacion(num1, num2);
            break;
        case '/':
            resultado = division(num1, num2);
            break;
        default:
            return 'Elige realizar una operacion valida';
    }
    return `El resultado de la operacion es: ${resultado}`;
}

console.log(calculadora(50, '/', 2));