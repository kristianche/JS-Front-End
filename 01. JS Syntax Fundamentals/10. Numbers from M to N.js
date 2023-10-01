function numbersFromMtoN (input) {
    let M = Number(input[0])
    let N = Number(input[1])

    for (let i = M; i >= N; i--){
        console.log(i)
    }
}

numbersFromMtoN([6, 2])