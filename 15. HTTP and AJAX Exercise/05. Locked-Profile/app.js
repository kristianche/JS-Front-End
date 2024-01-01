function lockedProfile() {
    const BASEURL = 'http://localhost:3030/jsonstore/advanced/profiles'

    const mainDiv = document.querySelector('main')

    let username, email, age;

    fetch(BASEURL)
        .then(res => res.json())
        .then(result => {
            for (let key in result){
                username = result[key]['username']
                email = result[key]['email']
                age = result[key]['age']

                const div = document.createElement('div')
                div.className = 'profile'

                const img = document.createElement('img')
                img.src = './iconProfile2.png'
                img.className = 'userIcon'

                const label1 = document.createElement('label')
                label1.textContent = 'Lock'

                const input1 = document.createElement('input')
                input1.type = 'radio'
                input1.name = 'user1Locked'
                input1.value = 'lock'
                input1.checked = true

                const label2 = document.createElement('label')
                label2.textContent = 'Unlock'

                const input2 = document.createElement('input')
                input2.type = 'radio'
                input2.name = 'user1Locked'
                input2.value = 'unlock'
                input2.checked = false

                const br = document.createElement('br')

                const hr1 = document.createElement('hr')

                const label3 = document.createElement('label')
                label3.textContent = 'Username'

                const input3 = document.createElement('input')
                input3.type = 'text'
                input3.name = 'user1Username'
                input3.value = username
                input3.disabled = true
                input3.readOnly = true

                const div2 = document.createElement('div')
                div2.id = 'user1HiddenFields'
                div2.style.display = 'none'

                const hr2 = document.createElement('hr')

                const label4 = document.createElement('label')
                label4.textContent = 'Email:'

                const input4 = document.createElement('input')
                input4.type = 'email'
                input4.name = 'user1Email'
                input4.value = email
                input4.disabled = true
                input4.readOnly = true

                const label5 = document.createElement('label')
                label5.textContent = 'Age:'

                const input5 = document.createElement('input')
                input5.type = 'email'
                input5.name = 'user1Age'
                input5.value = age
                input5.disabled = true
                input5.readOnly = true

                const button = document.createElement('button')
                button.textContent = 'Show more'
                button.addEventListener('click', (e) => {
                    const hiddenDiv = e.currentTarget.parentElement.querySelector('div')
                    const input = e.currentTarget.parentElement.querySelector('input')

                    if (e.currentTarget.textContent === 'Show more'){

                        if (!(input.checked)){
                            e.currentTarget.textContent = 'Hide it'
                            hiddenDiv.style.display = 'block'
                        }


                    } else if (e.currentTarget.textContent === 'Hide it'){

                        if (!(input.checked)){

                            e.currentTarget.textContent = 'Show more'
                            hiddenDiv.style.display = 'none'

                        }
                    }

                })

                div2.appendChild(hr2)
                div2.appendChild(label4)
                div2.appendChild(input4)
                div2.appendChild(label5)
                div2.appendChild(input5)

                div.appendChild(img)
                div.appendChild(label1)
                div.appendChild(input1)
                div.appendChild(label2)
                div.appendChild(input2)
                div.appendChild(br)
                div.appendChild(hr1)
                div.appendChild(label3)
                div.appendChild(input3)
                div.appendChild(div2)
                div.appendChild(button)

                mainDiv.appendChild(div)
                
            }
        })
}