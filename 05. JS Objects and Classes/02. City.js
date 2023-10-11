function city(object){
    for (let tuple of Object.entries(object)){
        console.log(`${tuple[0]} -> ${tuple[1]}`)
    }
}

city(
    {
    name: "Plovdiv",
    area: 389,
    population: 1162358,
    country: "Bulgaria",
    postCode: "4000"
   }
)