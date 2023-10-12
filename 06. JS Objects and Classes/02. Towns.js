function towns (text) {
    let town = text.split(' | ')[0]
    let latitude = String(Number(text.split(' | ')[1]).toFixed(2))
    let longitude = String(Number(text.split(' | ')[2]).toFixed(2))
    const townObject = {
        town,
        latitude,
        longitude
    }

    console.log(townObject)
}

townsArray = ['Sofia | 42.696552 | 23.32601', 'Beijing | 39.913818 | 116.363625'].forEach(towns)
