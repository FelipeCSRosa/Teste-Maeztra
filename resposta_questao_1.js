function verificaSequencia(number){
    //Valida o valor recebido
    if(number < 0){
        return console.log("Valor inválido")
    }

    //Separa cada unidade do número recebido em uma elemento de um array
    const arr = Array.from(String(number), Number);

    let sequencia = false

    //Compara cada elemento com o próximo e veridfica se está em sequência crescente
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
        //Compara cada elemento com o próximo e veridfica se está em sequência decrescente
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

verificaSequencia(987654321)
