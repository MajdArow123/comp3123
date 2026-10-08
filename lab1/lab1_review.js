/*
Purpose: Review JS concepts
Prototypes vs Classes 
Regular finction, anonymous functions, arraw functions
callback functions
mern: Nstands for node.js

*/
var golbalvariable = 100
let globalvariable2 = 200
function functionName() {
    let varInFunc = "local"
}

//console.log(varInFunc) // WILL FAIL 

// prototype  -- one time use object from a prototype

const oneTimeUseObject = {
    prop1: "Mjd",
    prop2: "COMP3123",
    method1: function(prop1) {
        console.log(prop1)   
    }
}
// const oneItem
console.log(oneTimeUseObject)
console.log(oneTimeUseObject.prop1)
console.log(oneTimeUseObject.prop2)
oneTimeUseObject.method1("PIZZA")

// Prototype  - using a constructor 
function Student(student_name_p, course_p, lauch_p) {
    this.student_name = student_name_p;
    this.course = course_p;
    this.launch = lauch_p;
    this.method1 = function(param1) {
        return param1;
    }
}

const morningStudent = new Student("Mjd", "COMP3123", "noodels");
console.log(morningStudent)
console.log(morningStudent.student_name)
console.log(morningStudent.course)
console.log(morningStudent.method1(morningStudent.launch))
 

//Classes - always have constructor
class Prof {
    constructor(prof_name_p) {
        this.prof_name = prof_name_p;
    }
    method1(lunch) {
        console.log(lunch)
    }
}

const morningProf = new Prof("Laily")
console.log(morningProf.prof_name)
morningProf.method1("burger")
//optional Homework: practise a callback 
//function usinf an array and the .map()
//function 
const numbers = [1, 2, 3, 4, 5];
const result = numbers.map(function(number) {
    return number * 2;
});

console.log(result);


/* now here will start Lab1 exercises */

// Exercise 1 : capitalize the first letter of each word of a iven string

function capitalize(str) {
    return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}
console.log(capitalize("js string exercises")); // Output: "js String Exercises"

// Exercise 2: Find the largest of three given integers
function max(a, b, c) {
    if (a >= b && a >= c) return a;
    if (b >= a && b >= c) return b;
    return c;
}
console.log(max(1, 0, 1)); 
console.log(max(0, -10, -20));
console.log(max(1000, 510, 440));

//exercise 3:  Move the last three characters to the start of a given string.
function right(str) {
 if (str.length < 3) return str;
    return str.slice(-3) + str.slice(0, -3);
}
console.log(right("Python"));
console.log(right("JavaScript"));
console.log(right("Hi"));

//excercise 4:   Find the type of a given angle of a triangle. Return the type of angle.
function findAngleType(angle) {
    if (angle < 90) return "Acute angle";
    if (angle === 90) return "Right angle";
    if (angle < 180) return "Obtuse angle";
    if (angle === 180) return "Straight angle";
    return "Invalid angle";
}
console.log(findAngleType(47));
console.log(findAngleType(90));
console.log(findAngleType(145));
console.log(findAngleType(180));
console.log(findAngleType(200));
//exercise 5: Maximum sum of k consecutive numbers in an array 
function maxConsecutiveSum(arr, k) {
    if (k > arr.length) return null;
    let maxSum = 0;
    for (let i = 0; i < k; i++) {
        maxSum += arr[i];
    }
    let currentSum = maxSum;
    for (let i = k; i < arr.length; i++) {
        currentSum += arr[i] - arr[i - k];
        maxSum = Math.max(maxSum, currentSum);
    }
    return maxSum;
}
console.log(maxConsecutiveSum([1, 2, 3, 4, 5], 2)); 
console.log(maxConsecutiveSum([1, 2, 3, 4, 5], 3)); 
console.log(maxConsecutiveSum([1, 2, 3, 4, 5], 4));