var a;
a=7; // assignment operator(=) 
var b;
b=a;//assigning the value of a to b

var myFirstName="Rj"; //"Rj"->string literals
var myLastName="Neub";

var a=5; //  initialization
var b=10;
var c="I am a";
a = a + 1;
b = b + 5;
c = c + " String!";

// Variable declarations
var studlyCapVar;
var properCamelCase;
var titleCaseOver;

// Variable assignments
studlyCapVar = 10;
properCamelCase = "A String";
titleCaseOver = 9000;

let catName = "Oliver";
let catSound = "Meow!";

const FCC = "freeCodeCamp"; // Change this line
let fact = "is cool!"; // Change this line
fact = "is awesome!";
console.log(FCC, fact); // Change this line

// arithmetic computation
const sum = 10 + 10;
const difference = 45 - 33;
const product = 8 * 10;
const quotient = 66 / 33;

//increment operator ++
let myVar = 87;
myVar++;

//decrement operator --
let myVar1 = 11;
myVar1--;

//computing floating point numbers or floats
const myDecimal = 5.7;
const product2 = 2.0 * 2.5;
const quotient2 = 4.4 / 2.0;

// remainder operator %
const remainder = 11%3;

// Compound Assignment with Augmented Addition +=
let aa = 3;
let bb = 17;
let cc = 12;

aa += 12;
bb += 9;
cc += 7;

// Compound Assignment With Augmented Subtraction -=
let a2 = 11;
let b2= 9;
let c2 = 3;

a2 -= 6;
b2 -= 15;
c2 -= 1;

// Compound Assignment With Augmented Multiplication *=
let a3 = 5;
let b3 = 12;
let c3 = 4.6;

a3 *= 5;
b3 *= 3 ;
c3 *= 10;

// Compound Assignment With Augmented Division /=
let a4 = 48;
let b4 = 108;
let c4 = 33;

a4 /=  12;
b4 /= 4;
c4 /=  11;

const myStr = "I am a \"double quoted\" string inside \"double quotes\".";
const goodStr = 'Jake asks Finn, "Hey, let\'s go on an adventure?"'; 
//const badStr = 'Finn responds, "Let's go!"'; //this will throw an error

const linkStr = '<a href="http://www.example.com" target="_blank">Link</a>';
const escapeStr = "FirstLine\n\t\\SecondLine\nThirdLine"; 
const ourStr = "I come first. " + "I come second.";

let concatStr = "I come first. ";
concatStr += "I come second.";

let combineStr="This is the first sentence. ";
combineStr+="This is the second sentence."

const ourName = "freeCodeCamp";
const introStr = "Hello, our name is " + ourName + ", how are you?";

// Only change code below this line
const myName = "Rjay";
const nameStr = "My name is "+myName+" and I am well!";

const anAdjective = "awesome!";
let fccStr = "freeCodeCamp is ";
fccStr += anAdjective; //ourStr would have the value freeCodeCamp is awesome!

// Change code below this line
const someAdjective = "awesome";
let codingStr = "Learning to code is ";
codingStr+=someAdjective;

console.log("Alan Peter".length);
// The value 10 would be displayed in the console. 
// Note that the space character 
// between "Alan" and "Peter" is also counted.

let lastNameLength = 0;
const lastName = "Lovelace";

// Only change code below this line
lastNameLength = lastName.length;

const firstName = "Charles";
const firstLetter = firstName[0];//firstLetter would have a value of the string C.

// Setup
let firstLetterOfLastName = "";

// Only change code below this line
firstLetterOfLastName = lastName[0]; 

// Setup
let helloStr = "Jello World";
helloStr[0]="H";//this will not change the first letter
// Only change code below this line
helloStr = "Hello World";//only assigning new value would work
console.log(helloStr);

const herName = "Ada";
const secondLetterOfFirstName = herName[1];//secondLetterOfFirstName would have a value of the string d.

// Setup
const herlastName = "Lovelace";

// Only change code below this line
const thirdLetterOfLastName = herlastName[2]; // Change this line

const lastLetter = herName[herName.length - 1];//bracket notation contains 3-1=2
//lastLetter would have a value of the string a.

const fName = "Augusta";
const thirdToLastLetter = fName[fName.length - 3];
//thirdToLastLetter would have a value of the string s.

const secondToLastLetterOfLastName = lastName[lastName.length-2];

