const esperarSegundos = (segundos) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log(`>Ya han pasado ${segundos} segundos`);
        resolve();
      }, segundos * 1000);
    });
  };
  
  export default esperarSegundos;
  