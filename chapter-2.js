// PRACTICE2.1
/* What are the types of these variables listed below? Verify this with typeof and
output the result to the console:*/
let str1 = 'Laurence';
let str2 = "Svekis";
let val1 = undefined;
let val2 = null;
let myNum = 1000;
console.log("str1 is:", typeof str1);
console.log("str2 is:", typeof str2);
console.log("val1 is:", typeof val1);
console.log("val2 is:", typeof val2);
console.log("myNum is:", typeof myNum);

// PRACTICE 2.2
// Create a variable for your name, another one for your age, and another one for whether you can code JavaScript or not

let myName = "javeria";
let age = 20;
let bool = true;

console.log(`Hello, My name is ` + myName +`, I am ` + age + `years old and I can code JavaScript:`+ bool);

//PRACTICE EXCERCISE 2.3

// Write some code to calculate the hypotenuse of a triangle using the Pythagorean
// theorem when given the values of the other two sides. The theorem specifies that the
// relation between the sides of a right-angled triangle is a2+ b2= c2

//SOLUTION 

let valuea = prompt("Enter a value of a");
let valueb = prompt("Enter a value of b");


let valueofcsqure = (Math.pow(valuea , 2)) + (Math.pow(valueb,2));

let valuec = Math.sqrt(valueofcsqure );


alert( "value of c  :" + valuec)


// PRACTICE 2.4
// Create variables for three numbers: a, b, and c. Update these variables with the following actions using the assignment operators:
let x = 4;
let y = 5;
let z = 7;

 
// Add b to a
let add = x +=y

// Divide a by c
let Divide = x/=y

// Replace the value of c with the modulus of c and b
 let modulus = z%=y;
 z = modulus


 console.log("Add b to a :" , add);

 console.log("divide a by c :" , Divide );

 console.log ("now the value of c is" , z);

//  CHAPTER PTOJECT
// MILES TO KILOMETER
let mile = prompt("Enter your value in miles");
let kms = 1.60934;
let miletokms = mile*kms;

alert("The distance of " + mile + "kms is equal to" + miletokms + "kilometer");

// BMI CALCULATOR
let inchvalue = prompt("Enter your height in inches");
let poundsvalue = prompt("Enter your weight in pounds");

 // Conversion factors
let cm = 2.45;
let kilo = 2.2046 ;

// Convert height to centimeters and weight to kilograms
let inchestocm = inchvalue * cm;
let poundstokilo = poundsvalue * kilo;

// Calculate BMI
let heightinmeter = inchestocm/100;
let bmi = poundstokilo / (heightinmeter*heightinmeter);

console.log("Height in cm: " + inchestocm);
console.log("weight in kilo: " + poundstokilo);
console.log("BMI: "+ bmi);


