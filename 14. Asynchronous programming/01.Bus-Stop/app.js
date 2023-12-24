function getInfo() {
    const inputField = document.querySelector('#stopId')

    const div1 = document.querySelector('#stopName')
    const ul = document.getElementById('buses')

    const BASEURL = 'http://localhost:3030/jsonstore/bus/businfo'

    let stopID = inputField.value

    fetch(`${BASEURL}/${stopID}`)
        .then(res => res.json())
        .then(result => {

            div1.textContent = result['name']

            const buses = result['buses']

            for (let bus in buses){
                const li = document.createElement('li')
                li.textContent = `Bus ${bus} arrives in ${buses[bus]} minutes`

                ul.appendChild(li)
            }

            inputField.value = ''
        })
        .catch(err => {
            div1.textContent = 'Error'

            const liElements = Array.from(document.getElementsByTagName('li'))

            liElements.forEach((li) => li.remove())

            inputField.value = ''
            
        })
}