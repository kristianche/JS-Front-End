function attachEvents() {
    const POSTSURL = 'http://localhost:3030/jsonstore/blog/posts'
    const COMMENTSURL = 'http://localhost:3030/jsonstore/blog/comments'

    const loadButton = document.querySelector('#btnLoadPosts')
    const viewButton = document.querySelector('#btnViewPost')

    const select = document.querySelector('#posts')
    const h1 = document.querySelector('#post-title')
    const ul = document.querySelector('#post-comments')

    let title, commentText;

    loadButton.addEventListener('click', async () => {
        try {
            res = await fetch(POSTSURL)
            result = await res.json()

            for (let key in result){

                title = result[key]['title']
                
                const option = document.createElement('option')
                option.textContent = title
                option.value = key

                select.appendChild(option)

            }

        } catch (err){
            h1.textContent = 'ERROR'
        }
    })

    viewButton.addEventListener('click', async () => {
        try {
            res = await fetch(COMMENTSURL)
            result = await res.json()

            
            for (let key in result){
                
                if (key === select.value){
                    commentText = result[key]['text']

                    h1.textContent = title

                    const li = document.createElement('li')
                    li.textContent = commentText

                    ul.appendChild(li)
                }
            }



        } catch (err){
            h1.textContent = 'ERROR'
        }
    })
}

attachEvents();