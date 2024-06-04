function sumar(a, b) {
  return a + b;
}

function resta(a, b) {
  return a - b;
}

function multiplicar(a, b) {
  return a * b;
}

function divir(a, b) {
  if (b === 0) {
    console.log("No se puede dividir entre 0");
    return null;
  }
  return a / b;
}

function calcular(number1, operacion, number2) {
  const a = parseFloat(number1);
  const b = parseFloat(number2);

  if (isNaN(a) || isNaN(b)) {
    console.log(
      "uno o más números son invalidos, Solo se deben ingresar números"
    );
    return;
  }
  switch (operacion) {
    case "+":
      console.log(`Resultado: ${sumar(a, b)}`);
      break;

    case "-":
      console.log(`Resultado: ${resta(a, b)}`);
      break;
    case "*":
      console.log(`Resultado: ${multiplicador(a, b)}`);
      break;
    case "/":
      const resultado = dividir(a, b);
      if (resultado !== null) {
        console.log(`Resultado:  ${resultado}`);
      }
      break;
    default:
      console.log("operación no válida");
      break;
  }
}

const argumentoConsola = process.argv.slice(2);

if (argumentoConsola.length !== 3) {
  console.log("Para usar la calculadora de Nodemon  hay que dejar espacios entre los los digitos y operador ejem: 4 + 2");
} else {
  const [number1, operacion, number2] = argumentoConsola;
  calcular(number1, operacion, number2);
}
