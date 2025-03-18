// conditional statement are statement that should a condition value such as if
// if statement
if (true) {
  console.log("Hello World");
}
// 18+ you are eligible to vote
const age = 12;
if (age >= 18) {
  console.log("YOU ARE ELIGIBLE TO VOTE");
}
// write an if statement that logs pssword is strong to the console if the password length is 9 and above
const password = "dhhgbudgy";
if (password.length >= 9) {
  console.log("password is strong");
}
// if else statement
if (true) {
  console.log("Hello World");
} else {
  console.log("goodbye class");
}
//   write an if else statement that checks if a withdrawal of the amount is possible,if possible log transcation successful to the console if not log insufficient funds
const balance = "6000";
const amount = "50";
if (balance > amount) {
  console.log("Transcation Possible");
} else {
  console.log("insufficent funds");
}
//   write a conditional statement that logs pin is correct if the values are the same and incorrect pin if they are not the same
const userPin = "7689";
const enteredPin = "4444";
if (userPin == enteredPin) {
  console.log("They are the same");
} else {
  console.log("They are not the same");
}
//   declare a variable called email check if the email is valid ("a") if yes log valid if else log invalid password
const email = "correct@gmail.com";
if (email.includes("@")) {
  console.log("Valid email");
} else {
  console.log("invalid email");
}

const exam = 50;
if (exam >= 50) {
  console.log("you passed");
} else {
  console.log("you failed");
}
const num1 = 24;
const num2 = 26;
if (num1 > num2) {
  console.log("num1 is greater");
} else {
  console.log("num2 is greater");
}
// Write a program that checks a number and displays if its positive or negative number>0
let myNum=89;
if(myNum > 0){
  console.log("positive");
}
else{
  console.log("Negative");
}
// Write a program that determines the greater of two numbers (num1 num2)
let num10=90;
let num20=98;
if(num10 > num20){
  console.log(`num10 ${num10} is greater than num2 ${num20}`);
}
else{
  console.log(`num20 ${num20} is grater than num1 $`);
  
}
// const num5=75;
// if(num5 % 2===){
//   console.log(`${num5} is EVEN`);
  
// }
// else{
//   console.log(`${num5} is ODD`);
  
// }
const purchaseAmount=600;
if (purchaseAmount>100) {
  console.log("You have a discount");
  
  
}
else{
  console.log("Buy More");
  
}
// calculate the average score of both teams
const averageA =(54+56+78)/3;
const averageB = (67 + 60+ 82)/3
console.log(`Team A has an average score of ${averageA}`);
console.log(`Team B has an average score of ${averageB}`);

if (averageA > averageB) {
  console.log("Team A wins");
  
  
}
else{
  console.log("Team B loss");
  
}
// write a program that tells if a student should be in class or at home,the program uses a 24 hours clock 00-24 the student should be in class between the hours of 10 and 16
let timeOfDay=13;
if(timeOfDay>10 && timeOfDay < 16){
  console.log("You should be in class");
  
}
else{
  console.log("Be at home");
  
}














