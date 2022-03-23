// Acessing the document objects

console.log(document.links);
console.log(document.title);
console.log(document.URL);
console.log(document.images);

// SELECTORS //

// 1. Get Element by ID //

console.log(document.getElementById('header-title'));
let headerTitle = document.getElementById('header-title');
let mainHeader = document.getElementById('main-header');

// headerTitle.textContent = "Hi";   // ignores the style of the element  
// headerTitle.innerText = "Hello";  // takes in account the style

// still .textContent & .innerText can be used interchangeably

// headerTitle.innerHTML = '<h1>Changed the inner HTML</h1>';

mainHeader.style.borderBottom = 'solid 10px #000';

// 2. Get Elements by Class //

// let items = document.getElementsByClassName('list-group-item');
// console.log(items);
// items[1].textContent = 'Hello 2';

// items[1].style.backgroundColor = 'red';

// Gives error cause every element in the items array needs to be accessed seperately
// items.style.backgroundColor = '#f4f4f4';

// Give grey background to all items 
// for(let i = 0; i < items.length; i++){
//     items[i].style.backgroundColor = '#f4f4f4';
// }

// 3. Get Elements by Tag Name //

// let li = document.getElementsByTagName('li');
// console.log(li);

// li[1].textContent = 'Hello 2';
// li[1].style.backgroundColor = 'red';

// Gives error cause every element in the items array needs to be accessed seperately
// li.style.backgroundColor = '#f4f4f4';

// Give grey background to all li 
// for(let i = 0; i < li.length; i++){
//     li[i].style.backgroundColor = '#f4f4f4';
// }

// QUERY SELECTOR //

// let header = document.querySelector('#main-header');
// header.style.borderBottom = 'solid 10px #ccc';

// var input = document.querySelector('input');
// input.value = 'Hello World';

// var submit = document.querySelector('input[type="submit"]');
// submit.value = 'ADD';

// QUERY SELECTOR ALL //

let title = document.querySelectorAll('.title');

title[0].textContent = 'Hello';

// Select every odd child of li (using css pseudo selectors)
var odd = document.querySelectorAll('li:nth-child(odd)');

// Select every evem child of li (using css pseudo selectors)
var even = document.querySelectorAll('li:nth-child(even)');

for(let i = 0; i < odd.length; i++){
    odd[i].style.backgroundColor = '#f4f4f4';
}

for(let i = 0; i < even.length; i++){
    even[i].style.backgroundColor = '#ccc';
}






