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

console.log("using normal for loop");

for (let i = 0; i < myarr.length; i++) {
  if (myarr[i] % 2 == 0) {
    console.log("even number");
    console.log(myarr[i]);
  } else {
    console.log("odd numbers");
    console.log(myarr[i]);
  }
}
//forEach
console.log("using forEach");
myarr.forEach(function (element) {
  if (element % 2 == 0) {
    console.log("even number");
    console.log(element);
  } else {
    console.log("odd numbers");
    console.log(element);
  }
});

console.log("using for ... of");

for (let member of myarr) {
  console.log(member);
}

console.log("ABNers");
let ABNers = ["rushi", "anju", "namrata", "sagar", "siddhesh"];

for (let teamMember of ABNers) {
  //if (teamMember == "sagar") {
  console.log(teamMember);
  //}
}

//while loop 2 mins,

console.log("using while loop");

//for(let j=0;j<myarr.length;j++): convert into while loop
//while loop
var numarr = [30, 20, 23];
let k = 0;
while (k < numarr.length) {
  console.log("elementssssss " + numarr[k]); //logic
  k++;
}

//do....while: this loop will execute at least once even condition is false

console.log("do while ");
let text = "";
let p = 0;

do {
  text = "The number is " + p;
  console.log(text);
  p++;
} while (p < 10);

console.log("======================================");
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

//mymobile = 987878767;

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

//Switch case: if we want to execute different logic on the basis of different case/condition

let age = 20;

switch (age) {
  case 5:
    console.log("hi,you are kid");
    break;
  case 10:
    console.log("hi,you are YOUNGER");
    break;
  case 20:
    console.log("hi,you are AUDULT");
    var counts = 0;
    for (let i = 0; i <= 6; i++) {
      counts = counts + i;
      /*         0 + 0=0
                 0 + 1=1
                 1 + 2=3
                 3 + 3=6
                 6 + 4=10
                 10 + 5 = 15
                 15 + 6 =21


      */
    }
    console.log("count : " + counts);
    break;

  default:
    break;
}

let ag = 10;

switch (ag != null) {
  case ag < 10:
    console.log("hi,you are kid");
    break;
  case ag > 18:
    console.log("hi,you are YOUNGER");
    break;
  case ag >= 18:
    console.log("hi,you are AUDULT");
    break;

  default:
    console.log("this will execute if all cases are false");
    break;
}

let a1 = 10;
let b1 = 20;

switch (a1 + b1) {
  case 10:
    console.log("addition is 10");
    break;
  case 20:
    console.log("addition is 20");
    break;
  case 30:
    console.log("addition is 30");
    break;

  default:
    console.log("this will execute if all cases are false");
    break;
}

//4. prototype
//prototype is main object of javascript which is use to add properties and functions

// Create a Student class using prototype :
//for example

function Student() {
  this.firstName = "Vijay";
  this.gender = "M";
}
Student.prototype.lastName = "Nimkarde";
Student.prototype.age = 15;

var s = new Student();
Student.prototype.getAge = function getAge() {
  console.log("Stuent Age: " + s.age);
};
s.getAge();
Student.prototype.getName = function getName() {
  console.log("Student Name :" + s.firstName + " " + s.lastName);
};
s.getName();

//arrays-sort method
//sort string array
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();
console.log("Sorted Fruits : " + fruits);
//sort number array
let numberArr = [3, , 90, 20, 2, 6, 8, 7, 10, 100, 150, 120];

/*let sortedNumbers = numberArr.sort(function (a, b) {
  return a - b;
});*/

//another way
let sortedNumbers = numberArr.sort(compareFunction);

//asceding
function compareFunction(a, b) {
  return a - b;
}
//desceding
/*
function compareFunction(a, b) {
  return b-a;
}*/

console.log("Sorted numbers : " + sortedNumbers);

//set: A JavaScript Set is a collection of unique values.
//ref https://www.w3schools.com/js/js_object_sets.asp

//map
//https://www.w3schools.com/js/js_object_maps.asp

//setTimeout/setInterval/clearInterval
let abc = 10;
var myinterval = setTimeout(function () {
  alert("Hi Team: " + abc);
}, 5000);

//1000 ms = 1 sec

//another way

