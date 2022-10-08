let arr = [42,87,25,95,762,47,235];
console.log("Max value");
let maxVal = arr[0];
for(let i =0 ; i<arr.length; i++){
    if(arr[i] > maxVal){
       maxVal = arr[i]
    }
    console.log("max value " + maxVal);
}

console.log("Min value");
let minVal = arr[0];
for(let i =0 ; i<arr.length; i++){
    if(arr[i] < minVal){
       minVal = arr[i]
    }
    console.log("max value " + minVal);
}