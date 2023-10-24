function solucao(precos) {
    let total = 0;
    for (let preco of precos) {
      total += preco;
    }
  
    if (precos.length >= 3) {
      const minPrice = Math.min(...precos);
      total -= minPrice / 2;
    }
  
    console.log(total);
  }



function processData(input) {
  const lista = input.split(" ");
  lista.forEach((x, i, a) => a[i] = parseInt(x, 10));
  solucao(lista);
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});