const myNoun = "dog";
const myAdjective = "big";
const myVerb = "ran";
const myAdverb = "quickly";

// Only change code below this line
const wordBlanks = "The "+myAdjective+" "+myNoun+" "+myVerb+" "+myAdverb+".";

const sandwich = ["peanut butter", "jelly", "bread"];

// Only change code below this line
const myArray = ["word",10];

const teams = [["Bulls", 23], ["White Sox", 45]];
//This is also called a multi-dimensional array.

// Only change code below this line
const playerArray = [["Curry",30]];

const array = [50, 60, 70];
console.log(array[0]);
const data = array[1];
//The console.log(array[0]) prints 50, and data has the value 60.

const myData=myArray[0];

const ourArray = [50, 40, 30];
ourArray[0] = 15;
//ourArray now has the value [15, 40, 30].

// Setup
const myyArray = [18, 64, 99];

// Only change code below this line
myyArray[0]=45;

const arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [[10, 11, 12], 13, 14]
  ];
  
  const subarray = arr[3];//the value [[10, 11, 12], 13, 14]
  const nestedSubarray = arr[3][0];//the value [10, 11, 12]
  const element = arr[3][0][1];// the value is 11

  const arr1 = [1, 2, 3];
arr1.push(4, 5);//arr1 now has the value [1, 2, 3, 4, 5]

const arr2 = ["Stimpson", "J", "cat"];
arr2.push(["happy", "joy"]);
// arr2 has the value ["Stimpson", "J", "cat", ["happy", "joy"]].

const threeArr = [1, 4, 6];
const oneDown = threeArr.pop();
console.log(oneDown);
console.log(threeArr);
//The first console.log will display the value 6, 
//and the second will display the value [1, 4].

const yourArray = ["Stimpson", "J", ["cat"]];
const removedFromOurArray = yourArray.shift();
// removedFromOurArray would have a value of the string Stimpson, 
// and ourArray would have ["J", ["cat"]].

const orArray = ["Stimpson", "J", "cat"];
orArray.shift();
orArray.unshift("Happy");
// After the shift, ourArray would have the value ["J", "cat"]. 
// After the unshift, ourArray would have the value ["Happy", "J", "cat"].

const myList = [["bread",10],["burger",10],["softdrinks",10],["pizza",10],["milktea",10]];

function reusableFunction(){
    console.log("Hi World");
  }
  reusableFunction();

  function functionWithArgs(param1,param2){
    console.log(param1+param2);
  }
  
  functionWithArgs(1,2);// 1+2=3
  functionWithArgs(7,9);//7+9=16
  
  function plusThree(num) {
    return num + 3;
  }
  
  const answer = plusThree(5);
  //answer has the value 8.

  function timesFive(num){
    return num * 5;
  }
  timesFive(5);//25
  timesFive(2);//10
  timesFive(0);//0

// Declare the myGlobal variable below this line
const myGlobal=10;

function fun1() {
  // Assign 5 to oopsGlobal here
  oopsGlobal=5; //automatically created as global variable even without let or const keyword
}

// Only change code above this line

function fun2() {
  let output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}

function myTest() {
    const loc = "foo";
    console.log(loc);
  }
  
  myTest();
//   console.log(loc); this will throw error

function myLocalScope() {
    // Only change code below this line
   let myVar;
    console.log('inside myLocalScope', myVar);
  }
  myLocalScope();
  console.log('outside myLocalScope', myVar);

// Setup
const outerWear = "T-Shirt";

function myOutfit() {
  // Only change code below this line
 const outerWear="sweater";
  // Only change code above this line
  return outerWear;
}

console.log(myOutfit());//output sweater 

// Setup
let summ = 0;

function addThree() {
  summ = summ + 3;
}

// Only change code below this line
function addFive(){
  summ+=5;
}
console.log(addThree());//value returned is undefined because there is no return statement in the function
addFive();

// Setup
let processed = 0;

function processArg(num) {
  return (num + 3) / 5;
}

// Only change code below this line
processed=processArg(7);

