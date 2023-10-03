function simpleCalculator (num1, num2, operator){
    let result;
    switch (operator){
        case 'add': result = (num1, num2) => console.log(num1 + num2); break
        case 'subtract': result = (num1, num2) => console.log(num1 - num2); break
        case 'multiply': result = (num1, num2) => console.log(num1 * num2); break
        case 'divide': result = (num1, num2) => console.log(num1 / num2); break
    }

    result(num1, num2)
}

simpleCalculator(3, 6, 'divide')