function attachEvents() {
    const URL = 'http://localhost:3030/jsonstore/messenger'
    
    const sendButton = document.querySelector('#submit')
    const refreshButton = document.querySelector('#refresh')

    const nameInput = document.querySelector('input[name="author"]')
    const messageInput = document.querySelector('input[name="content"]')

    const textarea = document.getElementById('messages')
    console.log(textarea)

    let name, message;

    sendButton.addEventListener('click', () => {
        name = nameInput.value;
        message = messageInput.value;

        fetch(URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                'author': name,
                'content': message
            })
        })

        nameInput.value = ''
        messageInput.value = ''
    })

    refreshButton.addEventListener('click', () => {
        fetch(URL)
            .then(res => res.json())
            .then(result => {
                
                for (let key of Object.keys(result)){
                    name = result[key]['author']
                    message = result[key]['content']

                    console.log(name)
                    console.log(message)

                    if (Object.keys(result).length - 1 === Object.keys(result).indexOf(key)){
                        textarea.textContent += `${name}: ${message}`
                    } else {
                        textarea.textContent += `${name}: ${message}\n`
                    }
                    
                }
            })
    })
}

attachEvents();