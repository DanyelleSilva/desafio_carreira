function processData(input) {
    const word = input.trim();
  
    if (isAllUpperCase(word)) {
      console.log(word.toLowerCase());
    } else if (isFirstLetterLowerCaseAndRestUpperCase(word)) {
      console.log(word.charAt(0).toUpperCase() + word.slice(1).toLowerCase());
    } else {
      console.log(word);
    }
  }
  
  function isAllUpperCase(str) {
    return str === str.toUpperCase();
  }
  
  function isFirstLetterLowerCaseAndRestUpperCase(str) {
    return str.charAt(0) === str.charAt(0).toLowerCase() && isAllUpperCase(str.slice(1));
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