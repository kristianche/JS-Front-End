function createCat (name, age){
    return {
        name,
        age,
        meow: function() {console.log(`${this.name}, age ${age} says Meow`)},
    } 
}

const cats = ['Candy 1', 'Poppy 3', 'Nyx 2']
let catName, age, cat

for (let el of cats){
    catName = el.split(' ')[0]
    age = el.split(' ')[1]
    cat = createCat(catName, age)
    cat.meow()
}