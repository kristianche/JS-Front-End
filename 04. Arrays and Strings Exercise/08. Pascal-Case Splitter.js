function solve(string) {
    let expression = /[A-Z][a-z]*/gm;
    let result = string.match(expression);
    console.log(result.join(", "));
  }