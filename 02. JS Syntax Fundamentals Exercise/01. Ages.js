function solve (age) {

    let output;

    if (0 <= age && age <= 2){
        output = 'baby'
    } else if (3 <= age && age <= 13){
        output = 'child'
    } else if (14 <= age && age <= 19){
        output = 'teenager'
    } else if (20 <= age && age <= 65){
        output = 'adult'
    } else if (age >= 66){
        output = 'elder'
    } else {
        output = 'out of bounds'
    }

    console.log(output)
}

solve(20)
solve(1)
solve(66)
solve(-1)
solve(15)