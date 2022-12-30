//Hoisting-allows you to access functions and variables before they are created
//Function declarations and variable declarations are hoisted

//Hoisting Function Declarations
sayHi(); //has not been declared yet (declared below)

function sayHi() {
  console.log('hey!')
}
//will still work because compiler will move all function declarations to top of file
//you can technically run a function before it exists

sayHi(); //has not been declared yet (declared below)

function sayHi() {
  console.log(add(10,2));//is declared below but still will work
}

function add(a, b) {
  return a + b;
}
//not best practice but works because of JavaScript compiler
//some people may organize their code this way though


//Variable Hoisting
console.log(age);
var age = 10;
//will be undefined
//Javascript will hoist variable declarations but not actually setting of value
//not used very frequently

//Hoisting with variables set equal to functions does not work
const add = function(a, b) {
  return a + b;
};
