//global variables
//any time you declare, it will be available anywhere
const first = 'West'; //can be accessed from any other js running on page
//window is the global scope
//inside console log, type window and you'll get all global variables
//var are attached to window as global, const and let are global but not attached to window
//bad practice to create global variables

//global functions
//work that same way as global variables
function sayHi() {
  console.log('hi!')
}
//is available via window as well (everything but const and let)

//when variables are created INSIDE of a function, those variables are
//only available within that function
//Example:
function go() {
  const hair = 'blonde'
}
console.log(hair); //will be undefined


//Example 2:
const age = 100;
function goOne() {
  console.log(age); // age will be available here
}
console.log(age); //age will also be available here

//Example 3
const age = 100;
function goTwo() {
  const age = 200;
}
goTwo(); //age will be displayed as 200 because it looks in the local function first(if not found, it will look above)
//refered to as shadow variable (named same thing in another scope)
//not a good idea



//Block Scopes
//Example:
if (1 == 1) {
  const cool = true;
}
console.log(cool);
//will throw ReferenceError: cool is not defined
//set of curly brackets aka blocks
//think of them as gates that like to keep variables in
//anything created inside of gates is not allowed to leave
//works the same way with functions--anything is scoped to function

if (1 == 1) {
  var cool = true; //using var instead of const
}
console.log(cool);
//will work
//using let will not work either

//if you need variable outside of block, define it outside of block
let cool;
if (1 == 1){
  cool = true;
}
console.log(cool); //works because variable was initially defined outside block


//Scoped inside function(block scoping)
function isCool(name) {
  let cool; //let defined before conditional
  if (name === 'John'){
    cool = true;
  }
  console.log(cool);
  return cool;
}
//if you run isCool('John') in console, it will work


//Example 2 Scoped inside function
for(var i = 0; i < 10; i++) {
  console.log(i);
}
//will work and print 1 - 9
// if you type 'i' into console log, it will return 10
// this means that 'i' leaked outside of for loop
// if you make it a let, it will not leak
for(let i = 0; i < 10; i++) {
  console.log(i);
}
//type 'i' in console will get 'undefined'

//GENERAL RULES ON var, let, and const
//use const by default
//use let when you need to reassign variable
//dont use var unless there is a specific use case (block variables are not block scoped)
//var variables are function scoped


//Scope lookup examples
const dog = 'snickers';
function logDog() {
  console.log(dog);
}
function go() {
  const dog = 'sunny'
  logDog();
}

go(); //will call logDog() and return snickers where it was initially defined
//this is because JS is a lexically scoped language
//variable or scope lookup happens where functions are defined not where they are run



//Example 3
const dog = 'snickers';
function logDog(dog) {
  console.log(dog);
}
function go() {
  const dog = 'sunny'
  logDog('Rufus');
}

go(); //will return Rufus because it is taken in as an argument to first function


//BEST PRACTICES FOR VARIABLES
//Don't create global variables unless absolutely necessary (explicitly attach it to window if so)
//Functions are scoped the same way as variables--to parent function
//Generally, we will be doing functions all at the top level


//Function scoping
function sayHi(name) {
  function yell() {
    console.log(name.toUpperCase())
  }
  yell();
}

//Inside console--sayHi('John') will output JOHN
//If you call yell(); outside of function on it's own, it will not work
