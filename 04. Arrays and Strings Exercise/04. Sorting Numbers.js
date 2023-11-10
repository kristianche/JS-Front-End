function solve (array) {
  array.sort((a, b) => a - b);
  resultArray = [];
  while (array.length > 0) {
    resultArray.push(array.shift(), array.pop());
  }
  return resultArray;
}

console.log(solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));
