// Move specified number of elements to the end of an array in JavaScript

// Method 1
function moveElementsToEndOfArray(arr, x) {

    // arr is the input array
    // x is the no. of elements that
    // needs to be moved to end of
    // the array

    let n = arr.length;

    // if x is greater than length
    // of the array
    x = x % n;

    let first_x_elements = arr.slice(0, x);

    let remaining_elements = arr.slice(x, n);

    // Destructuring to create the desired array
    arr = [...remaining_elements, ...first_x_elements];

    console.log(arr);
}

let arr = [1, 2, 3, 4, 5, 6];
let k = 5;
moveElementsToEndOfArray(arr, k);

// Method 2
function moveElementsToEndOfArray2(arr2, x) {

    // Array is [1, 2, 3, 4, 5] and x = 2
    // final output would be [3, 4, 5, 1, 2]
    x = x % (arr2.length);

    for (let i = 0; i < x; i++) {
        arr2.push(arr2[i]);
    }

    // After this loop array will
    // be [1, 2, 3, 4, 5, 1, 2]
    arr2.splice(0, x);

    // Splice method will remove first
    // x = 2 elements from the array
    // so array will be [3, 4, 5, 1, 2]

    console.log(arr2);
}

let arr2 = [1, 2, 3, 4, 5];
let k2 = 2;
moveElementsToEndOfArray2(arr, k);

