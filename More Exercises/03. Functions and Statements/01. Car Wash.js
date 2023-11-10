function solve (input){

    let cleanValue = 0;

    for (let command of input){
        switch (command){
            case 'soap':
                cleanValue += 10
                break;
            case 'water':
                cleanValue += 0.20 * cleanValue
                break;
            case 'vacuum cleaner':
                cleanValue += 0.25 * cleanValue
                break;
            case 'mud':
                cleanValue -= 0.10 * cleanValue
                break;
        }
    }

    console.log(`The car is ${cleanValue.toFixed(2)}% clean.`)
}

solve(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water'])