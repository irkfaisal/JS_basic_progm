//  Find the Second Largest Element in an Array In JavaScript
let array = [10, 5, 2, 13];
function secondLargest(data) {
    for (let i = 0; i < data.length; i++) {
        for (let j = i + 1; j < data.length; j++) {
            if (data[i] > data[j]) {
                let temp = data[i];
                data[i] = data[j];
                data[j] = temp;
            }
        }
    }
}
secondLargest(array);
console.log(array);
console.log(array[array.length-1]);  //first largest element
console.log(array[array.length-2]);  //second largest element
console.log(array[array.length-3]);  //third largest element

// but this method only applies if the element number is not repeated

// find largest
let arr = [2,5,1,7,3];
let largest = 0;
for(let i=0; i<arr.length; i++){
    if(arr[i] > largest){
        largest = arr[i];
    }
}
 console.log(largest)
