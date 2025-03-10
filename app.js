// STRINGS ARE CHARACTERS EMBEDDED IN A QUOTATION MARK EITHER A SINGLE QUOTE(') OR DOUBLE("")
// Spaces are also valid character
const firstName ="John"
const lastName = "Doe"
// STRING PROPERTIES INCLUDE length("This checks the number of character in a string"),concatenation which essentically means joining and to declare this with ("+")
console.log(firstName.length);
console.log(lastName.length);
const myPassword ="adaeze"
console.log(myPassword);
console.log(myPassword.length);
const fullName= firstName +  " " + lastName
console.log(fullName)
// log the length of the full name to the console
console.log(fullName.length);
// string methods are built in functions that acn be done on strings
const email="jjdoe@google.co.uk"
// toUpperCase this coverts all the alphabet string to uppercase....,toLowerCase............. for this to work you need to invoke using ()
console.log(email.toUpperCase());
// indexOf(returns the first postion of the first occurance),lastIndexOf,charAt( what is the charcter at a particular position declares the number of character javascript start from 0)
console.log(email.charAt(1));
console.log(email.indexOf("o"));
console.log(email.lastIndexOf("o"));
// To check a string you could use a startsWith(this used to check if a value is either true or false) endsWith(true or false as well essentially what the value ends with) inc
console.log(email.startsWith("jj"));
console.log(email.endsWith(".uk"));
console.log(email.includes("Doe".toLowerCase()));
console.log(email.toUpperCase().includes(".CO"));
// trim {removes white spaces} trimStart(removes spacing at the start of the value) trimEnd(removes spacing at the end )
const username = "      ade001     "
console.log(username.trim());
console.log(username.trimStart());
console.log(username.trimEnd());
// replace ("only replace the first occurance")  replaceAll(replace all)
// 01*****90
const myName ="jane doe"
console.log(myName.replace("e","*"));
console.log(myName.replaceAll("e","*"));
// extract portions of a string slice,substring,
console.log(myName.slice(0,3));
console.log(myName.substring(0,3));
// substr(where we start,num of characters)
console.log(myName.substr(0,2));
const accountNumber="1234567890"
console.log(accountNumber.replace(accountNumber.substr(2,6),"******"));
console.log(accountNumber.replace(accountNumber.slice(2,8),"******"));
const userName2 ="johnpaul";
console.log("welcome" + " " +userName2.toUpperCase);


// concatenation
const author="Jax Draxx"
const book="The Ghost"
const sentence = author + " wrote the book" + book;
console.log(sentence);
// template literals are used to format variables inside of a string
// ``
const sentence2=`${author} wrote the book ${book}`
console.log(sentence2);
const person = "Adam Sandler"
const movie= "Romance Scam"
const sentence3 = `${person.toUpperCase()} featured in the movie ${movie}`
console.log(sentence3);

































