let array = [0,1,0,3,12];
function arrayTransform(data){
    let countZero =0;
    for(let i=0; i<data.length; i++){
        let isZero = (data[i] ===0);
        if(isZero){
            countZero++;
          data.splice(i,1);
          i--;  
        }
    }
    for(let i=0; i<countZero; i++){
        data.push(0)
    }
}
arrayTransform(array);
console.log(array);