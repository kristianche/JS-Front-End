function solution() {
    const BASEURL = 'http://localhost:3030/jsonstore/advanced/articles'

    const mainSection = document.querySelector('section')

    let title, id;

    fetch(`${BASEURL}/list`)
        .then(res => res.json())
        .then(result => {
            for (let key in result){

                title = result[key]['title']
                id = result[key]['_id']

                const div1 = document.createElement('div')
                div1.className = 'accordion'

                const div2 = document.createElement('div')
                div2.className = 'head'

                const span = document.createElement('span')
                span.textContent = title

                const button = document.createElement('button')
                button.className = 'button'
                button.id = id
                button.textContent = 'More'
                button.addEventListener('click', (e) => {
                    id = e.currentTarget.id
                    if (e.currentTarget.textContent === 'More'){
                        fetch(`${BASEURL}/details/${id}`)
                            .then(res => res.json())
                            .then(result => {
                                let content = result['content']
                                const hiddenDiv = document.createElement('div')
                                hiddenDiv.className = 'extra'
                                
                                const p = document.createElement('p')
                                p.textContent = content

                                hiddenDiv.appendChild(p)
                                mainSection.appendChild(hiddenDiv)

                                e.currentTarget.textContent = 'Less'
                            })
                    } else if (e.currentTarget.textContent === 'Less'){
                        e.currentTarget.textContent = 'Less'

                        e.currentTarget.parentElement.querySelector('.extra').remove()
                    }
                })

                div2.appendChild(span)
                div2.appendChild(button)

                div1.appendChild(div2)
                mainSection.appendChild(div1)
   
            }
        })
}