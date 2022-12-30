//Adding inner HTML
const items = document.querySelector('.items');
const description = 'Cute Pup';
items.innerHTML = `
  <div class='apple'>
  <h1>Hey How are ya?!</h1>
  <p> ${description}</p>
  </div>
`;
//automatically adds to page the content above
//may be more useful because you can interpolate values very easily
//This is exactly how templating works in different frameworks
//whether its React, Angular, Ember, Vue, Svelte
//works the exact same way
//if we console.log this, it's just a string
//this means we can't add elements using .add()
//the type is a string, not an Element!!
//only becomes an element once it's dumped in the DOM
//to add Event Listeners or dynamically change anything
//it is not possible until it's dumped into the DOM
//and then pulled out
const updateDescription = document.querySelector('.apple p')
updateDescription.textContent = 'Happy Man';

//Creating contextual fragments
//turn a string into a DOM element
const myFragment = document.createRange().createContextualFragment(items);
document.body.appendChild(myFragment);

//Security and sanitization
//One pitfall is that you could ask someone what their name is
//If someone inserts HTML into it, the HTML could be rendered on the page
//This could be dangerous if someone introduces a script tag
//XSS could allow someone to cross site script and run scripts on the backend
//Any time you allow a third party to run JavaScript on
//your page, that is a huge hole
//We'll learn how to prevent this in the future

