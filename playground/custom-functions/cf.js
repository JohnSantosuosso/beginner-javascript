// Variable definitions
let billAmount = 100;
const taxRate = 0.13;

// Function definition
function calculateBill(billAmount, taxRate) {
  console.log('Running Calculate Bill');
  const total = billAmount * (1 + taxRate);
  return total;
}

// Function Call or Run
const myTotal = calculateBill(100, 0.13);
console.log(`Your Total is $${myTotal}`); //defining variable and adding
console.log(`Your total is $${calculateBill(300, 0.14)}`); //doing same thing above but invokes the function(return total at end)


const myTotal2 = calculateBill(200, 0.13);
console.log(myTotal, myTotal2);


const johnTotal = 500;
const johnTaxRate = 0.3;
const myTotal3 = calculateBill(johnTotal, johnTaxRate); //can pass variables as params
console.log(myTotal3);


//More function definition and calls
function sayHiTo(firstName) {
  return `Hello ${firstName}`;
}

const greeting = sayHiTo('John');
console.log(greeting);


//More functions with params
function doctorize(name) {
  return `Dr. ${name}`;
}

function yell(name) {
  return `HEY ${name.toUpperCase()}`;
}
