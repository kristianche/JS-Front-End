async function loadCommits() {
    let username = document.querySelector('#username').value
    let repo = document.querySelector('#repo').value
    
    const ul = document.querySelector('#commits')

    const BASEURL = "https://api.github.com/repos"
    let code = null

    try{
        const res = await fetch(`${BASEURL}/${username}/${repo}/commits`)
        code = res.status
        const result = await res.json()

        result.forEach ( (commit) => {
            const li = document.createElement('li');
            li.textContent = `${commit.commit.author.name}: ${commit.commit.message}`;
            ul.appendChild(li);
        })

    } catch (error) {
        const li = document.createElement('li');
        li.textContent = `Error: ${code} (Not Found)`;
        ul.appendChild(li);
    }

}