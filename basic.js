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