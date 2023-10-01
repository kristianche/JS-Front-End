function circleArea (input) {
    let inputType = typeof(input)
    let area

    if (inputType === 'number'){
        let radius = input
        area = radius * radius * Math.PI
        console.log(`${area.toFixed(2)}`)
    } else {
        console.log(`We can not calculate the circle area, because we receive a ${typeof(input)}.`)
    }
}

circleArea('name')