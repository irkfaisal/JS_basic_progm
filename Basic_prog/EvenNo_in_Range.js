let startNum = 10;
let endNum = 30;
let isPrime = true;
for(let i = startNum; i<=endNum; i++){
    for(j=2; j<i; j++){
         if(i%2 === 0){
            isPrime = false;
         }
    }
    if(isPrime === true){
        console.log("Prime No "+ i);
    } else{
        console.log("Not a Prime No "+ i);
    }
}
