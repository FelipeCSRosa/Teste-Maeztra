function verificaSequencia(number){
    const arr = Array.from(String(number), Number);
    let sequencia = false
    console.log(arr);

    for(let i = 0; i < arr.length; i++){
        let proximoNum = arr[i+1] === undefined ? arr[i] : arr[i+1]
        console.log(arr[i], proximoNum)

        if(arr[i] == proximoNum || arr[i] == proximoNum-1){
            sequencia = true
        }else{
            sequencia = false
            break
        }
    }

    if(sequencia){
        console.log("É uma sequência")
    }else{
        for(let i = 0; i < arr.length; i++){
            let proximoNum = arr[i+1] === undefined ? arr[i] : arr[i+1]
            console.log(arr[i], proximoNum)
    
            if(arr[i] == proximoNum || arr[i] == proximoNum+1){
                sequencia = true
            }else{
                sequencia = false
                break
            }
        }

        if(sequencia){
            console.log("É uma sequência")
        }else{
            console.log("Não é uma sequencia")
        }
    }
}

verificaSequencia(1599)
