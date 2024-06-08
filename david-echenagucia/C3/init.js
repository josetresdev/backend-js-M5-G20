import esperarSegundos from "./async.js"

const ejecutar = async () => {
    await esperarSegundos(2);
    await esperarSegundos(3);
    await esperarSegundos(5);
};

ejecutar();