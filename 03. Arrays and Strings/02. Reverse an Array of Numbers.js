function solve (count, numbers){
    let newArr = numbers.splice(0, count)
    newArr.reverse()
    console.log(newArr.join(' '))
}

solve(4, [-1, 20, 99, 5])