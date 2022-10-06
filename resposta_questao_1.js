function verificaSequencia(number){
    if(number < 0){
        return console.log("Valor inválido")
    }

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
        console.log("Está ordenado")
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
            console.log("Está ordenado")
        }else{
            console.log("Não está ordenado")
        }
    }
}

verificaSequencia(12222222)
