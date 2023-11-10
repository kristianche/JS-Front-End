function signCheck (num1, num2, num3) {
    let positiveNumbers = 0;
    let negativeNumbers = 0;
    let numbersArray = [num1, num2, num3]

    for (let num of numbersArray){
        if (num > 0){
            positiveNumbers++;
        } else {
            negativeNumbers++;
        }
    }

    if (positiveNumbers === 1 && negativeNumbers === 2){
        console.log('Positive')
    } else if (positiveNumbers === 2 && negativeNumbers === 1){
        console.log('Negative')
    } else if (positiveNumbers ===3 && negativeNumbers ===0){
        console.log('Positive')
    } else if (positiveNumbers ===0 && negativeNumbers ===3){
        console.log('Negative')
    }
}

signCheck(-1, 22, -3)