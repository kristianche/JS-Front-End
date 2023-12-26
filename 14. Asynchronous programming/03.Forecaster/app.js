function attachEvents() {
    const inputLocation = document.getElementById('location')
    const getWeatherButton = document.querySelector('#submit')

    let locationCode, locationName, low, high, condition, conditionAsText

    const conditions = {
        'Sunny': '&#x2600;',
        'Partly sunny': '&#x26C5;',
        'Overcast': '&#x2601;',
        'Rain': '&#x2614;' 
    }

    const forecastDiv = document.querySelector('#forecast')
    const currentDiv = document.querySelector('#current')
    const upcomingDiv = document.querySelector('div[id=upcoming]')

    const foreCastInfoDiv = document.createElement('div')
    foreCastInfoDiv.className = 'forecast-info'

    upcomingDiv.appendChild(foreCastInfoDiv)

    const BASEURL = 'http://localhost:3030/jsonstore/forecaster/locations'

    getWeatherButton.addEventListener('click', (e) => {
        fetch(BASEURL)
            .then(res => res.json())
            .then(result => {

                for (let location of result){
                    locationName = location.name
                    const inputName = inputLocation.value

                    if (locationName === inputName){
                        locationCode = location.code
                        break
                    }

                    
                }

                fetch(`http://localhost:3030/jsonstore/forecaster/today/${locationCode}`)
                    .then(res => res.json())
                    .then(result => {

                        const locationNameAndCountry = result['name']
                        low = result['forecast']['low']
                        high = result['forecast']['high']
                        conditionAsText = result['forecast']['condition']

                        condition = conditions[conditionAsText]

                        forecastDiv.style.display = 'block'

                        currentDiv.innerHTML = `
                        <div class="label">Current conditions</div>
                        <div class="forecasts">
                            <span class="condition symbol">${condition}</span>
                            <span class="condition">
                                <span class="forecast-data">${locationNameAndCountry}</span>
                                <span class="forecast-data">${low}&#176/${high}&#176</span>
                                <span class="forecast-data">${conditionAsText}</span>
                            </span>
                        </div>
                        `
                    })
                    .catch( err => {
                        forecastDiv.textContent = 'Error'
                    })

                foreCastInfoDiv.innerHTML = ''

                fetch(`http://localhost:3030/jsonstore/forecaster/upcoming/${locationCode}`)
                    .then(res => res.json())
                    .then(result => {

                        for (let weather of result['forecast']){

                            const low = weather['low']
                            const high = weather['high']
                            const conditionAsText = weather['condition']

                            const condition = conditions[conditionAsText]

                            foreCastInfoDiv.innerHTML += `
                                <span class="upcoming">
                                    <span class="symbol">${condition}</span>
                                    <span class="forecast-data">${low}&#176/${high}&#176</span>
                                    <span class="forecast-data">${conditionAsText}</span>
                                </span>
                            `

                            inputLocation.value = ''
                        }
                    })
                    .catch( err => {
                        forecastDiv.textContent = 'Error'
                    })


            })
            .catch( err => {
                forecastDiv.textContent = 'Error'
            })
    })


}

attachEvents();