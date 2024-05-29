const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


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
    return "No se puede dividir por cero";
  }
  return a / b;
}


function calcular(operacion, a, b) {
  switch (operacion) {
    case '+':
      return suma(a, b);
    case '-':
      return resta(a, b);
    case '*':
      return multiplicacion(a, b);
    case '/':
      return division(a, b);
    default:
      return "Operación no válida";
  }
}


rl.question('Ingrese la operación a realizar (+, -, *, /): ', (operacion) => {
  rl.question('Ingrese el primer número: ', (num1) => {
    rl.question('Ingrese el segundo número: ', (num2) => {
      
      const numero1 = parseFloat(num1);
      const numero2 = parseFloat(num2);

      
      if (isNaN(numero1) || isNaN(numero2)) {
        console.log("Por favor ingrese números válidos.");
      } else {
        
        const resultado = calcular(operacion, numero1, numero2);
        console.log(`El resultado de la operación es: ${resultado}`);
      }

      
      rl.close();
    });
  });
});
