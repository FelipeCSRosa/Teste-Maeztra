//se for impar ja ta errado
//se abre e fecha em par -

function validaSequencia(str){
  const arr = Array.from(str);
  let arrNum = []
  arr.map(e => {
    switch(e){
      case '{':
        arrNum.push(10)
        break;
      case '}':
        arrNum.push(11)
        break;

      case '[':
        arrNum.push(20)
        break;
      case ']':
        arrNum.push(21)
        break;

      case '(':
        arrNum.push(30)
        break;
      case ')':
        arrNum.push(31)
        break;
      default:
    }
  })

  let retorno = true;

  function testeArr(arrTestar){
    arrTestar.forEach((e, idx) => {
        let idxOp = idx
        let idxCl
        for(let i = idx; i < arrTestar.length; i++){
          if(arrTestar[i] == e+1){
            idxCl = i
            if((idxOp%2 != 0 && idxCl%2 != 0) || (idxOp%2 == 0 && idxCl%2 == 0)){
              retorno = false
            }else{
              retorno = true
              arrTestar.splice(idxCl, 1)
              arrTestar.splice(idxOp, 1)
              testeArr(arrTestar)
              break
            }
            break
          }else{
            retorno = false
          }
        }
    })
  }

  testeArr(arrNum)
  retorno ? console.log("É uma sequência válida") : console.log("Não é uma sequência válida")
}

validaSequencia("{[(()]}");