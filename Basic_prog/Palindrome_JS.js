let value = "madam";

const revValue = () => {
  let myNewVal = value.toString().split("").reverse().join("");
  let myNewStr = value.toString();
  if(myNewStr == myNewVal){
     console.log("Yes palindrome");
  }else{
    console.log("Not a palinfrome");
  }
}
revValue();