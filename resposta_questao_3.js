function validaSequencia(str){
  //Separa cada caracter da String em elementos de um array
  const arr = Array.from(str);

  //Cria um novo array convertendo os caracteres em inteiros
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
    //Compara cada elemento com os outros do array até encontrar um par válido
    //Critério para par válido:
    // - Tem que ser o o sinal que fecha o elemento ex: { } = 10 11
    /* - O index do elemento que abre(idxOp) e o index do elemento que fecha(idxCl)
    não podem ser ambos par ou ambos impar*/
    arrTestar.forEach((e, idx) => {
        let idxOp = idx
        let idxCl
        for(let i = idx; i < arrTestar.length; i++){
          if(arrTestar[i] == e+1){
            idxCl = i
            if((idxOp%2 != 0 && idxCl%2 != 0) || (idxOp%2 == 0 && idxCl%2 == 0)){
              retorno = false
            }else{
              /*Se for encontrado um par válido remove ambos os elementos do array, retorna
              true e testa o array novamente*/
              //Sendo assim, se o array estiver vazio ao final dos teste, é uma sequência válida
              retorno = true
              arrTestar.splice(idxCl, 1)
              arrTestar.splice(idxOp, 1)
              testeArr(arrTestar)
              console.log(arrTestar)
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

validaSequencia("{[(())]}");