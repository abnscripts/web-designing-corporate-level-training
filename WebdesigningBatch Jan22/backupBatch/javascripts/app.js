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

let ages = [20, 5, 10, 25, 80, 18, 40, 12, 13, 30, 7, 8];

//print ages greater than 18 : condition: age >= 18

// show msg in console like  20 = he/she is adult;

//else 5 = he/she is a kid

for (let i = 0; i < ages.length; i++) {
  if (ages[i] >= 18) {
    console.log(ages[i] + " = he/she is adult");
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
  alert("success");
} else {
  alert("wrong");
}

let markss;

if (markss) {
  alert("success marks");
}

markss = 100;

if (markss) {
  // handle null pointer exception in javascripts
  alert("success marks");
}

let abcd = undefined;

if (abcd) {
  alert("abcd is haviing some value");
} else {
  alert("abcd is undefined ");
}
