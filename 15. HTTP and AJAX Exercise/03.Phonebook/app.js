function attachEvents() {
    const BASEURL = 'http://localhost:3030/jsonstore/phonebook';

    const personInput = document.getElementById('person');
    const phoneInput = document.getElementById('phone');

    const loadButton = document.getElementById('btnLoad');
    const createButton = document.getElementById('btnCreate');

    const ul = document.querySelector('ul');

    let name, phone, deleteKey;

    loadButton.addEventListener('click', () => {
        clear()
        loadInfo()
    })

    createButton.addEventListener('click', () => {
        fetch(BASEURL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                'person': personInput.value,
                'phone': phoneInput.value
            })
        })
            .then(res => res.json())
            .then(result => {
                clear()
                loadInfo()
                personInput.value = ''
                phoneInput.value = ''
            })
    })

    function loadInfo(){
        fetch(BASEURL)
            .then(res => res.json())
            .then(result => {
            
                for (let key in result){
                    name = result[key]['person'];
                    phone = result[key]['phone'];

                    const li = document.createElement('li');
                    li.textContent = `${name}: ${phone}`;

                    const deleteButton = document.createElement('button');
                    deleteButton.textContent = 'Delete';
                    deleteButton.addEventListener('click', () => {
                        name = li.textContent.split(': ')[0]
                        deleteFunc(name)
                    })

                    li.appendChild(deleteButton);
                    ul.appendChild(li);
                }
        })
    }

    function clear(){
        if (document.getElementsByTagName('li')){
            const liArray = Array.from(document.getElementsByTagName('li'))

            liArray.forEach(li => li.remove());
        }
        
    }

    function deleteFunc(name){
        fetch(BASEURL)
            .then(res => res.json())
            .then(result => {
                for (let key in result){
                    if (result[key]['person'] === name){
                        deleteKey = key;
                        break;
                    }
                }

                fetch(`${BASEURL}/${deleteKey}`, {
                    method: 'DELETE'
                })
            })

    }
}

attachEvents();