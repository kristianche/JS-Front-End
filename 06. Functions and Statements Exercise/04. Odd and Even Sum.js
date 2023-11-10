function oddAndEvenSum (number) {
    let numberAsText = number.toString()
    let array = numberAsText.split('')
    let evenSum = 0
    let oddSum = 0
    let num

    for (let numAsText of array){
        num = Number(numAsText)
        if (num % 2 === 0){
            evenSum += num
        } else {
            oddSum += num
        }
    }

    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`)
}

oddAndEvenSum(1000435)