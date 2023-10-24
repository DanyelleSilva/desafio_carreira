

function solucao(jogadores) {
    let countZero = 0;
    let countOne = 0;
    let nomeZero = "";
    let nomeOne = "";
  
    for (let jogador of jogadores) {
      if (jogador.jogada === 0) {
        countZero++;
        nomeZero = jogador.nome;
      } else if (jogador.jogada === 1) {
        countOne++;
        nomeOne = jogador.nome;
      }
    }
  
    if (countZero === 1) {
      console.log(nomeZero);
    } else if (countOne === 1) {
      console.log(nomeOne);
    } else {
      console.log("NINGUEM");
    }
  }
  
  function processData(input) {
      solucao(JSON.parse(input));
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
  