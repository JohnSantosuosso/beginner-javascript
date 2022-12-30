//javascript inserted into head will be loaded before html in body is loaded
//cannot be read unless you use async or defer

//Example using event listener for DOMContentLoaded event if js inserted in head
  // function init() {
  //   const p = document.querySelector('p');
  //   console.log(p);
  // }
  // document.addEventListener('DOMContentLoaded', init);
//runs init function once DOM content loaded is run


//Selecting events is first thing we must do to alter the content on page
//2 ways to select --querySelector and querySelectorAll

//querySelector
const a = document.querySelector('p');
console.log(a);

//querySelectorAll
const divs = document.querySelectorAll('div');
console.log(divs);
//This will return a NodeList in console which is similiar to an array
//Example-NodeList(3) [div.items, div.item, div.item]
//When expanded- - 0: div.items 1: div.item 2: div.item length: 3 _proto_: NodeList
//Doesn't have map, filter, reduce built into it

//can also call just classes--querySelectorAll('.item') for anything with class of item
//or even parent children--querySelectorAll('.item.img') --class item with img
const imgs = document.querySelectorAll('.items img');
console.log(imgs);

//to get first item
//give the first item a different class name such as item2
//const item2 = document.querySelector('.item2');

//VIEWING ELEMENT PROPERTIES
const heading = document.querySelector('h2');
console.dir(heading); //will show an HTML element's properties
//helpful properties include: Parent Element, Parent Node, Outer HTML, Outer Text
//Properties can be used 2 ways
//Getter-we pull data from it we need
console.dir(heading.textContent);
//Setter-we set the property to what we need
heading.textContent = 'John is cool';

//view innerHTML
console.log(heading.innerHTML);
//view outerHTML
console.log(heading.outerHTML);


//add text to content
const pizzaList = document.querySelector('.pizza');
pizzaList.insertAdjacentText('beforebegin', 'Pizza, Pizza')
//inserts Pizza, pizza before pizza class

pizzaList.insertAdjacentText('afterbegin', 'Pizza? ')
//inserts Pizza? inside class at beginning

pizzaList.insertAdjacentText('beforeend', ' Pizza! ')
//inserts Pizza! inside class at end
//more possible options are availabe inside MDN docs

//Elements are anything wrapped INSIDE a tag (inside div, p, etc.)
//Nodes are anything (not wrapped in tag though) i.e. div, p

//CLASSES
//common to do in JavaScript, different than adding properties
const pic = document.querySelector('.nice');
console.log(pic.classList);
//will return DOMTokenList ['nice', 'cool', value: 'nice cool']
//DOMTokenList includes list of all classes included in class

//to manipulate classList
pic.classList.add('open'); //adds class 'open'
pic.classList.remove('cool'); //removes class 'cool'

pic.classList.toggle('nice');//will toggle (add if not there, remove if there)

//can also setup eventListeners to toggle a class when clicked
//A ton of JavaScript interaction is just adding
//and removing classes that have been built
//with transitions and resizing
//very common with modals and navs that slide in from side

//ATTRIBUTES
//anything provided to an element as additional info
//classes, source, alt, etc.
//work same way as properties
pic.alt = 'Cute pup'; //alt attributes used to describe photo

//to set attribute
pic.setAttribute('alt', 'REALLY CUTE PUP')
//setAttribute also works for nonstandard attributes
//Don't set non standard attributes!

//to get an attribute
console.log(pic.getAttribute('alt'));

