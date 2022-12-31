//Traversing
//You will often need to grab an element based on its position
//Example-you are working with a button and need to grab its parent div

//Nodes vs Elements
//
//Example
const john = document.querySelector('.john');
// to see john's children
// console.log(john.children)
// output in console -- HTMLCollection [em]
// aka the children inside the tag

// if we run console.log(john.childNodes)
// output in console is HTMLCollection [text, em, text]
// all 3 items are nodes (if wrapped in a tag i.e. em, it is an element)

//there are different properties for working with nodes vs. elements

