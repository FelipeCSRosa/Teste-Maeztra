function filtraArray(arr){
    let filtered = arr.filter((item, index) => arr.indexOf(item) != index);
    filtered = filtered.filter((item, index) => filtered.indexOf(item) == index);

    console.log(filtered);
}

filtraArray([1,2,3,4,5,5,10,21,11,14,18,14])
