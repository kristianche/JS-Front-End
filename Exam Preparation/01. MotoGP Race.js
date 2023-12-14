function solve (input){
    let racersCount = Number(input[0])
    let c = 0
    const raceInfo = {}

    for (let i = 1; i <= racersCount; i++){
        c++;
        let riderName = input[c].split("|")[0]
        let fuelCapacity = Number(input[c].split("|")[1])
        let position = Number(input[c].split("|")[2])

        raceInfo[riderName] = {'fuel capacity': fuelCapacity, 'position': position}

    }

    while (true){
        c++
        let command = input[c]

        if (command === 'Finish'){
            break
        }

        let action = command.split(' - ')[0]

        if (action === 'StopForFuel'){
            let rider = command.split(' - ')[1]
            let minimumFuel = Number(command.split(' - ')[2])

            if ( raceInfo[rider]['fuel capacity'] < minimumFuel){
                let newPosition = Number(command.split(' - ')[3])
                raceInfo[rider].position = newPosition

                console.log(`${rider} stopped to refuel but lost his position, now he is ${newPosition}.`)

            } else {
                console.log(`${rider} does not need to stop for fuel!`)
            }
        } else if (action === 'Overtaking'){
            let rider1 = command.split(' - ')[1]
            let rider2 = command.split(' - ')[2]

            if (raceInfo[rider1].position < raceInfo[rider2].position){
                let rider1OldPosition = raceInfo[rider1].position
                let rider2OldPosition = raceInfo[rider1].position

                raceInfo[rider1].position = rider2OldPosition
                raceInfo[rider2].position = rider1OldPosition

                console.log(`${rider1} overtook ${rider2}!`)
            }
        } else if (action === "EngineFail"){
            let rider = command.split(' - ')[1]
            let lapsLeft = Number(command.split(' - ')[2])

            delete raceInfo[rider]

            console.log(`${rider} is out of the race because of a technical issue, ${lapsLeft} laps before the finish.`)
        }
    }

    for (let rider in raceInfo){
        console.log(rider)
        console.log(`  Final position: ${raceInfo[rider].position}`)
    }

}

solve(["4",
"Valentino Rossi|100|1",
"Marc Marquez|90|3",
"Jorge Lorenzo|80|4",
"Johann Zarco|80|2",
"StopForFuel - Johann Zarco - 90 - 5",
"Overtaking - Marc Marquez - Jorge Lorenzo",
"EngineFail - Marc Marquez - 10",
"Finish"])

