let x = 36;
let y = 54;
let min = ((y > x) ? x : y);
let HCForGCD;
for(let i =0; i<= min; i++){
    if(x%i===0 && y%i===0){
        HCForGCD = i;
    }
}
console.log(HCForGCD)