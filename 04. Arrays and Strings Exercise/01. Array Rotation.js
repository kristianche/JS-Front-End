function solve (arr, numberOfRotations){
    for (let i = 1; i <= numberOfRotations; i++){
        let firstElement = arr.shift()
        arr.push(firstElement)
    }

    console.log(arr.join(' '))
}

solve([2, 4, 15, 31], 5)