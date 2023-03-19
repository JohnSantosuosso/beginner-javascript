//Will use prevent default method all the time on your forms
//lots of elements in html have default settings in them
//we can stop default action of browser in order to pick it up
//from javascript
//initial default event will show up quickly in log
//and then disappear
//to show the original event, click on cog/wheel in console
//check 'preserve log'

const wes = document.querySelector('.wes');

wes.addEventListener('click', function(event) {
  event.preventDefault(); //will prevent default setting on <a> tag in wes class
})

//adding prompt and overriding prompt default
const john = document.querySelector('.john');

john.addEventListener('click', function(event) {
  event.preventDefault(); //will prevent default setting on <a> tag in wes class
  const shouldChangePage = confirm(
    'This website might be malicious!, do you wish to proceed?'
  );
  if(shouldChangePage) {
    window.location = event.currentTarget.href;
  }
});

//Other common defaults --submitting form element
//give forms a name not a class
const signupForm = document.querySelector('[name = "signup"]')
//standard in CSS/JS is to use attribute to refer to name
//if was class, we'd just use class name
signupForm.addEventListener('submit', function(event){
  //we set this to fire on the submit action in the form
  
  //prevent 'Chad' from submitting
  //add validation on frontend for this
  //select element on page
  //use console.dir(currentTarget); to see what element we want
  //we could also do event.currentTarget.querySelector('[name="email"]')
  const name = event.currentTarget.name.value;
  if(name.includes('chad')){ //includes is NOT case sensitive, we'd have to use regex
    alert('Sorry bro');
    event.preventDefault();
  }
});
//we can also add a required attribute to input boxes in html
//<input required type="checkbox" id="agree" name="agree">
//this prevents it from submitting without checked box


//Other types of events with form inputs
//keyup
//keydown
//focus
//blur
function logEvent(event) {
  console.log(event.type);
}
signupForm.name.addEventListener('keyup', logEvent);
//logs an event anytime keyup is pressed inside name

//NOTES ON ACCESSIBILITY
//site should still work regardless of someone's disability
//html is accessible by default but js can mess it up

//Common pitfalls in JS
//buttons are used for actions that happen inside an application
//links are used to change a page
//do not mess this up, links are not to be used where buttons are

//prevent default is good to be used when stopping someone
//from going to a page

//not a valid use case would be like clicking a follow link instead of a button
//on twitter

//things that are not keyboard accessible should not have listener events
//example would be a photo on a page that has a listener event
//but clicking on the photo does not do anything on the page
//it's just a photo
//if you want something to be a button that is not a button tag
//ie. a div...you must add role='button' tabindex=0 to the div
//not sure why anyone would do this but some people do

