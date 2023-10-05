function loadingBar (percent) {
    const bar = ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.']
    let number = percent / 10

    for (let i = 0; i < number; i++){
        bar[i] = '%'
    }

    
    if (bar.includes('.')){
        console.log(`${percent}% [${bar.join('')}]`)
        console.log('Still loading...')
    } else {
        console.log('100% Complete!')
    }

}

loadingBar(90)