

function solucao(min, km) {
    const precoPorMinuto = 50;
    const precoPorKmAte10 = 70;
    const precoPorKmAcima10 = 50;
    const precoPorMinutoDesconto = 30;
  
    let valorTotal = precoPorMinuto * min;
    
    if (km > 10) {
        valorTotal += precoPorKmAte10 * 10;
        valorTotal += (km - 10) * precoPorKmAcima10;
    } else {
        valorTotal += precoPorKmAte10 * km;
    }
    
    if (min > 20) {
        valorTotal -= (min - 20) * (precoPorMinuto - precoPorMinutoDesconto);
    }
    
    console.log(Math.floor(valorTotal));
  }
  
  function processData(input) {
      const x = input.split(" ");
      const min = parseFloat(x[0], 10);
      const km = parseFloat(x[1], 10);
      solucao(min, km);
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