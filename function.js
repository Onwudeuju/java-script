// function  are used to log snippet of codes in JS  the most basic way of decleariing a function is a fuction decleration and the  syntax is "function functionName() {write the code}
// Log hello world to the console
function logger() {
  console.log("Hello World");
}
// For this fuction to work it needs to be invoked or called
logger();
logger();
// function welcomeUser(){
//     console.log("Welocome to user");
// }
// welcomeUser();
// function parameters this are values passed to the function to use inside of the parameters "()"
// default parameters
function welcomeUser(name = "Anon") {
  console.log(`Welcome ${name}`);
}
welcomeUser("vera");
welcomeUser("quadri");
// write a function that adds two numbers together
function addTwoNumbers(n1 = 0, n2 = 0) {
  const total = n1 + n2;
  console.log(total);
}
addTwoNumbers(34 + 10);
addTwoNumbers(10 + 9);4
// write a function that compute th dff btw two numbers
function subtractTwoNumbers(n1, n2) {
  console.log(n1 - n2);
}
subtractTwoNumbers(90 - 50);
// write a function called wordConverter, that converts all the alphabetets to uppercase e.g cat
function wordConverter(word = "word"){
  console.log(word.toLocaleUpperCase());
}
wordConverter("cat");
function replaceAllE(word) {
  console.log(word.toLowerCase().replaceAll("e", "*"));
}
replaceAllE("needed");
function checkLength(word) {
  console.log(word.length);
}
// Write a function that returns the first char in the word
checkLength("void");
function returnM(word) {
  console.log(word.charAt(0));
}
returnM("cat");
returnM("rat");
function giveInitials(firstName, lastName) {
  console.log(firstName.charAt(0) + "." + lastName.charAt(0));
}
giveInitials("John", "Doe");
// Write a function that extract the first five letters of any word provided
function ExtractN(word) {
 console.log(word.slice(0,5));
}
ExtractN("laptop");
// write a fuction for positive or negative value
function digit(num) {
   num>0? console.log("Positive"): console.log("Negative");   
}
digit(-76)
// function to a factory that produces a product using a return value
function sayHello(){
    return"say Hello";
}
const val=sayHello();
console.log(val);
// write a function that mutipliesd two numbers 
function multiplyTwoNums(n1,n2) {
    return n1*n2  
}
// write a function that returns the average of 3 numbers
function average(n1,n2,n3) {
    return (n1+n2+n3) /3;  
}
console.log(10+40+20);
// 
function weekToDays(weeks) {
    const days =weeks*7 ;
    return days;  
}
function hourToMin(hours) {
    return `${hours} hours is equal to ${hours * 60} minutes`   
}
console.log(hourToMin(5));
function yearsToMonth(years) {
    return `${years} years is equal to  ${years * 12}months`;
  
}
console.log(yearsToMonth(5));
// simply return number to 40
function returnnumb() {
    return 40;  
}
console.log(returnnumb());
// function expression  is treated like a variableinstead of function then functionNmae its const/let functionName floowed by function
const myName=function(){
    return "John" 
};
console.log(myName());
const divideTwoNums=function(n1,n2){
    return n1 /n2;
}
console.log(divideTwoNums(9,3));
// hosting invoking before and above   writing function declaration-hoisted above puts at the top of the doc
// function decleration you can use it at any spot while a function expression you can't
removealla("email");
function removealla(word){
    console.log(word);
    console.log(word.replace("a",""));   
}
// arrow functions  syntax is let funcName =()=>{}
    const myArrowFunc=()=>{
        console.log("Arrow Function");  
    };
    
    myArrowFunc();
    // Write an arrow function that chacksWinner that takes in two scores as a paremeter your functiion should return dff outcomes based on the score if score a is more it wins or score b wins else its a draw.
    const checkWinner=(scoreA,scoreB)=>{
        if (scoreA>scoreB) {
            return"Score A wins";
            
        }
        else if(scoreA<scoreB){
            return "Score B wins"
        }
        else{
            return "It's a draw"
        }   
    }
    console.log(checkWinner(56,77));
    // write a function called calculateBMI takes in body mass and height as a parameter the function should return te BMI index rounded to 2 decimal places
    const calculateBMi =(mass,height)=>{

        const bmi=mass/height**2;
        return bmi.toFixed(2);

    };
    console.log(calculateBMi(70,1.75));
    // Write a function to get Bmi category using a result bmi above to determine the bmi category less than 18.5 is underweight between 18.5 is underweight btw 18.5 and 24.9 is normal weight btw 25 and 29.9 is overweight anything else is above
    const categoryForBmi=(bmi)=>{
        if(bmi<18.5){
            return "Underweight"
            
        }
        else if(bmi>18.5&&bmi<=24.9){
            return"Normal Weight";
        }
        else if (bmi>24.9&&bmi<=29.9){
            return "Overweight"

        }
        else
        console.log("Its above");

        
    }
    console.log(categoryForBmi);
    
    

    

    
    
    
   

    
        

    

    












