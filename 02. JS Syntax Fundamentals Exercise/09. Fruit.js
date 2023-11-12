function solve (fruitName, grams, pricePerKilo){
    let kilograms = grams / 1000;
    let price = pricePerKilo * kilograms

    console.log(`I need $${price.toFixed(2)} to buy ${kilograms.toFixed(2)} kilograms ${fruitName}.`)
}

solve('orange', 2500, 1.80)