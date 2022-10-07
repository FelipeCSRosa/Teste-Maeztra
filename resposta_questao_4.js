function verificaAnos(anos){
  let tdsAnos = []
  
  //Colocar todos os anos de todos os array passados como parametro em um único array
  for(let i = 0; i < anos.length; i++){
    for(let n = anos[i][0]; n <= anos[i][1]; n++){
      tdsAnos = [...tdsAnos, n]
    }
  }

  //Organiza o array em ordem crescente
  var sorted_arr = tdsAnos.slice().sort();
  
  const count = {};

  //Cria um objeto que relaciona o ano com seu número de aparções no array
  for (const element of sorted_arr) {
    if (count[element]) {
      count[element] += 1;
    } else {
      count[element] = 1;
    }
  }

  //Cria um array com o número de aparições de cada ano
  const values = Object.values(count);
  //Cria um array com cada ano
  const keys = Object.keys(count);
  //Retorna o mair nuúmero no array de aparições
  const max = Math.max(...values);
  let maisAparece = []

  //Compara o valor de aparições de cada elemento do array com o valor mais alto
  //E cria um array apenas com os anos que mais apareceram
  keys.map(key => {
    if(count[key] == max){
      maisAparece = [...maisAparece, key]
    }
  });

  console.log("Anos com mais pessoas trabalhando", maisAparece)
}

verificaAnos([[1960,2005],[1945,2008],[1938,1999]])