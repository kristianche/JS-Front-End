function factorialDivision (num1, num2){
    let num1Result = 1;
    let num2Result = 1;

    for (let i = num1; i >= 1; i--){
        num1Result *= i
    }
    
    for (let i = num2; i >= 1; i--){
        num2Result *= i
    }

    console.log(`${(num1Result / num2Result).toFixed(2)}`)
}

factorialDivision(6, 2)