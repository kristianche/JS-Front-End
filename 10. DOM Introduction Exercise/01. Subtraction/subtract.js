function subtract() {
    let number1 = Number(document.getElementById('firstNumber').value)
    let number2 = Number(document.getElementById('secondNumber').value)
    let resultDiv = document.getElementById('result')

    const result = number1 - number2
    resultDiv.textContent = result

}