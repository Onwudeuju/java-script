// ternary operators is more of less like an if else statement and the syntax is condition? first action: second action;
const myNumber=-50;
myNumber>0? console.log("Positive"): console.log("Negative");
// 

const digit=7;
digit% 2=== 0 ? console.log("even"): console.log("odd");
// mr Mario has a car or mr mario does not have a car
const hasACar=false;
const sentence =`Mr Mario ${hasACar ? "has" : "does not have"} a car`
console.log(sentence);
// declare a variable called is userloggedIn set it to either true or false
let isUserLoggedIn=true;
isUserLoggedIn? console.log("Welcome User") :console.log("Log out");
// using a TO tell a user if they eligble for a laon or not the loan
const balance=300;
const loanAmount=700;
isUserLoggedIn>=balance? console.log("eligible") :console.log("Not eligible");
//loanAmount <= balance*2
let savings=7000;
let transactionAmount=2000;
savings>transactionAmount? console.log("Successful"): console.log("Not Successful");
transactionAmount>0
? console.log(`credit alert of ${transactionAmount}`)
:console.log(`debit alert`);
savings +=transactionAmount;
console.log(savings);














