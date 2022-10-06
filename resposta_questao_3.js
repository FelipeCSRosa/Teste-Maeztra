//se for impar ja ta errado
//se abre e fecha em par -

function sequencia(str){
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
       //console.log("Valor invalido");
    }
  })

  let retorno = true;

  function testeArr(arrTestar){
    arrTestar.forEach((e, idx) => {
       //console.log("element", e)
        let idxOp = idx
        let idxCl
        for(let i = idx; i < arrTestar.length; i++){
         //console.log("loop", i)
          if(arrTestar[i] == e+1){
            idxCl = i
           //console.log(idxOp, idxCl)
            if((idxOp%2 != 0 && idxCl%2 != 0) || (idxOp%2 == 0 && idxCl%2 == 0)){
              retorno = false
            }else{
              retorno = true
              arrTestar.splice(idxCl, 1)
              arrTestar.splice(idxOp, 1)
              testeArr(arrTestar)
              break
            }
           //console.log(retorno)
            break
          }else{
           //console.log("entrando no else")
            retorno = false
          }
        }
    })
  }

  testeArr(arrNum)
  console.log("final", retorno)
}

sequencia("[{}([)]][[]]");

/*  1 2 3 4 5
   { [ ( ( ) ] }*/