function nextInLine(arr, item) {
    // Only change code below this line
    
    arr.push(item);
    
    return arr.shift();
    // Only change code above this line
  }
  
  // Setup
  let testArr = [1, 2, 3, 4, 5];
  
  // Display code
  console.log("Before: " + JSON.stringify(testArr));
  console.log(nextInLine(testArr, 6));
  console.log("After: " + JSON.stringify(testArr));

  function welcomeToBooleans() {
    // Only change code below this line
  
    return true; // Change this line
  
    // Only change code above this line
  }
  
  function test (myCondition) {
    if (myCondition) {
      return "It was true";
    }
    return "It was false";
  }
  
  test(true);
  test(false);
  //test(true) returns the string It was true, 
  //and test(false) returns the string It was false.

// Setup
function testEqual(val) {
    if (val==12) { // Change this line
      return "Equal";
    }
    return "Not Equal";
  }
  
  testEqual(10);

  // Setup
function testStrict(val) {
    if (val===7) { // Change this line
      return "Equal";
    }
    return "Not Equal";
  }
  
  testStrict(10);

// Setup
function compareEquality(a, b) {
    if (a === b) { // Change this line
      return "Equal";
    }
    return "Not Equal";
  }
  
  compareEquality(10, "10");

// Setup
function testNotEqual(val) {
    if (val!=99) { // Change this line
      return "Not Equal";
    }
    return "Equal";
  }
  
  testNotEqual(10);

  // Setup
function testStrictNotEqual(val) {
    if (val!==17) { // Change this line
      return "Not Equal";
    }
    return "Equal";
  }
  
  testStrictNotEqual(10);

  function testGreaterThan(val) {
    if (val>100) {  // Change this line
      return "Over 100";
    }
  
    if (val>10) {  // Change this line
      return "Over 10";
    }
  
    return "10 or Under";
  }
  
  testGreaterThan(10);

  function testGreaterOrEqual(val) {
    if (val>=20) {  // Change this line
      return "20 or Over";
    }
  
    if (val>=10) {  // Change this line
      return "10 or Over";
    }
  
    return "Less than 10";
  }
  
  testGreaterOrEqual(10);

  function testLessThan(val) {
    if (val<25) {  // Change this line
      return "Under 25";
    }
  
    if (val<55) {  // Change this line
      return "Under 55";
    }
  
    return "55 or Over";
  }
  
  testLessThan(10);

  function testLessOrEqual(val) {
    if (val<=12) {  // Change this line
      return "Smaller Than or Equal to 12";
    }
  
    if (val<=24) {  // Change this line
      return "Smaller Than or Equal to 24";
    }
  
    return "More Than 24";
  }
  
  testLessOrEqual(10);

  function testLogicalAnd(val) {
    // Only change code below this line
  
    if (val<=50 && val>=25) {
        return "Yes"; 
    }
    // Only change code above this line
    return "No";
  }
  
  testLogicalAnd(10);

  function testLogicalOr(val) {
    // Only change code below this line
  
    if (val<10||val>20) {
      return "Outside";
    }
    // Only change code above this line
    return "Inside";
  }
  
  testLogicalOr(15);

  function testElse(val) {
    let result = "";
    // Only change code below this line
  
    if (val > 5) {
      result = "Bigger than 5";
    }
    else{
      result = "5 or Smaller";
    }
  
    // Only change code above this line
    return result;
  }
  
  testElse(4);

  function testElseIf(val) {
    if (val > 10) {
      return "Greater than 10";
    }
  
    else if (val < 5) {
      return "Smaller than 5";
    }
   else{
   return "Between 5 and 10";
   }
    
  }
  
  testElseIf(7);

  function orderMyLogic(val) {
    if (val < 5) {
      return "Less than 5";
    }
    else if (val < 10) {
      return "Less than 10";
    }  else {
      return "Greater than or equal to 10";
    }
  }
  
  orderMyLogic(7);
  
  function testSize(num) {
    // Only change code below this line
  if(num<5){
    return "Tiny";
  } else if(num<10){
    return "Small";
  }else if(num<15){
    return "Medium";
  }else if(num<20){
    return "Large";
  }else if(num=20){
    return "Huge";
  } else{
   return "Change Me";
  }
    // Only change code above this line
  }
  testSize(7);

const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {
  // Only change code below this line
 if(strokes===1){
   return names[0];
 }else if(strokes<=par-2){
   return names[1];
 }else if(strokes===par-1){
   return names[2];
 }else if(strokes===par){
   return names[3];
 }else if(strokes===par+1){
   return names[4];
 }else if(strokes===par+2){
   return names[5];
 }else if(strokes>=par+2){
   return names[6];
 }else{
   return "Change Me";
 }
  // Only change code above this line
}

