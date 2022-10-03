// there are two methods to swap two numbers in Js
// 1. without using third variable mean temperory var
// 2. with temp variable

// without using thrid variable
let a = 6;
let b= 4;
a = (a+b) ;
b = (a-b) ;
a = (a-b);
console.log(a );
console.log(b);


// with using thrid variable
let x = 20;
let y = 50;
let temp;
temp = x;
x = y;
y = temp;
console.log(`value of x ${x} and y ${y} is swap`)