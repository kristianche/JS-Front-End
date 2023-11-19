function extractText() {
    const ul = Array.from(document.getElementsByTagName('li'));
    const textArea = document.getElementById('result');

    for (let li of ul){
        textArea.textContent += `${li.textContent}\n`
    }
}