golfScore(5, 4);

function caseInSwitch(val) {
    let answer = "";
    // Only change code below this line
    switch(val){
      case 1:
      answer="alpha";
      break;
      case 2:
      answer="beta";
      break;
      case 3:
      answer="gamma";
      break;
      case 4:
      answer="delta";
      break;
    }
    // Only change code above this line
    return answer;
  }
  
  caseInSwitch(1);

  function switchOfStuff(val) {
    let answer = "";
    // Only change code below this line
    switch (val){
      case "a":
      answer="apple";
      break;
      case "b":
      answer="bird";
      break;
      case "c":
      answer="cat";
      break;
      default:
      answer="stuff";
      break;
    }
    // Only change code above this line
    return answer;
  }

  function sequentialSizes(val) {
    let answer = "";
    // Only change code below this line
    switch(val){
      case 1:
      case 2:
      case 3:
      answer="Low";
      break;
      case 4:
      case 5:
      case 6:
      answer="Mid";
      break;
      case 7:
      case 8:
      case 9:
      answer="High";
      break;
    }
// Only change code above this line
return answer;
}
sequentialSizes(1);

function chainToSwitch(val) {
    let answer = "";
    // Only change code below this line
   
   switch(val){
     case "bob":
     answer="Marley";
     break;
     case 42:
     answer="The Answer";
     break;
     case 1:
     answer="There is no #1";
     break;
     case 99:
     answer="Missed me by this much!";
     break;
     case 7:
     answer="Ate Nine";
     break;
   }
    // Only change code above this line
    return answer;
  }
  
  chainToSwitch(7);

  function isLess(a, b) {
    // Only change code below this line
    return a<=b;
    
    // Only change code above this line
  }
  
  isLess(10, 15);

  // Setup
function abTest(a, b) {
    // Only change code below this line
  
  if(a<0||b<0){
   return undefined;
  }
  
    // Only change code above this line
  
    return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
  }
  
  abTest(2,2);

  let count = 0;

  function cc(card) {
    // Only change code below this line
  if(card==2||card==3||card==4||card==5||card==6){
    count++;
    
  }
  else if(card==7||card==8||card==9){
    count+=0;
    
  }
  else if(card==10||card=='J'||card=='Q'||card=='K'||card=='A'){
   count--;
   
  }
  
  if(count<0){
     return count+" Hold";
  }
  else if(count===0){
    return count+" Hold";
  }
  else if(count>0){
    return count+" Bet"; 
  }
    
    // Only change code above this line
  }
  
  cc(2); cc(3); cc(7); cc('K'); cc('A');

  const myDog = {
    // Only change code below this line
  name: "sky",
  legs: 4,
  tails:1,
  friends:["blue","browny"]
  
    // Only change code above this line
  };

  // Setup
const wearableObj = {
    "hat": "ballcap",
    "shirt": "jersey",
    "shoes": "cleats"
  };
  
  // Only change code below this line
  const hatValue = wearableObj.hat;      // Change this line
  const shirtValue = wearableObj.shirt;    // Change this line

  // Setup
const eatableObj = {
    "an entree": "hamburger",
    "my side": "veggies",
    "the drink": "water"
  };
  
  // Only change code below this line
  const entreeValue = eatableObj["an entree"];   // Change this line
  const drinkValue = eatableObj["the drink"];    // Change this line

  // Setup
const testObj = {
    12: "Namath",
    16: "Montana",
    19: "Unitas"
  };
  
  // Only change code below this line
  const playerNumber = 16;  // Change this line
  const player = testObj[playerNumber];   // Change this line

  // Setup
const myyDog = {
    "name": "Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"]
  };
  
  // Only change code below this line
  myyDog.name="Happy Coder";

  const myyyDog = {
    "name": "Happy Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"]
  };
  
  myyyDog.bark="woof";

  // Setup
const mDog = {
    "name": "Happy Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"],
    "bark": "woof"
  };
  
  // Only change code below this line
  delete mDog.tails;

  // Setup
