// Remove falsy values from an array in JavaScript 

// #Mthod 1
let arr = [23, 0, "gfg", false, true, NaN, 12, "hi", undefined, [], ""];
 
  function removeFalsey(arr) {
    // newly created array
    let newArr = [];
 
    // Iterate the array using the forEach loop
    arr.forEach((k) => {
      // check for the truthy value
      if (k) {
        newArr.push(k);
      }
    });
    // return the new array
    return newArr;
  }
 
  console.log(removeFalsey(arr));

//   Method 2
let arr2 = ["", 0, false, undefined, NaN, null];
 
  function removeFalsey2(arr2) {
    // Applying the filter method on the array
    return arr2.filter((k) => {
      // Checking if the value is truthy
      if (k) {
        return k;
      }
    });
  }
 
  console.log(removeFalsey(arr2));
