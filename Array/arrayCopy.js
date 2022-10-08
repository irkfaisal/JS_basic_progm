// using for loops
let arr1 = ["hello", "world", "bye", "car"];
let arr2 = [];  
for(let i= 0; i< arr1.length; i++){
   arr2.push(arr1[i])
}
console.log(arr2);

// using methods 
let arr = [1,2,3,4,5];
 let b = arr;
 console.log(b)
 let arrofCopy = arr.concat();
 let arr1OfCopy = arr.slice();
 let arr2ofCopy = [...arr]; //ES6
 let  arr3ofCopy = arr;
 
 console.log(arrofCopy, arr1OfCopy,arr2ofCopy, arr3ofCopy )
 
 
//  How to copy Multi-Dimensional Array elements in JavaScript
// If you want to copy elements from a multi-dimensional array, you can utilize the JSON.stringify() and JSON.parse() methods.
//  The JSON.stringify() method will convert the specified object to a string, which can be then converted to an array with the help of JSON.parse() method.

// Syntax to copy Multi-Dimensional Array elements

// var array2 = JSON.parse(JSON.stringify(array1));
// Firstly, the “JSON.stringify()” method will convert “array1” to string and then it will parse it to an array (object) using the “JSON.parse()” method.
//  The returned array elements will be then copied to “array2”.