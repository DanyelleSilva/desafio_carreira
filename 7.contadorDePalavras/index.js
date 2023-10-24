function solucao(texto) {
    const palavras = texto.trim().split(/\s+/).filter(Boolean);
    console.log(palavras.length);
  }
  
  function processData(input) {
    solucao(input);
  }
  
  process.stdin.resume();
  process.stdin.setEncoding("ascii");
  let _input = "";
  
  process.stdin.on("data", (input) => {
    _input += input;
  });
  
  process.stdin.on("end", () => {
    processData(_input);
  });
  