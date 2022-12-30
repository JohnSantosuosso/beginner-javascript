//Creating elements can be done a few ways
//Document.createElement() is main way

//Example
const myParagraph = document.createElement('p');
//cannot create a custom class, we must first create the element
//We do this the same way we normally would
myParagraph.textContent = "I am a P";

const myImage = document.createElement('img');
myImage.src = 'https://picsum.photos/500';
myImage.alt = 'Nice photo';

const myDiv = document.createElement('div');
myDiv.classList.add('wrapper');

//to add Elements once they've been created
//append elements to myDiv first because
//everytime you appendChild() the browser will render non concurrently and can slow a site
myDiv.appendChild(myParagraph);
myDiv.appendChild(myImage);
//Now add to body (will be inserted at bottom)
document.body.appendChild(myDiv);

//.append() is also used (in jquery too)


//Inserting an adjacent element
//insertAdjacentElement() good for adding to an existing element
const heading1 = document.createElement('h2')
heading1.textContent = 'Cool Things';

myDiv.appendChild(heading1); //will add to bottom, don't want
myDiv.insertAdjacentElement('afterbegin', heading1); //adds before


//Example--Creating Unordered List
const myDivList = document.createElement('div');
const unorderedList = document.createElement('ul');
const listItem1 = document.createElement('li');
const listItem2 = document.createElement('li');

listItem1.textContent = 'Apples';
listItem2.textContent = 'Pears';

myDivList.appendChild(unorderedList);
myDivList.appendChild(listItem1);
myDivList.appendChild(listItem2);
document.body.appendChild(myDivList);

//Cloning a node
// const listItem3 = listItem1.cloneNode(true);
// true-sets 'deep' to true means that the children are included in the clone
