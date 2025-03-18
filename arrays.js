// Array are denoted by a square bracket[] and , to differentaiate each like this[element1, element2,element3]
// empty array[] are falsly values
// array ususally contains data types
const students = ["David","Quadri","Isaac","Johnpaul","uju","uju","Samuel"];
// array properties such as length, this checks the length of the value
console.log(students);
console.log(students.length);
// getting elements from an array based on its postion
console.log(students[0]);
console.log(students[2]);
// // change elements in an array
students[0] = "Azeez";
console.log(students);
students[3] = "Johnny";
console.log(students);

// This gets the last number with a -1
students[students.length - 1] = "John Doe";
console.log(students);
// // array methods adds and removes elements from an array(front or back) and the work like LIFO and FIFO and with javascript this is denotated by "PUSH(Adds a new elements at the back" while unshift adds the the front
students.push("Micheal");
students.push("Juwon");
students.unshift("Uthman");
console.log(students);

// // pop(removes from the back) and shift(removes from the front)
students.pop();
students.shift();
console.log(students);
// includes
console.log(students.includes("David"));
// indexOf(first occurance of a search in  the string), lastIndexOf(Last occurance of the text in a string)
console.log(students);
console.log(students.indexOf("uju"));
console.log(students.lastIndexOf("uju"));
// shows the elements at a position in a string
console.log(students.at(2));
// extraction portions an array slice(where it start and where it end but "(end value isnt included")
console.log(students.slice(0, 3));
console.log(students.slice(4, 7));
// methods to convert array to strings are join, toString
// For join you could specify any seperator you wnat such as @
console.log(students.join("@"));
// with a string it will always be with a cooma you cant specify....Its always going to be comma
console.log(students.toString());
// // iterator methods this is bascially going over each element
// // Higher order mwthods or function bascially nedds another function as paramter to function with a callback function
// // forEach,map,find,filter,some,every,reduce
// // ForEach this executes a function for every element in an array
students.forEach((student) => {
  console.log(student.toUpperCase());
});
// output the first letter of every student name in the students array
students.forEach((student) => {
  console.log(student.charAt(0));
});
// //  Map function Create a new array with the result of the functionn
const smallCaseStudents = students.map((student) => {
  return student.toLocaleLowerCase();
});
console.log(smallCaseStudents);
// Filter this creates a new array with elements that pass a search condition.....find everything and bring in an arraty
const myNums=[3, 5, 6, 8, 10, 1, 4, 2];
const graterThan5 =myNums.filter((num) => {
 return num > 5;
});
console.log(graterThan5);

const evenNum= myNums.filter((num)=> num % 2 === 0);
console.log(evenNum);

const odd= myNums.filter((num)=> num % 2 !==0);
console.log(odd);
const lengthGreaterthan6 = students.filter((student) => {
  return student.length > 6;
});
console.log(lengthGreaterthan6);
// Finds it returns the first element that passes a test or a search condition
const findgraterthan6=myNums.find((num)=> num >5);
console.log(findgraterthan6);
const chars= students.find((student)=>
{
    return student.length == 5;
});
console.log(chars);
// // some this returns true if at least one of every element passes a test just like the Or operatoe
const ifSomeGreater5=myNums.some((num)=> {
    return num > 5;
});
console.log(ifSomeGreater5);
// // every returns true if all element passes a test 
const ifEveryGreater5 = myNums.every((num) => {
  return num > 5;
});
console.log(ifEveryGreater5);
// // reverse,sort,concat,reduce
const carBrands=["Toyota","Rollsroyce","Ferrari","Tesla","BMW"]
console.log(carBrands);
  // reverse moves things backwards mutate
 console.log(carBrands.reverse());
console.log(carBrands.sort());
 // SORT sort things alphabetically a-z
console.log(carBrands.sort().reverse());
 // This sorts them backwards cause thers a reverse z-a
 // sorting numbers are used to sort numbers from smallest to large as well as high to low.....for sorting numbers you cant just use sort cause it tend to sort just the first digit alphabetically
const prices=[200,4000,650,100,3500]
console.log(prices.sort());
console.log(prices.sort((a,b)=> a - b));    
 // From smallest to largesr
console.log(prices.sort((a, b) => b - a));
 // From highest to lowest
 // reduce bascially reduces every element in an array to a single value with two parameters with cb function start point
const totalPrice=prices.reduce((acc,curr)=>{
    return acc + curr;
},5);
 // That 5 adds more of 5
console.log(totalPrice);
 // concat 
const africanCountries = ["Togo", "Mauritius"];
const asianCountries=["Singapore","Japen","South Korea"];
const holidayLocations=africanCountries.concat(asianCountries);
console.log(holidayLocations);

 // split method on a string seperste things from each other
const fruit="banana";
console.log(fruit.split(""));
 // This splits them bascially seperate
console.log(fruit.split("a"));
// splits "a" from banana

// Write a function that reverses the letter in a word cat--tac gel-leg
const reverseWord=(word)=> {
    return word.split("").reverse().join("");
};
console.log(reverseWord("cat"));
console.log(reverseWord("gel"));
// // // palindrome are words that are spelt the same such as madam,level,tat,noon,pap,eye
// // function ispalindrome(word) {
// //   return word.toLowercase() === word.split("").reverse().join("").toLowercase();   
// // }
// console.log(ispalindrome("Madam"));
// SET this passes a unique value in an array
const users=["John","Dave","Nate","John","Dave"];
console.log(new Set(users));























