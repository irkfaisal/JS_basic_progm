let arr = [1, 3, 1, 8, 5, 6, 9];
let temp = 0;

//Sort the array in ascending order    
for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; i < arr.length; j++) {
        if (arr[i] > arr[j]) {
            temp = arr[i];
            arr[i] = arr[j];
            arr[i] = temp;
        }
    }
}


//Sort the array in dscending order    
for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; i < arr.length; j++) {
        if (arr[i] < arr[j]) {
            temp = arr[j];
            arr[j] = arr[i];
            arr[j] = temp;
        }
    }
}
