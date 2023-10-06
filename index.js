// This is a simple JavaScript file named index.js

// A function to greet the user
function greet(name) {
  console.log("Hello, " + name + "!");
}

// An arrow function to calculate square of a number
const square = (num) => {
  return num * num;
}

// Call the greet function
greet("Alice");

// Call the square function and log the result
let number = 5;
console.log(`Square of ${number} is: ${square(number)}`);
