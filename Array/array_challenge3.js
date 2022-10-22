//   Rotate an Array element in JavaScript

//  Problem 1
// input: [1,2,3,4,5,6]
// output: [4,5,6,1,2,3]  moved k elements of starting index to the last position mean from left to right position

let array = [1,2,3,4,5,6];
let k =3;
for(let i=0; i<k; i++){
array.push(array.shift(array[i]));
}
console.log(array)


// Problem 2
// input: [1,2,3,4,5,6]
// output: [4,5,6,1,2,3]  moved k elements of last position to the stating position mean from right to left position
let array1 = [1,2,3,4,5,6];
let z =3;
for(let i=0; i<z; i++){
    array1.unshift(array1.pop(array1[i])); 
}
console.log(array1)
