function solve() {
  const text = document.getElementById('input').value;
  const output = document.getElementById('output')

  const textArray = text.split('.')
  let iteration = 0;
  let paragraph = '';
  const paragraphs = [];

  for (let sentence of textArray){
    
    iteration++;

    if (sentence === textArray[-1] || iteration % 3 === 0){

      paragraph += `${sentence}. `
      paragraphs.push(paragraph)
      paragraph = ''
      
    } else {

      paragraph += `${sentence}. `

    }
  }

  for (let textOfParagraph of paragraphs){
    output.innerHTML += `<p>${textOfParagraph}</p>`
  }
}