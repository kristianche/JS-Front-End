function sumTable() {
    const table = Array.from(document.querySelectorAll('tbody > tr > td:nth-child(even)'))
    const result = document.getElementById('sum')
    let sum = 0

    for (let i = 0; i < table.length-1; i++) {
        sum += Number(table[i].textContent)
    }

    result.textContent += sum
}