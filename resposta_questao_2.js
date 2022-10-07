function verificaRepetidos(arr){
    //Cria um novo array apenas com os elementos repetidos no array passado como parametro
    let duplicados = arr.filter((item, index) => arr.indexOf(item) != index);
    //Removce os elementos repetidos do array, deixando apenas elementos unicos
    duplicados = duplicados.filter((item, index) => duplicados.indexOf(item) == index);

    console.log(duplicados);
}

verificaRepetidos([4,5,44,98,4,5,6,7])
