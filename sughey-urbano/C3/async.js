// Define la función asíncrona esperarSegundos
async function esperarSegundos(segundos) {
// Utiliza setTimeout para esperar la cantidad de segundos especificada
    await new Promise(resolve => setTimeout(resolve, segundos * 1000));
    
    // Muestra un mensaje en la consola después de esperar
    console.log(`Han pasado ${segundos} segundos.`);
}

// Ejemplo de uso de la función esperarSegundos
esperarSegundos(5); // Espera 5 segundos y luego muestra el mensaje


const esperarSegundos = () => {
    // Incluye la logica de la función acá
}

export default esperarSegundos;
