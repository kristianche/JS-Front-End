function attachEvents() {
  const URL = 'http://localhost:3030/jsonstore/collections/students'

  const tableBody = document.querySelector('tbody')

  const firstNameInput = document.querySelector('input[name="firstName"]')
  const lastNameInput = document.querySelector('input[name="lastName"]')
  const facultyNumberinput = document.querySelector('input[name="facultyNumber"]')
  const gradeInput = document.querySelector('input[name="grade"]')

  const submitButton = document.querySelector('#submit')

  let firstName, lastName, facultyNumber, grade;

  fetch(URL)
    .then(res => res.json())
    .then(result => {
      for (let key of Object.keys(result)){
        firstName = result[key]['firstName'];
        lastName = result[key]['lastName'];
        facultyNumber = result[key]['facultyNumber']
        grade = result[key]['grade']

        tableBody.innerHTML += `
          <tr>
            <td>${firstName}</td>
            <td>${lastName}</td>
            <td>${facultyNumber}</td>
            <td>${grade}</td>
          </tr>
        `
      }
    })
  
  submitButton.addEventListener('click', () => {
    firstName = firstNameInput.value;
    lastName = lastNameInput.value;
    facultyNumber = facultyNumberinput.value;
    grade = gradeInput.value;

    fetch(URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        firstName,
        lastName,
        facultyNumber,
        grade
      })
    })
    .then(res => res.json())
    .then(result => {
      tableBody.innerHTML += `
      <tr>
        <td>${firstName}</td>
        <td>${lastName}</td>
        <td>${facultyNumber}</td>
        <td>${grade}</td>
      </tr>
    `

    firstNameInput.value = ''
    lastNameInput.value = ''
    facultyNumberinput.value = ''
    gradeInput.value = ''

    })

  })
}

attachEvents();