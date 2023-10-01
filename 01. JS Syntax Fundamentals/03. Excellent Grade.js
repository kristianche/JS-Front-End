function excellentGrade(input) {
    let grade = Number(input[0])
    if (grade >= 5.50) {
        console.log('Excellent')
    } else {
        console.log('Not excellent')
    }
}

excellentGrade(['5.00'])