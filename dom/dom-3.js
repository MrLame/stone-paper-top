// EVENT LISTNER

// let btn = document.getElementById('button');

// btn.addEventListener('click',onClicked);

// function onClicked(e){
//     btn.style.backgroundColor = 'red';

//     console.log(e.target);
//     console.log(e.type);

//     console.log(e.altKey);
//     console.log(e.shiftKey);
//     console.log(e.ctrlKey);
// }

// MOUSE EVENTS

let box = document.getElementById("box");

box.addEventListener("mouseenter", msEnter);
box.addEventListener("mouseleave", msLeave);

function msEnter() {
  console.log("Mouse Enter");
}

function msLeave() {
  console.log("Mouse Leave");
}

// KEY

let input = document.querySelector('input[type="text"]');
let form = document.querySelector("form");

// input.addEventListener("keydown", runEvent);

// function runEvent(e) {
//     console.log(e.target.value);
//     box.innerHTML = "<h2>" + e.target.value + "</h2>";
// }


// input.addEventListener("cut", runEvent); // when you cut from the input box
// input.addEventListener("paste", runEvent); // when you paste in the input box

// input.addEventListener("keypress", runEvent);

// function runEvent(e) {
//     console.log(e.target.value);
//     box.innerHTML = "<h2>" + e.target.value + "</h2>";
// }


form.addEventListener('submit',runEvent);

function runEvent(e)
{
    e.preventDefault();
    console.log(e.type)
}
