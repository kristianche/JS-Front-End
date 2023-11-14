function meetings (array) {
    const meetings = {}
    let keys = []
    let key, value
    for (let el of array){
        key = el.split(' ')[0]
        value = el.split(' ')[1]
        if (key in meetings){
            console.log(`Conflict on ${key}!`)
        } else {
            meetings[key] = value
            console.log(`Scheduled for ${key}`)
        }
    }

    for (let tuple of Object.entries(meetings)){
        console.log(`${tuple[0]} -> ${tuple[1]}`)
    }

}

meetings(['Friday Bob',
'Saturday Ted',
'Monday Bill',
'Monday John',
'Wednesday George'])
