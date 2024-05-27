import esperarSegundos from './async.js';

const ejecutar = async () => {
    await esperarSegundos(1);
    await esperarSegundos(2);
    await esperarSegundos(3);
}

ejecutar();
