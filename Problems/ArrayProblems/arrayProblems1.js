// # How to filter out the non-unique values in an array using JavaScript ?
// problem link : https://www.geeksforgeeks.org/how-to-filter-out-the-non-unique-values-in-an-array-using-javascript/

// finding unique values from an array

//  #Method 1 using filter() method
let arr1 = [1, 2, 2, 3, 4, 5, 6, 6, 7, 8, 8, 8];
let uniqueVal = arr1.filter((value, index) => {
    return arr1.indexOf(value) === arr1.lastIndexOf(value)
})
console.log(uniqueVal);

//  #Method 2 using for loop()
let arr2 = [1, 2, 2, 3, 4, 5, 6, 6, 7, 8, 8, 8];
let uniqueVal2 = [];
for (let i = 0; i < arr2.length; i++) {
    if (arr2.indexOf(arr2[i]) === arr2.lastIndexOf(arr2[i])) {
        uniqueVal2.push(arr2[i])
    }
}
console.log(uniqueVal2);