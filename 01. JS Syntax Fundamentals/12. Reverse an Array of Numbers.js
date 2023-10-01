function reverseAnArrayOfNumber (input) {
    let index = Number(input[0])
    let array = input[1]
    let newArray = []

    for (let num of array){
        newArray.push(num)

        if (num.index === index - 1){
            break
        }
    }

    console.log(newArray.join(', '))
}

reverseAnArrayOfNumber([3, [10, 20, 30, 40, 50]]) 