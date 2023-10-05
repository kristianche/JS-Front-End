function reverseAnArrayOfNumber (input) {
    let index = Number(input[0])
    let array = input[1]
    let newArray = []

    for (let num of array){
        if (newArray.length == index - 1){
            newArray.push(num)
            break;
        }

        newArray.push(num)
    }
    let finalArray = newArray.reverse()
    console.log(finalArray.join(' '))
}

reverseAnArrayOfNumber([4, [-1, 20, 99, 5]]) 