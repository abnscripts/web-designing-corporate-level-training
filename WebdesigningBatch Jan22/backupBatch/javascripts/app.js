function showMessage() {
  console.log("hi There");
}
showMessage();

//array

let myStrArr = ["vijay", "rushi", "Sagar", "Akash", "Namrata"];
console.log("length of myarray: " + myStrArr.length);
for (let i = 0; i < myStrArr.length; i++) {
  if (myStrArr[i] == "Sagar") {
    //condition
    console.log(i + "th element value is => " + myStrArr[i]);
  } else {
    console.log(i + "th element value is => " + myStrArr[i]);
  }
}

let ages = [20, 5, 10, 25, 80, 18, 40, 12, 13, 30, 7, 8]; //0-11

//print ages greater than 18 : condition: age >= 18

// show msg in console like  20 = he/she is adult;

//else 5 = he/she is a kid

for (let i = 0; i < ages.length; i++) {
  if (ages[i] >= 18) {
    console.log(ages[i] + " = he/she is adult");
  } else if (ages[i] >= 10 && ages[i] < 18) {
    //10-18
    console.log(ages[i] + " = he/she is younger");
  } else {
    console.log(ages[i] + " = he/she is a kid");
  }
}
//arithmetic operators

let num1 = 100;
let num2 = 50;

let addition = num1 + num2;

console.log("Hi there " + "Welcome to abnscripts..!!");
console.log("Addition : " + (num1 + num2));
console.log("Sum of numbers : " + addition);
console.log("Subtraction " + (num1 - num2));
console.log("Multiplication " + num1 * num2);
console.log("Division " + num1 / num2);

//logical operators
//equal to  =  called as assingment operators
//Less Than : <
//less than equal  :  <=
//greater than >
//greator than equal to  : >=
// equal equals to  ==

//let num3=300;//assignment operator example

if ((num3 = 300)) {
  // alert("success");
} else {
  alert("wrong");
}

let markss;

if (markss) {
  //alert("success marks");
}

markss = 100;

if (markss) {
  // handle null pointer exception in javascripts
  // alert("success marks");
}

let abcd = undefined;

if (abcd) {
  //alert("abcd is haviing some value");
} else {
  //alert("abcd is undefined ");
}

//===========================
//common function for all events

function test(abcd) {
  alert("this is a " + abcd);
}
function test1(mobileNo) {
  if (mobileNo.length < 10) {
    console.log("Please enter 10 digit mobile number"); // validations
  } else {
    alert("You are good...!!");
  }
}

let myarr = [10, 23, 30, 11, 40, 50, 60, 7, 5, 3, 67];
for (let i = 0; i < myarr.length; i++) {
  if (myarr[i] % 2 == 0) {
    console.log("even number");
    console.log(myarr[i]);
  } else {
    console.log("odd numbers");
    console.log(myarr[i]);
  }
}
//difference var, let , const
/*
  
Var: A variable declared with var is having global scope inside the script file/html file

let : is a block level element
 
const : we can not change the value of constant variable

*/

//console.clear();

var fan = "Orient";
let isSwitchIsOn; //declaration defines the scope of variable
isSwitchIsOn = true; //initialization
const mymobile = 988777776666;
//var a=10;
function rotate() {
  var isSwitchIsOn; //let/var declaration inside the function
  //isSwitchIsOn = true; //initialization
  if (isSwitchIsOn) {
    console.log(fan + " Fan is rotating");
  }
  isSwitchIsOn = false;
}

rotate();

mymobile = 987878767;

console.log("is switch is on ? middle of any code. " + isSwitchIsOn);
function stop() {
  console.log("is switch is on ? inside stop()" + isSwitchIsOn);
  isSwitchIsOn = true;
  if (10 > 5) {
    var lastNm = "Nimkarde"; //try with let
    console.log("inside if condition value of lastNm variable :" + lastNm);
  }
  console.log(
    " outside the above if condition value of lastNm variable :" + lastNm
  );
}
stop();
console.log("is switch is on? outside stop() " + isSwitchIsOn);
console.log(fan);

//===========================

if (true) {
  var myname = "vijay";
  console.log("inside : my name is " + myname);
}
console.log("outside : my name is " + myname);
