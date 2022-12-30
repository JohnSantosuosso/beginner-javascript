
// Function Expression as constant
const doctorize = function (firstName) {
  return `Dr. ${firstName}`;
};


//Declaring function as constant/variable
const inchToCM = function inchToCM(inches) {
  return inches * 2.54;
}

//Different way to write function above ( => means same as function)
const inchToCM2 = (inches) => {
  return inches * 2.54;
}

//3rd way to write function above
const inchToCM3 = (inches) => inches * 2.54;


//Add function
function add(a , b = 3) { //can pass one param and get result--ie. add(3) will result in total = 6
  const total = a + b;
  return total;
}

//Add function rewrite
const add1 = (a, b = 3) =>  a + b; //includes implicit return


//Passing objects to functions
function makeABaby(first, last) {
  const baby = {
    name: `${first} ${last}`,
    age: 0
  }
  return baby;
}

//Rewriting by setting function equal to constant/variable
const makeABaby1 = (first, last) => ({name: `${first} ${last}`, age: 0}); //must add parantheses or it gets confused

//IIFE-Immediately Invoked Function Expression
(function(age) {
  console.log('Running the Anon function');
  return `You are cool and age ${age}`;
})(10); //note parantheses location for age 10

//Methods!! (all belong to const John)
const john = {
  name: 'John S',

  //Method!
  sayHi: function() {
    console.log('Hey Ralph');
    return('Hey Ralph');
  },  //comma is necessary

  //Short hand Method (most common way)
  yellHi: function () {
    console.log('Hi Wes!');
  },

  //Arrow function
  whisperHi: () => {
    console.log("Hello West, I'm a mouse");
  },

  //Arrow function with 'this'
    quietHi: () => {
      console.log(this); //this is equal to object it was called against aka john
      console.log("Hello West, I'm a mouse");
    }
}


//Callback Functions
//Something happens when something is done
//When somebody clicks something...or when amount of time passes

const button = document.querySelector('.clickMe');
button.addEventListener('click', john.yellHi); //when button is clicked, runs method on john

//Defining callback functions outside of event
function handleClick () {
  console.log('Great Clicking!!');
}
button.addEventListener('click', handleClick);

//Timer Callback
setTimeout(john.yellHi, 1000);

//Timer Callback with anonymous function
setTimeout(function() {
  console.log('DONE! Time to eat!');
}, 5000);
