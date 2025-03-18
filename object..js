// object this are unstructed datatype  gives us oppurtunity to describe a variable and its denoted with a curly bracket{}...... the syntax is key and value pairs  {key:value,key2:value2}
const person={
    firstName:"John",
    lastName:"Doe",
    age:45,
    isMarried:true,
    friends: ["Jane","Peter","Mark"],
    job:"Teacher",
    location:{
        street:"Vineyard",
        area:"Lekki",
        city:"Lagos",
        zip:100111,
        geoLocation:{
            lat:23.46,
            lng:45.78,
        },
    },
};
// How to get properties from an object you could either use a dot notatation "objName.propertyName" while a bracket notation is denoted with objname['propertyName]
// dot notation
console.log(person.age);
console.log(person.lastName);
console.log(person.age);
// bracket notation
console.log(person["friends"]);
console.log(person["isMarried"]);
// console this "I live at Vineyard estate,lekki lagos"
console.log(`i live at ${person.location.street} estate,${person["location"]["area"]}`);
// Adding  a new properties to an object
person.workplace="Applo Schools";
console.log(person);
// add a new property to the location object in the person object called landmark set to city mall
person.location.landmark="CityMall"
console.log(person);
// removing propertiey is bascially delete....
delete person.job;
console.log(person);
// object Methods developers write the function by their self.....Inside of an object decleration you could declare with "this"(Refers to the object itself)
// that user welcome username or log in to continue
// inside of the object we use this
const user={
    username:"ade001",
    email:"ade@google.com",
    profilePic:"image",
    age:25,
    inLoggedIn: false,
    isVerified:true,
    posts:["Nigeria just get as e be", "I love Food"],
    welcomeUser:function(){
        return this.isLoggedIn ?`welcome ${this.username}`:"Log in to Continue";
    },
    // write an object method method verifyUser if user is verified return Verfication successful else verify your  account
    verifyUser:function(){
        return this.isVerified ?`verfication successful` :`Verify Your Account`;

    },
     
    
};
 console.log(user.welcomeUser());
  console.log(user.verifyUser());
  const book={
        title:"ade is a boy",
        author:"bisi",
        yearPublished:2001,
        ratings:4,
        similarAuthors:["Bisi", "bisi","Myk"],
        price:2300,
        genre:"comedy",
        description:function(){
            return `the book  ${this.title} cost $${this.price} and its a ${this.genre} movie`;
        },
        recommendBook:function(){
            return this.ratings > 3.5 ? `This book is recommended` : `Not recommended`;
        }
    };
    console.log(book.description());
    console.log(book.recommendBook());
    // Object.keys,Object.values,Object,entries(containg the key and value) : All this are all brought out in an array format....
    const transaction = {
      amount: 4000,
      date: "16/03/2025",
      charges:25,
      refNum:"tranx-1257662673763",
    };
    console.log(Object.keys(transaction));
    console.log(Object.values(transaction));
    console.log(Object.entries(transaction));
    // 
    const match={
        teamA : "Wolfsburg",
        teamB : "Lecce",
        teamAScore: 3,
        teamBScore:5,
        duratation:96,
        corners: 12,
        numOfSubsUsed:7,
        fouls:14,
        stadium:"Wembley",
        weather:"Snowy",
          winner:function(){
            if(this.teamAScore > this.teamBScore){
                return `${this.teamA} won with a score of ${this.teamAScore}`;
            }
            else if(this.teamAScore < this.teamBScore){
                return `${this.teamB}  won with a score of ${this.teamBScore}`;
            }
            else `its a draw`;
        
            
          },
          overviewOfMatch:function(){
            return `The match between  ${this.teamA} and ${this.teamB} was played at ${this.stadium} in a ${this.weather} condition`
          }
        
        
    };
    console.log(match.winner());
    console.log(match.overviewOfMatch());
    // object destructing to pick more than one properties easily ata time instaed of the dot notation
    const{teama,fouls,stadium,corners}=match;
    console.log(fouls,stadium,corners);
    const property={
        name:"Exquisite Villa",
        price:"2.3M/year",
        bedroom:7,
        bathroom:10,
        cautionFee:5000,
        legalFee:4000,
        facilities:["pool","sauna","theatre","gym"],
        location:{
            area:"Gbagada",
            city:"Lagos",
            num:45,
            street:"Charly Boy",
            geo:{
                lat:100.27,
                lng:45.78,
            }
        },

    };
    const{name,rent,location:{street,city,geo:{lng}}}=property
    console.log(name);
    // object destructing
    const product={
        price:9.99,
        discount:7.17,
    };
    const{price,discount}=product;
    let newPrice=price-(dispatchEvent/100 * price);
    console.log(newPrice.toFixed(2));
    
    



    


    
    
  


    
    
    
    
    

 
 













 
