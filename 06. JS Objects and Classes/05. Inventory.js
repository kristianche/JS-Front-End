function inventory (input){
    const heroes = []
    input.forEach( (info) => {
        const [heroName, level, items] = info.split(' / ')
        heroes.push({
            heroName,
            level,
            items
        })
    })

    heroes.sort( (a, b) => {
        a.level - b.level
    })

    heroes.forEach( (hero) => {
        console.log(`Hero: ${hero.heroName}`)
        console.log(`level => ${hero.level}`)
        console.log(`items => ${hero.items}`)
    })
}

inventory([
    'Batman / 2 / Banana, Gun',
    'Superman / 18 / Sword',
    'Poppy / 28 / Sentinel, Antara'
]
)