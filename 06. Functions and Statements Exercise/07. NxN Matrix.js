function NxNMartix (number) {
    let colArray;
    

    for (let row = 1; row <= number; row++){
        colArray = []
        for (let col = 1; col <= number; col++){
            colArray.push(number)
        }
        console.log(colArray.join(' '))
    }
}

NxNMartix(7)