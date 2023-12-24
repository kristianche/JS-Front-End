function solve() {

    const span = document.querySelector('span')
    const BASEURl = 'http://localhost:3030/jsonstore/bus/schedule'

    const departButton = document.getElementById('depart')
    const arriveButton = document.getElementById('arrive')

    let stopId = 'depot'

    function depart() {
        fetch(`${BASEURl}/${stopId}`)
            .then(res => res.json())
            .then(result => {

                span.textContent = `Next stop ${result['name']}`
                
                departButton.disabled = true
                arriveButton.disabled = false
            })
            .catch(err => {
                span.textContent = 'Error'

                departButton.disabled = true
                arriveButton.disabled = true

            })

            
    }

    async function arrive() {
        try {

            const res = await fetch(`${BASEURl}/${stopId}`)
            const result = await res.json()

            span.textContent = `Arriving at ${result['name']}`
            stopId = result['next']

            departButton.disabled = false
            arriveButton.disabled = true

        } catch (err){

            span.textContent = 'Error'

            departButton.disabled = true
            arriveButton.disabled = true

        }
    }

    return {
        depart,
        arrive
    };
}

let result = solve();