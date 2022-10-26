// Reverse an array element

// Method 1
let array1 = [1, 2, 3, 4, 5];
let revArray1 = [];

// run a reversed loop and push the element one by one
for (let i = array1.length - 1; i >= 0; i--) {
    revArray1.push(array1[i]);
}
console.log(revArray1);

// Method 2 by recursion function
let array2 = [1, 2, 3, 4, 5];
let temp = [];

// reversing array element by swapping first with last element using recursion function
function revArray2(data, start, end) {
    if (array2[start] <= array2[end]) {
        temp = array2[start];
        array2[start] = array2[end];
        array2[end] = temp;
        revArray2(data, start++, end--)
    }
}
revArray2(array2, 0, array2.length - 1);
console.log(array2);