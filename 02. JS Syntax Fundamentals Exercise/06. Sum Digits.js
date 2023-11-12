function solve(number){
    let numberAsString = String(number)
    let sum = 0;

    for (let digit of numberAsString){
        let digitAsNumber = Number(digit)
        sum += digitAsNumber
    }

    console.log(sum)
}

solve(245678)