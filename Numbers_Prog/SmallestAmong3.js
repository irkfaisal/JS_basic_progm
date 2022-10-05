// Smallest among three numbers program in JavaScript
let a=10; b = 5; c= 15;
if(c<=a && c<=b){
    console.log("c is smallest")
} else{
    if(b<=a && b<=c){
        console.log("b is smallest")
    }
    else{
        console.log("a is smallest")
    }
}