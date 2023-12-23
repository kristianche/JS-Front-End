function loadRepos() {
	const BASEURL = "https://api.github.com/users"

	const username = document.querySelector('#username').value
	const ul = document.getElementById('repos')


	fetch(`${BASEURL}/${username}/repos`)
		.then((res) => res.json())
		.then((result) => {
			if (document.querySelectorAll('li').length !== 0){
				Array.from(document.querySelectorAll('li')).forEach((li) => li.remove())
			}

			if (document.querySelector('div')){
				document.querySelector('div').remove()
			}
			
			result.forEach( (repo) => {
				const fullName = repo['full_name']
				const htmlURl = repo['html_url']

				const a = document.createElement('a')
				a.href = htmlURl
				a.textContent = fullName

				const li = document.createElement('li')
				li.appendChild(a)

				ul.append(li)
			})
		})
		.catch(() => {
			const div = document.createElement('div')
			div.textContent = 'ERROR! USER NOT FOUND!'
			div.style.color = 'red'

			ul.append(div)
		})
}