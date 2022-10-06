function verificaAnos(anos){
  let tdsAnos = []
  
  for(let i = 0; i < anos.length; i++){
    for(let n = anos[i][0]; n <= anos[i][1]; n++){
      tdsAnos = [...tdsAnos, n]
    }
  }

  console.log(tdsAnos)

  var sorted_arr = tdsAnos.slice().sort();

  console.log(sorted_arr)

  const count = {};

  for (const element of sorted_arr) {
    if (count[element]) {
      count[element] += 1;
    } else {
      count[element] = 1;
    }
  }

  const values = Object.values(count);
  const keys = Object.keys(count);
  const max = Math.max(...values);
  let maisAparece = []

  keys.map(key => {
    if(count[key] == max){
      maisAparece = [...maisAparece, key]
    }
  });
}

let anosT = [[1960,2005],[1945,2008],[1938,1999]]

verificaAnos(anosT)