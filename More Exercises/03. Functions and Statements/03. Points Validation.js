function solve (input){

    function comprasion(count, x1, y1, x2, y2){

        let result;

        switch (count){
            case 1:
                result = Math.sqrt(Math.pow(0 - x1, 2) + Math.pow(0 - y1, 2))
                break;
            case 2:
                result = Math.sqrt(Math.pow(x2 - 0, 2) + Math.pow(y2 - 0, 2))
                break;
            case 3:
                result = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2))
                break;
        }

        return result;
    }

    let x1, y1, x2, y2;
    [x1, y1, x2, y2] = input

    

    for (let i = 1; i <= 3; i++){
        if (Number.isInteger(comprasion(i, x1, y1, x2, y2))){
            switch (i){
                case 1:
                    console.log(`{${x1}, ${x2}} to {0, 0} is valid`)
                    break;
                case 2:
                    console.log(`{${y1}, ${y2}} to {0, 0} is valid`)
                    break;
                case 3:
                    console.log(`{${x1}, ${x2}} to {${y1}, ${y2}} is valid`)
                    break;
            }
        } else {
            switch (i){
                case 1:
                    console.log(`{${x1}, ${x2}} to {0, 0} is invalid`)
                    break;
                case 2:
                    console.log(`{${y1}, ${y2}} to {0, 0} is invalid`)
                    break;
                case 3:
                    console.log(`{${x1}, ${x2}} to {${y1}, ${y2}} is invalid`)
                    break;
            }
        }
    }
}

solve([2, 1, 1, 1])