// finding unique values from an array
let arr = [1, 2, 2, 3, 4, 5, 6, 6, 7, 8, 8, 8];
let uniqueVal = [];
for (let i = 0; i < arr.length; i++) {
    if (arr.indexOf(arr[i]) === arr.lastIndexOf(arr[i])) {
        uniqueVal.push(arr[i])
    }
}
console.log(uniqueVal);