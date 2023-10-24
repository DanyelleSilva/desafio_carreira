function solucao(lista) {
    let idadeMaisJovem = Infinity;

  for (let idade of lista) {
    if (idade >= 18 && idade < idadeMaisJovem) {
      idadeMaisJovem = idade;
    }
  }

  if (idadeMaisJovem === Infinity) {
    console.log("CRESCA E APARECA");
  } else {
    console.log(idadeMaisJovem);
  }
  
}

function processData(input) {
    //Enter your code here
  	const strings = input.split(" ");
    const numeros = [];
	for(let i = 0; i < strings.length; i++) {
    	  numeros.push(parseInt(strings[i] ,10));
  	}
    solucao(numeros);
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
