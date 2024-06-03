const esperarSegundos = async(segundos) => {
   await new Promise (resolve => setTimeout(resolve, segundos * 1000));

console.log("pasaron los siguientes segundos:" + segundos);
}
esperarSegundos(3);

export default esperarSegundos;