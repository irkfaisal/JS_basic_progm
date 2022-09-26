let num = 7;
let isPrime = true;
for(let i =2; i<num ; i++){
  if(num % i ===0){
   isPrime = false;
  }
}
if(isPrime===true){
  console.log("Prime no " );
} else{
  console.log("not a prime no ");
}