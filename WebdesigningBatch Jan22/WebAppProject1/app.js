function showLoginPopup() {
  //usecases
  //1. show login design on home
  //2. hide login design on load
  //3. create a javascript function
  //4. show login form on click of login link
  //5. add css to place it in center
  //6. close the login popup on X button
  //7. write a function close the login popup

  console.log("showLoginPopup called");
  document.getElementById("login").style.display = "block";
}

function closeLoginPopup() {
  console.log("closed the login popup");
  document.getElementById("login").style.display = "none";
}

function showRegPopup() {
  console.log("showRegPopup called");
  document.getElementById("register").style.display = "block";
}

function closeRegPopup() {
  console.log("closed the Reg popup");
  document.getElementById("register").style.display = "none";
}

//single line comment

/*
Mutiline comment
*/

//Datatypes

//Basic Datatypes

//1.Number
let length = 16;
//2.String
let lastName = "Johnson";

//3.Object
let x = {
  firstName: "John",
  lastName: "Doe",
};

//4.boolean
let isVisible = true;

//5.Date
let today = new Date();

//6. Array
let ages = [8, 30, 40, 15, 2, 3, 9, 5, 1, 60, 70];
//other datatypes: bigint, null, undefined, and symbol

console.log("Type of lastName : " + typeof lastName);

console.log("Type of isVisible : " + typeof isVisible);

console.log("Type of ages : " + typeof ages);

if (typeof isVisible == "boolean") {
  console.log(" this is boolean variable");
} else {
  console.log("it not a boolean variable");
}

if (typeof lastName == "string") {
  console.log(" this is string variable");
} else {
  console.log("it not a striing variable");
}
//logical operators

/*
  1. AND => &&
  2. OR => ||
  3. NOT => !
  4. equal equals to  ==
  5 !=
  6 <
  7.<=
  8>
  9 >=
 10 === : if you want to check value as well as type of value then use this
 e.g

  var  a ="10";

  if(a===10) this will be 


*/

var a = "100";

if (a == 100) {
  console.log("== condition success");
} else {
  console.log("== else exeucuted");
}

//====================================
if (a === 100) {
  console.log("=== condition success");
} else {
  console.log("=== else exeucuted");
}

let amount1 = 100;
let amount2 = null;

if (amount1 != null || amount2 != null) {
  // true && true => true
  // true && false => false
  // false && true => false
  // false && false => false
  // true || false => true
  // true || true => true
  // false || true => true
  // false || false => false

  let sum = amount1 + amount2;
  console.log("Sum : " + sum);
} else {
  console.error("amount1 and amount2 both are null");
}

//1.ways to print the object
//console.log("Hi Akaash");
//alert("Hi Akash");
//document.write("hi Akaash");

//2 console apis

console.log("to show info or data");
console.warn("Not harmful to code");
console.error("Errors are harmful to code");

//3. Javascript Variables
//What are variables? - Containers to store data values

/*
multi
line 
comment
*/

//4. arithmetic opertators
// +, _, /, *
//Arithmetic  Operators
var a = 100;
var b = 50;
console.log("The value of a + b is ", a + b);
console.log("The value of a - b is ", a - b);
console.log("The value of a * b is ", a * b);
console.log("The value of a / b is ", a / b);

//Assignment operator
// if you want to overwrite value of existing variable then use
// below shorthand assignment opertators

// =
// +=
// -=
// /=
// *=

var c = 30;

c += b; //meaning  c= c+b; c= 30+50=80 ans

//alert("C value " + c);
c /= 2;
//alert("C = " + c);
var r = 10;
c -= r;
//alert("C = " + c);
c *= 2; //c= c*2
alert("C = " + c);

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

Student.prototype.getName = function getName() {
  console.log("Student Name :" + s.firstName + " " + s.lastName);
};

s.getAge();
s.getName();
//==========================================
//normal function
function showMsg() {
  console.log("Showmsg called");
}
showMsg();

//alert("Student Age :" + s.age);
//alert("Student Name :" + s.firstName + " " + s.lastName);

var marks = {
  raj: 34,
  shubham: 78,
  Aakash: 99.977,
};
console.log("mark json object " + JSON.stringify(marks));
console.log("Shubham marks :" + marks.shubham);

//5. use of Array

var arr = [1, 2, 3, "Akshu", 5, 6, true, 4.5];

//normal for loop
for (let i = 0; i < arr.length; i++) {
  console.log("using normal loop : " + arr[i]);
}

//advance forEach loop
arr.forEach(function (element) {
  console.log("using advance loop : " + element);
});

//6. use of json object

/* handle null pointer in javascripts
name = "rushi";

var name; 
var name=null;
var name="";
var student= {
         "name": "rushi",
         "class": "A",
         "marks":{
                 "mar": 80,
                 "eng": 70,
                 "computer":80,
                 "totalmarks":0
                }
       };

if(name!=undefined && name!=null && name!=""){
   
}

if(student.marks)
{

  if(student.marks.mar && student.marks.eng && student.marks.computer){

    let totalmarks = student.marks.mar + student.marks.eng + student.marks.computer;                  
    alert(totalmarks);
    student.marks.totalmarks = totalmarks;

   }
}
//check scope of let variable totalmarks
alert("Value of Total Marks is :" +totalmarks);

if(student.marks){ // this condition will check empty , null and undefined
  
  student.marks.totalmarks =  student.marks.mar + 
                              student.marks.eng + 
                              student.marks.computer;
  alert(student.marks.totalmarks);

}
*/
//7. use of window.location object
//.href, host, hostname, port

function userLogin() {
  alert("Login Successful..!!");
  //window.location.href = "http://127.0.0.1:5500/profile.html";
  // uncomment remove form tag if u want to work
  // how to get query string value in javascript code or function
}

//8. Query String
const urlParams = new URLSearchParams(window.location.search);
const myParam = urlParams.get("firstName");
//9. document.write() and document.getElementById("firstName").innerHtml();
