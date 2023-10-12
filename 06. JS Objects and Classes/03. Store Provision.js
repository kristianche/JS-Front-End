function storeProvision (currentStock, deliveredStock) {
    const products = [...currentStock, ...deliveredStock]

    const stock = products.reduce( (acc, curr, index) => {
        if (index % 2 ===0){
            if (!acc.hasOwnProperty(curr)){
                acc[curr] = Number(products[index + 1])
            } else {
                acc[curr] += Number(products[index + 1])
            }
        }

        return acc
    }, {})

    Object.keys(stock).forEach((key) => {
        console.log(`${key} -> ${stock[key]}`)
    })

}

storeProvision(
['Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'],
['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30']
)