// TRAVERSING THE DOM //

// Parent Node

var itemList = document.querySelector('#items');
// console.log(itemList.parentElement);

// Child 

console.log(itemList.children[1]);

// First Element Child

console.log(itemList.firstElementChild);
itemList.firstElementChild.textContent = 'Hello 1';

// Last Element Child

console.log(itemList.lastElementChild);
itemList.lastElementChild.textContent = 'Hello Last';

// Next Sibling

console.log(itemList.nextElementSibling);

// Previous Sibling

console.log(itemList.previousElementSibling);

// CREATE ELEMENT //

// Create a div
var newDiv = document.createElement('div');

// Add class
newDiv.className = 'hello';

// Add id
newDiv.id = 'hello-id'

// Add attribute
newDiv.setAttribute('title','hello div');

// create text node
var newDivText = document.createTextNode('Hello World');

// add text to div
newDiv.appendChild(newDivText);

var container = document.querySelector('.container');
container.appendChild(newDiv);