const butts = document.querySelector('.butts');
//typically takes 2 arguments, type of event you want to listen to and
//second thing is the CALLBACK function-regular function
//function that is passed to a method that is called at a later point in time
butts.addEventListener('click', function(){
  console.log('It got clicked');
});
//uses an anonymous function which is not named but defined in event
//if we used a NAMED function, it would be passed in as an argument
//function handleClick could be an example
//we use handle-- as a naming convention for event functions

//3 steps
//go get something
//listen for something
//do something

//Example 2-named function
handleClick = function() {
  console.log('It also got clicked');
};

const coolButton = document.querySelector('.cool');
coolButton.addEventListener('click', handleClick);

//remove event listener
coolButton.removeEventListener('click', handleClick);

//Using arrow function
const hooray = () => console.log('Hooray');
coolButton.addEventListener('click', hooray);


//Listening to events on multiple items
//Very common
const buyButtons = document.querySelectorAll('button.buy');
//we can't call buyButtons.addEventLinster('click', buyItem)
//because that method is not available
//to see what methods are avaiable:
//console.log(buyButtons)
//click on _proto_ at bottom
//eventListener is not available as a method
//we must use forEach and loop over it to add it
buyButtons.forEach(function(buyButton) { //common to pass anonymous function when looping, buyButton is each individual button
  //if we console.log(buyButton) we'll see all 10 items/elements
  buyButton.addEventListener('click', hooray);
});
//reference whatever the parameter name is to add it to individual elements


//EVENTS
const sellButtons = document.querySelectorAll('button.sell');

function handleSellButtonClick(event) { //adding event here lets us see the event object
  //event objects contain all types of information
  console.log(event); //this will show us the PointerEvent which includes
  //clicks, touches, and all information consolidated on it such as:
  //isTrusted: true--tells us whether click is true, pressure-pressure sensitivity for iPad, other information
  //we are interested in target--
  console.log(event.target);//shows specific item we clicked on
  console.log(event.target.dataset.price);//see data price
  console.log(parseFloat(event.target.dataset.price));//will convert price to float (default is string)
  console.log('It got sold');
};

sellButtons.forEach(function(sellButton) {
  sellButton.addEventListener('click', handleSellButtonClick);
});

//you can also add event listeners for the window
window.addEventListener('click', function() {
  console.log('You clicked the window');
});
//both button and window events will fire
//you can click on multiple things at the same time
//referred to as PROPAGATION
//to avoid this, we add event.stopPropagation() to the handleSellButtonClick event

//CAPTURE

