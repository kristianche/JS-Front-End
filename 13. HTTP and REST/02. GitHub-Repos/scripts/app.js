function loadRepos() {
   const URL = "https://api.github.com/users/testnakov/repos"

   const div = document.querySelector('#res')

   fetch(URL)
      .then((res) => res.json())
      .then((result) => {
         div.textContent = JSON.stringify(result)
      })
   
}