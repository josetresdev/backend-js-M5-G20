const esperarSegundos = () => {
}
function resuelve2SegundosDespues(x) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(x);
      }, 2000);
    });
  }
  
  const agregar = async function (x) {
    let a = await resuelve2SegundosDespues(20);
    let b = await resuelve2SegundosDespues(30);
    return x + a + b;
  };
  
  agregar(10).then((v) => {
    console.log(v);
  });
  
  (async function (x) {
    let p_a = resuelve2SegundosDespues(20);
    let p_b = resuelve2SegundosDespues(30);
    return x + (await p_a) + (await p_b);
  })(10).then((v) => {
    console.log(v); 
  });

export default esperarSegundos;