function phoneticLookup(val) {
    let result = "";
  
    // Only change code below this line
    
    const lookup={
      "alpha": "Adams",
      "bravo": "Boston",
      "charlie": "Chicago",
      "delta": "Denver",
      "echo": "Easy",
      "foxtrot": "Frank"
    };
    result=lookup[val];
    // switch(val) {
    //   case "alpha":
    //     result = "Adams";
    //     break;
    //   case "bravo":
    //     result = "Boston";
    //     break;
    //   case "charlie":
    //     result = "Chicago";
    //     break;
    //   case "delta":
    //     result = "Denver";
    //     break;
    //   case "echo":
    //     result = "Easy";
    //     break;
    //   case "foxtrot":
    //     result = "Frank";
    // }
  
    // Only change code above this line
    return result;
  }
  
  phoneticLookup("charlie");

  function checkObj(obj, checkProp) {
    // Only change code below this line
    if(obj.hasOwnProperty(checkProp)){
      return obj[checkProp];
    }else{
      return "Not Found";
    }
    
    // Only change code above this line
  }

  const myMusic = [
    {
      "artist": "Billy Joel",
      "title": "Piano Man",
      "release_year": 1973,
      "formats": [
        "CD",
        "8T",
        "LP"
      ],
      "gold": true
    },
    {
      "artist": "Bruno Mars",
      "title": "Gorilla",
      "release_year": 2015,
      "formats": [
        "CD",
        "8T",
        "LP"
      ]
      
    }
  ];
  
  const myStorage = {
    "car": {
      "inside": {
        "glove box": "maps",
        "passenger seat": "crumbs"
       },
      "outside": {
        "trunk": "jack"
      }
    }
  };
  
  const gloveBoxContents = myStorage.car.inside["glove box"];

  const myPlants = [
    {
      type: "flowers",
      list: [
        "rose",
        "tulip",
        "dandelion"
      ]
    },
    {
      type: "trees",
      list: [
        "fir",
        "pine",
        "birch"
      ]
    }
  ];
  
  const secondTree = myPlants[1].list[1];
  
  // Setup
const recordCollection = {
    2548: {
      albumTitle: 'Slippery When Wet',
      artist: 'Bon Jovi',
      tracks: ['Let It Rock', 'You Give Love a Bad Name']
    },
    2468: {
      albumTitle: '1999',
      artist: 'Prince',
      tracks: ['1999', 'Little Red Corvette']
    },
    1245: {
      artist: 'Robert Palmer',
      tracks: []
    },
    5439: {
      albumTitle: 'ABBA Gold'
    }
  };
  
  // Only change code below this line
  function updateRecords(records, id, prop, value) {
    if (value === "") {
      delete records[id][prop];
    } else if (prop !== "tracks" && value !== "") {
      records[id][prop] = value;
    } else if (prop === "tracks" && value !== "") {
      if (records[id].hasOwnProperty("tracks") === false) {
        records[id][prop] = [];
      }
      records[id][prop].push(value);
    }
    return records;
  }
  
  updateRecords(recordCollection, 5439, 'artist', 'ABBA');

  const ourArray = [];
  let o = 0;
  
  while (o < 5) {
    ourArray.push(i);
    o++;
  } 

// Setup
const thisArray = [];

// Only change code below this line
let i=5;
while(i!=-1){ //(i>=0)
 thisArray.push(i);
 i--;
}

const ourArray = [];

for (let i = 0; i < 5; i++) {
  ourArray.push(i);
}
//ourArray will now have the value [0, 1, 2, 3, 4].

const miArray = [];

// Only change code below this line
for(let i=1;i<=5;i++){
  miArray.push(i);//[1,2,3,4,5]
}

const ourArray = [];

for (let i = 0; i < 10; i += 2) {
  ourArray.push(i);
}
//ourArray will now contain [0, 2, 4, 6, 8]

// Setup
const oddNumArray = [];

// Only change code below this line
for(let i=1;i<10;i+=2){
  oddNumArray.push(i);//[1,3,5,7,9]
}


const ourArray = [];

for (let i = 10; i > 0; i -= 2) {
  ourArray.push(i);
}//ourArray will now contain [10, 8, 6, 4, 2]

// Setup
const oddArray = [];

// Only change code below this line
for(let i=9;i>0;i-=2){
  oddArray.push(i);//[9,7,5,3,1]
}

const arrr = [10, 9, 8, 7, 6];

for (let i = 0; i < arrr.length; i++) {
   console.log(arrr[i]);//prints out all inside arrr
}

