// function to calculate some of numbers
function calcSumOfNums() {
    const num1=prompt("Enter First Number:");
    const num2=prompt("Enter Second Number");
    console.log(Number(num1)+ parseInt(num2));    
}
calcSumOfNums();
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








