function largestNumber (input) {
    let num1 = Number(input[0])
    let num2 = Number(input[1])
    let num3 = Number(input[2])
    let maxNumber = num1

    if (num2 > maxNumber){
        maxNumber = num2
    }

    if (num3 > maxNumber){
        maxNumber = num3
    }

    console.log(`The largest number is ${maxNumber}.`)
}

largestNumber([-2, -1, -2])