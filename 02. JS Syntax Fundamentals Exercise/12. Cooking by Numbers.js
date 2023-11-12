function solve(number, ...commands) {
    number = parseInt(number);
  
    for (let command of commands) {
      if (command === "chop") {
        number /= 2;
        console.log(number);
      } else if (command === "dice") {
        number = Math.sqrt(number);
        console.log(number);
      } else if (command === "spice") {
        number += 1;
        console.log(number);
      } else if (command === "bake") {
        number *= 3;
        console.log(number);
      } else if (command === "fillet") {
        number *= 0.8;
        console.log(number);
      }
    }
}