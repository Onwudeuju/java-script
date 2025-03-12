// logical operators are of three types "and(&&),"or(||)","not(!)"
// and operators intitals that every condition must be true
// or just need one condition to be true
// truthy (for truthy any valid string will be true as well as any numbers be it negative or positive)and falsy values( the only time a string will be empty is if there's nothing in the string ""........every string without a value with result to false.....numbers in faulty are always 0)
//BOOLEANS true or false
//
const isMarried = true;
// comparison operators < > <= >= ==(loose) === (strict)

console.log(5 == "5.0");
console.log(5 === "5");
let userspin = 1234;

let enteredpin = 1224;
console.log(userspin == enteredpin); //false

let balance = 10000;
let withdrawalAmount = 9000;
balance >= withdrawalAmount; //f

userspin === enteredpin && balance >= withdrawalAmount;

// logical operators and && or   not !
console.log(3 < 4 && 5 < 8 && 10 > 15); // t and t and f
console.log(5 == "5" && 4.5 >= 5.9999); // t and f == f
const myName="    jay"
console.log(Boolean(myName));
const value=0.0;
console.log(Boolean(value));
const transactionAmount =6700;
if (transactionAmount > 2500); {
    console.log("Your charges is 100");
    
    
}
// write a program that displays if a word has a vowel sounds(aeiou) in it and displays consonants if not
// const word ="CAT.toLowerCase"
// // includes logical or
// const scoreA=100;
// const scoreB=100;
// and else if ststement is for more than 2 choices you need to check
if(scoreA>scoreB){
    console.log("A Wins");
    
}
else if(scoreB>scoreA){
    console.log("B Wins");
    
}
else{
    console.log("It is a Draw");
    
}
// write a program that rates movies above 8 is excellent,above movie is good.above 5 is average,else is bad
const movieRating=6.5;
if (movieRating>=8) {
    console.log("Excellent Movie");  
}
else if (movieRating>=6){
    console.log("Good Movie");
}
else if(movieRating>=5){
    console.log("Average Movie");   
}
else{
    console.log("Bad Movie");  
}
// less than 18-young club
// 18-60-adult club
// above 60-old people club
const userAge=45;
if (usersAge>60) {
    console.log("Old peoples club");   
}
else if(userAge<18){
    console.log("yOUNG cLUB");
    
}
else{
    console.log("Adult Club");
    
}
const grade="a";
switch(grade){
    case "A":
    case "a":
        console.log("Excellent");
        break;
        case "B":
        case "b":
        console.log("Very Good");
        break;
        case "C":
        case "c":
        console.log("Good");
        break;
        case "D":
        case "d":
        console.log("Fair");
        break;
        case "E":
        case "e":
        console.log("Pass");
        break;
        case "A":
        case "a":
        console.log("Fail");
        
        
}

    




