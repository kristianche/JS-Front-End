function solve (input) {
    let number = Number(input)

    function averageSum (number){
        let numberAsString = String(number)
        let sum = 0, digitsCount = 0
        
        for (let digit of numberAsString){
            digitsCount += 1
            sum += Number(digit)
        }

        return Number(sum / digitsCount)
    }

    while (true) {
        if ( averageSum(number) > 5){
            console.log(number)
            break
        }

        let numberAsString = String(number)
        numberAsString += '9'
        number = Number(numberAsString)
    }

}

solve(5835)