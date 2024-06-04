async function esperarSegundos(n){
    console.log("hola");
    await new Promise(resolve => setTimeout(resolve, n));
    console.log("despues de la espera");
}
esperarSegundos(4000)
export default esperarSegundos;