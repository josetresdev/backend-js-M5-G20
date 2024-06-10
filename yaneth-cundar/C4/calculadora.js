//funcion para sumar
function sumar(a , b){
    return (a + b)
};

//funcion para restar
function restar(a , b){
    return (a - b)
}

//funcion para multiplica
function multiplicar(a , b){
    return (a * b)
}

//funcion para dividir
function dividir(a , b){
    if ( b === 0){
        return "Error no se puede dividir por cero";
    }
    return (a / b)
}

//para obtener la linea de comandos:
const [numero1, operacion, numero2]= process.argv.slice(2);

//convierte los numeros a valores numericos
const num1 = parseFloat(numero1);
const num2 = parseFloat(numero2);

//Realiza la operacion correspondiente

let resultado;
switch(operacion){
    case "+":
    resultado = sumar (num1, num2);
    break;

    case "-":
    resultado = restar (num1, num2);
    break;

    case "-":
    resultado = multiplicar (num1, num2);
    break;

    case "/":
    resultado = dividir (num1, num2);
    break;

    default:
    resultado = "operacion no valida. usa +, -, *, o /";
    
}
console.log( `Resultado: ${resultado}`);






