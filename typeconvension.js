// function to calculate some of numbers
// function calcSumOfNums() {
//     const num1=prompt("Enter First Number:");
//     const num2=prompt("Enter Second Number");
//     console.log(Number(num1)+ parseInt(num2));    
// }
// calcSumOfNums();
// type conversion
// numbers to strings syntax is either use a  (toString or string)
// 60==>"60"
const num=98;
console.log(typeof num);
console.log(typeof num.toString());
console.log(typeof String(num));
// string to number you could either use a number or parseInt
const myStr="30";
console.log(typeof myStr);
console.log(typeof Number(myStr));
console.log(typeof parseInt(myStr));
console.log(parseInt(myStr));
let name=prompt("Who is there?");
if (!name) {
  alert("Cancelled");
} else if (name === "Dami") {
  let password = prompt("Enter Password:");
  if (!password) {
    alert("Cancelled");
  } else if (password === "missdami") {
    alert("welcome user");
  } else {
    alert("Wrong Password");
  }
} else {
  alert("I dont Know You");
}
removealla("email")
function removealla(word) {
  console.log(word);
  console.log(word.replace("a", ""));
}
// type coerction is the processs of forcing a process
// whenever a string is involved with + it's then a string concatenation such as "50"+4=="504"
// however a valid number string "24" is involved with other
// Math operators-corced to behave as a number e.g "50"-5=45
// a non valid number string e.g "ade" involved with math operators
// except + would resukt to NAN when used e.g "ade"


    