// Setup
const myArr = [2, 3, 4, 5, 6];

// Only change code below this line
let total=0;
for(let i=0;i<myArr.length;i++){
  total+=myArr[i];//2+3+4+5+6=20
}


const arrray = [
    [1, 2], [3, 4], [5, 6]
  ];
  
  for (let i = 0; i < arrray.length; i++) {
    for (let j = 0; j < arrray[i].length; j++) {
      console.log(arrray[i][j]);//prints out all inside the array
    }
  }

  function multiplyAll(arr) {
    let product = 1;
    // Only change code below this line
   for(let i=0; i<arr.length; i++){
     for(let j=0; j<arr[i].length; j++){
       product*=arr[i][j];
     }
   }
    // Only change code above this line
    return product;
  }
  
  multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);
  

  // Setup
const myArrray = [];
let x = 10;

// Only change code below this line
 do {
  myArrray.push(i);
  x++;
}while (i < 5)


function multiply(arr, n) {
    if (n <= 0) {
      return 1;
    } else {
      return multiply(arr, n - 1) * arr[n - 1];
    }
  }

  function sum(arr, n) {
    // Only change code below this line
  if(n<=0){
    return 0;
  }else {
    return sum(arr,n-1)+arr[n-1];
  }
    // Only change code above this line
  }


  // Setup
const contacts = [
    {
      firstName: "Akira",
      lastName: "Laine",
      number: "0543236543",
      likes: ["Pizza", "Coding", "Brownie Points"],
    },
    {
      firstName: "Harry",
      lastName: "Potter",
      number: "0994372684",
      likes: ["Hogwarts", "Magic", "Hagrid"],
    },
    {
      firstName: "Sherlock",
      lastName: "Holmes",
      number: "0487345643",
      likes: ["Intriguing Cases", "Violin"],
    },
    {
      firstName: "Kristian",
      lastName: "Vos",
      number: "unknown",
      likes: ["JavaScript", "Gaming", "Foxes"],
    },
  ];
  
  function lookUpProfile(name, prop) {
    // Only change code below this line
  for (let x = 0; x < contacts.length; x++) {
      if (contacts[x].firstName === name) {
        if (contacts[x].hasOwnProperty(prop)) {
          return contacts[x][prop];
        } else {
          return "No such property";
        }
      }
    }
    return "No such contact";
    // Only change code above this line
  }
  
  lookUpProfile("Akira", "likes");


  function randomFraction() {

    // Only change code below this line
  
    return Math.random();
  
    // Only change code above this line
  }

  function randomWholeNum() {
    return Math.floor(Math.random()*10);
    //will return whole number ranging from 0-9
  }

  function randomRange(myMin, myMax) {
  
    return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
  }//will return whole number that's greater than or equal to myMin and less than or equal to myMax.


  function convertToInteger(str) {
    return parseInt(str);
    }
    
    convertToInteger("56");//will become a number

    function convertToInteger(str) {
        return parseInt(str,2)
        }
        
        convertToInteger("10011");//16+0+0+2+1=19


function findGreater(a, b) {
    return a > b ? "a is greater" : "b is greater or equal";
    }
    
    function checkEqual(a, b) {
    return a===b? "Equal":"Not Equal";
    }
    
    checkEqual(1, 2);
   
    function findGreaterOrEqual(a, b) {
        return (a === b) ? "a and b are equal" 
          : (a > b) ? "a is greater" 
          : "b is greater";
      }
    
    function checkSign(num) {
    return (num>0) ? "positive"
    : (num===0) ? "zero"
    :  "negative"
    }
    
    checkSign(10);


function countup(n) {
    if (n < 1) {
        return [];
    } else {
        const countArray = countup(n - 1);
        countArray.push(n);
        return countArray;
    }
    }
    console.log(countup(5));//[1,2,3,4,5]
    
    // Only change code below this line
    function countdown(n){
        if(n<1){
        return [];
        }else{
        const countArray=countdown(n - 1);
        countArray.unshift(n);
        
        return countArray;
        }
    }
    // Only change code above this line

    function rangeOfNumbers(startNum, endNum) {
        if (startNum>endNum  ) {
          return [];
        } else {
          const numbers = rangeOfNumbers(startNum, endNum - 1);
          numbers.push(endNum);
          return numbers;
        }
        
      };