function solve() {
  let text = (document.getElementById('text').value).toLowerCase();
  let currentCase = document.getElementById('naming-convention').value;
  let result;

  const conventions = {
    'Pascal Case': function (str) {
      return (str.match(/[a-zA-Z0-9]+/g) || []).map(w => `${w.charAt(0).toUpperCase()}${w.slice(1)}`).join('');
    },
    'Camel Case': function camelize(str) {
      return str.replace(/\W+(.)/g, function(match, chr)
       {
            return chr.toUpperCase();
        });
    }
  }
  if (currentCase in conventions){
    result = conventions[currentCase](text);
  } else {
    result = 'Error!'
  }
  
  document.getElementById('result').textContent = result;

}