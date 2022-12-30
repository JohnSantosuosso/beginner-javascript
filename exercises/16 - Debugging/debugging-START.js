const people = [
  { name: 'Wes', cool: true, country: 'Canada' },
  { name: 'Scott', cool: true, country: 'Merica' },
  { name: 'Snickers', cool: false, country: 'Dog Country' },
];

people.forEach((person, index) => {
  console.log(person.name);
});

// Console Methods
  //console.log()

  //console.error()
  //throws error based on condition and provides a stack trace
    /*if(person.name == 'West' {
      console.error('Dumbe name');
      }   
    }); */

  //console.warn()
  //same as console.error

  //console.table()
  //turns an array into a table for easy viewing

  //console.count()
  //counts how many times function is run
  /*  function doctorize(name) {
      console.count('running Doctorize');
      return `Dr. ${name}`
    } */
  
  //console.group()
  //helpful when iterating through lots of data
  //and need to identify error in one specific data value


// Callstack (stack trace)
// tells you what function called what function
// need to get good at reading callstacks

//Example:
/* Uncaught Reference Error: doesntExist is not defined debugging.js:47
    at greet (debuggin.js:47)
    at go (debuggin.js:52)
    at <anonymous>:1:1 */

// Grabbing Elements
// select an element with dev tools and use inspect
// once selected, click on console and choose $0 and it will tell you what the element is
// Example-hover over a button a page and right click and choose inspect
// type $0 and output will be <button type = "submit" class "offscreen">Search</button>

//Use $ and $$ in console
    // $('p') will find first paragraph tag on page
    // $$('p') will find all paragraph tags on page


// Breakpoints
// type debugger; inside code and will allow you to peer inside javascript at point in time
/* Example:
    people.forEach((person, index) => {
      debugger;
      console.log(person.name);
    }); */
  //now inside console on page, you can see state (similiar to pry)


// Scope

// Network Requests
// Go to Dev Tools, click on Network
// Can see when website is getting data
// Very helpful at seeing where requests on page are
// Can filter based on XHR(sending data about you), JS, CSS, Img, etc.

// Break On Attribute
// Not used often but helpful when thrown into a random codebase
// If project has 1000s of files of JavaScript, it can help you identify where an element comes from
// Select element and right click and choose 'Break on' -> attribute modifications


// Some Setup Code

function doctorize(name) {
  return `Dr. ${name}`;
}

function greet(name) {
  doesntExist();
  return `Hello ${name}`;
}

function go() {
  const name = doctorize(greet('Wes'));
  console.log(name);
}

const button = document.querySelector('.bigger');
button.addEventListener('click', function(e) {
  const newFontSize =
    parseFloat(getComputedStyle(e.currentTarget).fontSize) + 1;
  e.currentTarget.style.fontSize = `${newFontSize}px`;
});

// A Dad joke fetch
async function fetchDadJoke() {
  const res = await fetch('https://icanhazdadjoke.com/', {
    headers: {
      Accept: 'text/plain',
    },
  });
  const joke = await res.text();
  console.log(joke);
  return joke;
}
