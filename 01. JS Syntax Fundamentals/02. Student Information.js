function studentInformation (input) {
    let studentName = String(input[0])
    let age = Number(input[1])
    let grade = Number(input[2])

    console.log(`Name: ${studentName}, Age: ${age}, Grade: ${grade.toFixed(2)}`)
}

studentInformation(['John', '15', 5.54678])