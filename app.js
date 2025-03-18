// Math Object has properties such as sqrt,pow,round,ceil,floor,trunc,random
console.log(Math.sqrt(25));
console.log(Math.pow(10,2));
console.log(10**2);
// 
console.log(Math.round(1.09));

console.log(Math.ceil(2.05)); 
console.log(Math.floor(3.9));
console.log(Math.trunc(11.99));
console.log(Math.random());
console.log(Math.trunc(Math.random() * 11));
//  how to get from point 1-10
console.log(Math.trunc(Math.random()*10 + 1));
// raffle draw
const customers=["Kelvin","John","Khaliod","David"]
const randomWinner=()=>{
    let randomNumber=Math.floor(Math.random()*customers.length);
    return customers[randomNumber];
    
    
};
console.log(randomWinner());



















