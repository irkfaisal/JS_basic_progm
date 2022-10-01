// let num  = 100;
// for(let i =num; i>0; i--){
//     console.log(i);
// }
let num = 5245;
let strNum = num.toString();
let newVal = strNum.split("").reverse();
console.log(newVal);

let newIntVal = parseInt(newVal);
console.log(newIntVal)