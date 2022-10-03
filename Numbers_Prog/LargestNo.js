// Largest among three numbers program in JavaScript
let a=10; b = 5; c= 15;
if(a>=b && a>=c){
    console.log("A is largest among three " + a);
}else{
    if(b>=a && b>= c){
        console.log("B is largest among three " + b);
    } else{
        console.log("C is largest among three " + c);
    }
}

console.log(((a>=b && a>=c) ? "A is largest " : ((b>=a && b>= c) ? "B is Largest" `${b}` : c )));