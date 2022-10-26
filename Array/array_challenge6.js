// Program to left rotate the elements of an array

// #1 rotation of an array by array methods in the left direction
let arr1 = [1, 2, 3, 4, 5];
let k1 = 3;
for (let i = 0; i < k1; i++) {
    // console.log(arr1[i]); 1 2 3
    arr1.push(arr1.shift(arr1[i]))
}
console.log(arr1);

// #2 rotation of an array by array method in the right direction
let arr2 = [1, 2, 3, 4, 5];
let k2 = 3;

for (let i = arr2.length - 1; i >= k2; i--) {
    arr2.push(arr2.shift(arr1[i]))
}

console.log(arr2);