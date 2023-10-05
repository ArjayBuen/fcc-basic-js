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