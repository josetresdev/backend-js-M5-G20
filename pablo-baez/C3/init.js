// init.js
import esperarSegundos from './async.js';

const ejecutar = async () => {
  await esperarSegundos(2);
  await esperarSegundos(3);
  await esperarSegundos(5);
  await esperarSegundos(1);
  console.log("La espera se ha concluido con exito");
};

ejecutar();
