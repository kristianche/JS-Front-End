function attachEvents() {
  const loadButton = document.querySelector('#loadBooks')
  const createButton = document.querySelector('#form > button')
  const updateButton = document.createElement('button')
  updateButton.textContent = 'save'

  const titleInput = document.querySelector('input[name = title]')
  const authorInput = document.querySelector('input[name = author]')
  
  const tbody = document.querySelector('tbody')

  let bookID = null

  const BASEURL = 'http://localhost:3030/jsonstore/collections/books'

  loadButton.addEventListener('click', (e) => {
    fetch(BASEURL)
      .then(res => res.json())
      .then(result => {

        for (let key in result){
            
            let bookTitle = result[key]['title']
            let bookAuthor = result[key]['author']

            const td1 = document.createElement('td')
            td1.textContent = bookTitle

            const td2 = document.createElement('td')
            td2.textContent = bookAuthor

            const td3 = document.createElement('td')

            const tr = document.createElement('tr')

            const editButton = document.createElement('button')
            editButton.textContent = 'Edit'
            editButton.addEventListener('click', (e) => {
              let localtbody = e.currentTarget.parentElement.parentElement
              let title = localtbody.querySelector('td').textContent
              console.log(title)
              editFunc(title, localtbody)
            })

            const deleteButton = document.createElement('button')
            deleteButton.textContent = 'Delete'
            deleteButton.addEventListener('click', (e) => {
              let localtbody = e.currentTarget.parentElement.parentElement
              let title = localtbody.querySelector('td').textContent
               deleteFunc(title, localtbody)
            })

            td3.appendChild(editButton)
            td3.appendChild(deleteButton)

            tr.appendChild(td1)
            tr.appendChild(td2)
            tr.appendChild(td3)

            tbody.appendChild(tr)
        }
      })
  })
  createButton.addEventListener('click', e => {
    e.preventDefault()

    let bookTitle = titleInput.value
    let bookAuthor = authorInput.value
    
    fetch(BASEURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        'title': bookTitle,
        'author': bookAuthor
      })
    })
    .then(res => res.json())
    .then(result => {
      authorInput.value = ''
      titleInput.value = ''

      let bookAuthor = result['author']
      let bookTitle = result['title']

      const td1 = document.createElement('td')
      td1.textContent = bookTitle

      const td2 = document.createElement('td')
      td2.textContent = bookAuthor

      const td3 = document.createElement('td')

      const tr = document.createElement('tr')

      const editButton = document.createElement('button')
      editButton.textContent = 'Edit'
      editButton.addEventListener('click', (e) => {
        let localtbody = e.currentTarget.parentElement.parentElement
        let title = localtbody.querySelector('td').textContent
        console.log(title)
        editFunc(title, localtbody)
      })

      const deleteButton = document.createElement('button')
      deleteButton.textContent = 'Delete'
      deleteButton.addEventListener('click', (e) => {
        let localtbody = e.currentTarget.parentElement.parentElement
        let title = localtbody.querySelector('td').textContent
         deleteFunc(title, localtbody)
      })

      td3.appendChild(editButton)
      td3.appendChild(deleteButton)

      tr.appendChild(td1)
      tr.appendChild(td2)
      tr.appendChild(td3)

      tbody.appendChild(tr)


    })
  })

  function editFunc(title, localtbody){
    bookID = getBookIdByBookTitle(title)
    console.log(localtbody)
    fetch(BASEURL)
      .then(res => res.json())
      .then(result => {
        for (let key in result){
          if (key === bookID){
            let bookTitle = result[bookID]['title']
            let bookAuthor = result[bookID]['author']

            titleInput.value = bookTitle
            authorInput.value = bookAuthor

            createButton.replaceWith(updateButton)

            updateButton.addEventListener('click', (e) => {
              e.preventDefault()

              fetch(`${BASEURL}/${bookID}`, {
                method: 'PUT',
                headers: {
                  'Content-Type': 'applicaion/json'
                },
                body: JSON.stringify({
                  'title': titleInput.value,
                  'author': authorInput.value
                })
              })
              .then(res => res.json())
              .then(result => {
                let bookTitle = result['title']
                let bookAuthor = result['author']

                localtbody.querySelector('td').textContent = bookTitle
                localtbody.querySelector('td:nth-child(2)').textContent = bookAuthor

                titleInput.value = ''
                authorInput.value = ''
                
                updateButton.replaceWith(createButton)

              })
            })

          }
        }
      })

  }

  function deleteFunc(title, localtbody){
    console.log('delete')
    bookID = getBookIdByBookTitle(title)

    fetch(`${BASEURL}/${bookID}`, {
      method: 'DELETE',
    })

    localtbody.remove()

  }

  function getBookIdByBookTitle(title){
    fetch(BASEURL)
      .then(res => res.json())
      .then(result => {
        for (let key in result){
          console.log(key)
          let bookTitle = result[key]['title']

          if (bookTitle === title){
            bookID = key
            break
          }
        }
      })
    return bookID
  }

}

attachEvents();