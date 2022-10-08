let arr = [1, 2, 3, 4, 2, 7, 8, 8, 3];
for (let i = 0; i < arr.length; i++) {
    for(let j=i+1; j<arr.length; j++){
        if(arr[j] == arr[i]){
            console.log(arr[j])
        }
    }
}