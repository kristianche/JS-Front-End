function solve (arr, step) {
    const newArr = []

    newArr.push(arr.shift())

    for (let i = step - 1; i <= arr.length; i+= step){
        let element = arr[i]
        newArr.push(element)
    }

    return newArr
}

console.log(solve(['5', '20', '31', '4', '20'], 2))