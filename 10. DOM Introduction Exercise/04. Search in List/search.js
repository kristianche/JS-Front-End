function search() {
   const searcedWord = document.querySelector('input').value;
   const towns = document.querySelectorAll('li')
   let matches = 0;
   const result = document.querySelector('#result')

   for (let town of towns){
      if (town.textContent.includes(searcedWord)){
         matches++;
         town.style.fontWeight = 'bold';
         town.style.textDecoration = 'underline';
      }
   }

   result.textContent = `${matches} matches found`
}
