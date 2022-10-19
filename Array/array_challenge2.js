// Remove dublicate array element
// my way
let array = [2, 1, 3, 5, 2, 1, 3, 3, 4, 4];
for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
        if (array[i] == array[j]) {
            // console.log(array[i]);
            array.splice(i, 1);
            j--;
        }
    }
}
console.log(array);
//  first loop will pick an value from zero index, inner loop will compare the value except outer i value.
// if inner wild find any the same value, it will simply remove that element from the array and will continue work like first loop.


// remove dublicate from sorted array
let arr = [1, 5, 10, 15, 15, 20];
for (let i = 0; i < arr.length; i++) {
    if (arr[i] == arr[i + 1]) {
        arr.splice(i, 1)
    }
}
console.log(arr);