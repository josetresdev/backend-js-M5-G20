const esperarSegundos = async (segundos) => {
   return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`Han pasado ${segundos} segundos`);
      resolve(); //Aqui se llama a la funcion resolve()
    }, segundos * 1000);
   });
}

export default esperarSegundos;