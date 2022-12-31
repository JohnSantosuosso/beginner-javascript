// Make a div
const myDiv = document.createElement('div');

// add a class of wrapper to it
myDiv.classList.add('wrapper');

// put it into the body
document.body.appendChild(myDiv);

// make an unordered list
const unorderedList = document.createElement('ul');

// add three list items with the words "one, two, three" in them
const listItem1 = document.createElement('li');
listItem1.textContent = 'Item 1';
const listItem2 = document.createElement('li');
listItem2.textContent = 'Item 2';
const listItem3 = document.createElement('li');
listItem3.textContent = 'Item 3';

// put that list into the above wrapper
unorderedList.appendChild(listItem1);
unorderedList.appendChild(listItem2);
unorderedList.appendChild(listItem3);
myDiv.insertAdjacentElement('afterbegin', unorderedList);

// create an image
const myImage = document.createElement('img');

// set the source to an image
myImage.src = 'https://picsum.photos/500';

// set the width to 250
myImage.width = 250;

// add a class of cute
myImage.classList.add('cute');

// add an alt of Cute Puppy
myImage.alt = 'Cute Puppy';

// Append that image to the wrapper
wrapper = document.querySelector('.wrapper');
wrapper.appendChild(myImage);

// with HTML string, make a div, with two paragraphs inside of it
const myHTML = `
<div class=myDiv2>
<p>This is a paragraph</p>
<p>This is also a paragraph</p>
</div>
`;
// put this div before the unordered list from above
const ulElement = myDiv.querySelector('ul');
ulElement.insertAdjacentHTML('beforebegin', myHTML); //added in place of insertAdjacentElement

// add a class to the second paragraph called warning
const warning = document.querySelectorAll('.myDiv2 p')[1];
warning.classList.add('warning');
// remove the first paragraph
const myDiv2P = document.querySelector('.myDiv2');
myDiv2P.firstElementChild.remove();

// create a function called generatePlayerCard that takes in three arguments: name, age, and height

// have that function return html that looks like this:
// <div class="playerCard">
//   <h2>NAME — AGE</h2>
//   <p>They are HEIGHT and AGE years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
// </div>

// make a new div with a class of cards

// make 4 player cards using generatePlayerCard

// append those cards to the div
// put the div into the DOM just before the wrapper element
// Bonus, put a delete Button on each card so when you click it, the whole card is removed

// select all the buttons!
// make out delete function
// loop over them and attach a listener
