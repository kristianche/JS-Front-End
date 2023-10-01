function mathOperation (input) {
    let number1 = Number(input[0])
    let number2 = Number(input[1])
    let operation = String(input[2])
    let result;

    switch (operation){
        case '+': result = number1 + number2; break
        case '-': result = number1 - number2; break
        case '*': result = number1 * number2; break
        case '/': result = number1 / number2; break
        case '%': result = number1 % number2; break
        case '**': result = number1 ** number2; break
    }

    console.log(result)   
}

mathOperation([3, 5.5, '*'])