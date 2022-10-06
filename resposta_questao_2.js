function verificaDuplicado(arr){
    let duplicados = arr.filter((item, index) => arr.indexOf(item) != index);
    duplicados = duplicados.filter((item, index) => duplicados.indexOf(item) == index);

    console.log(duplicados);
}

verificaDuplicado([4,5,44,98,4,5,6,7])
