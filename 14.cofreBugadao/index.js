function processData(input) {
    const lines = input.trim().split("\n");
      const password = lines[0];
      const typedWord = lines[1];
  
      let passwordIndex = 0;
  
      for (let i = 0; i < typedWord.length; i++) {
          if (typedWord[i] === password[passwordIndex]) {
              passwordIndex++;
              if (passwordIndex === password.length) {
                  console.log("SIM");
                  return;
              }
          }
      }
  
  console.log("NAO");
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