//let tempdfd = 10;
var test = function () {
  let c = 100 + 150;
  alert("Sum : " + c + "great!! business logic executed");
};

var myintervals = setTimeout(test, 5000);

var intrl = setInterval(function () {
  console.log("this code will executed every 2 seconds");
}, 2000);

setTimeout(function () {
  clearInterval(intrl);
}, 21000);

//closure
//example 1
function carIsRunning() {
  let state = "Running";
  function carState() {
    console.log(state);
  }
  return carState;
}
let runState = carIsRunning();
console.log(runState);
runState();

//example 2
function greeting(message) {
  return function (name) {
    return message + " " + name;
  };
}
let sayHi = greeting("Hi");
let sayHello = greeting("Hello");

console.log(sayHi);

console.log(sayHi("Rushikesh")); // Hi John
console.log(sayHello("Sagar")); // Hello John

//ref : https://www.javascripttutorial.net/javascript-closure/#:~:text=In%20JavaScript%2C%20a%20closure%20is,the%20lexical%20scoping%20works%20first.

//css selector
//1 ID selector
//example
document.getElementById("firstName").style.color = "red";

//jquery
// $("#firstName").css("color","red");

//2. Class Selector
document.getElementsByClassName("ABNHEAD")[0].style.color = "red";

//3 Name Selector
document.getElementsByName("lastName")[0].style.borderColor = "red";
document.getElementsByName("lastName")[0].style.backgroundColor = "yellow";

//4. TagName selector
document.getElementsByTagName("Label")[8].style.color = "blue";

//Task : using tagName selector apply color=Blue to all form elements on registration form
//use for loop
//practice other css properties show some examples
let tagObject = document.getElementsByTagName("Label");

for (let index = 0; index < tagObject.length; index++) {
  const element = tagObject[index];
  element.style.color = "blue";
}
//ES6 Features
/*
The let keyword = Done
The const keyword =Done
For/of : done
Map Objects : Done
Set Objects : Done

Arrow Functions
Classes
Promises

CallBack function
Default Parameters
Function Rest Parameter
String.includes()
String.startsWith()
String.endsWith()
Array.from()
Array keys()
Array find()
Array findIndex()
New Math Methods
New Number Properties
New Number Methods
New Global Methods
Object entries
JavaScript Modules
https://www.w3schools.com/js/js_es6.asp
*/

//arrow function
// ES5
function myFunName(x, y) {
  return x * y;
}

var myFunc = function (x, y) {
  return x * y;
};

//if single line code
const x = (x, y) => x * y; //()=anonymous function
x(10, 5);

//more lines
const z = (x, y) => {
  let sum = x + y;
  return sum;
};
//output50
//Promise
//if success
const myPromise = new Promise(function (success, error) {
  success("Classroom is open!!");
});

myPromise.then(function (value) {
  console.log(value);
});

//if erorr

const myPromises = new Promise(function (success, error) {
  error("Classroom is closed !!");
});
myPromises.catch();
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise

//Class

class Car {
  constructor(name, year) {
    //input variable
    //constructor is use to initialized the properties of the class-
    // to initialize the object of class
    this.carName = name; // local variable
    this.year = year;
  }
  // 10 function
  getCarName() {
    console.log("Car Name is " + this.carName);
  }
  getCarYear() {
    console.log("Year of " + this.carName + "is " + this.year);
  }
}

const myCar1 = new Car("Ford", 2014);

myCar1.getCarName();
myCar1.getCarYear();

const myCar2 = new Car("Audi", 2019);
myCar2.getCarName();
myCar2.getCarYear();

//Task : Create a employee object and define some variables and methods like in Car class
//getEmployeeSalary(), getEmployeeName(),getEmployeeMobileNumber()
//let employeeJson={firstName:"asdfsad", lastName:"asdfsadf",salary:8978978, mobileNo:9878767789,eeptName:"IT" };
//const employee = new Employee(employeeJson);

//onGoing project till Friday
//few other pages like aboutUs, services,
//login.html ,registration popup
/*
if(usernmae="sagar" && pass="sagar123"){
  location.href="home.html";
}else{
  alert("you are not authorized user");
}*/
//Home page
//View Profile -- Edit profile- set EmployeeObject={key=value}
//once user login redirect to home page.
