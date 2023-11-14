function cityTaxes (name, population, treasury){
    return {
        name,
        population,
        treasury,
        taxRate: 10,
        collectTaxes: function() {
            this.treasury += (this.population * this.taxRate)
        },
        applyGrowth: function(percentage) {
            this.population += (percentage / 100 * this.population)
        },
        applyRecession: function(percentage) {
            this.population -= (percentage / 100 * this.population)
        },
    }
}

const city =cityTaxes('Tortuga', 7000, 15000);
console.log(city)
city.collectTaxes();
console.log(city.treasury);
city.applyGrowth(5);
console.log(city.population);