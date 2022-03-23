let message; // To create a variable in JavaScript, use the let keyword.
message = "Good Morning" // alert is used to show a popup in the browser.
alert(message);

var name;
name = 'Aditya';
alert(name);

// The var keyword is almost the same as let. It also declares a variable, but in a slightly different, “old-school” way.

// The scope is global when a var variable is declared outside a function. This means that any variable that is declared with var outside a function block is available for use in the whole window.

// var is function scoped when it is declared within a function. This means that it is available and can be accessed only within that function.

// A block is a chunk of code bounded by {}. A block lives in curly braces. Anything within curly braces is a block.

// So a variable declared in a block with let  is only available for use within that block

const myBirthday = '14th Jan' // const is used to declare a constant, its value can not be changed.

const COLOR_RED = "#F00";
const COLOR_GREEN = "#0F0";
const COLOR_BLUE = "#00F";
const COLOR_ORANGE = "#FF7F00";

// There is a widespread practice to use constants as aliases for difficult-to-remember values that are known prior to execution.
// Such constants are named using capital letters and underscores.

// JavaScript Arithmetic

// +	Addition
// -	Subtraction
// *	Multiplication
// **	Exponentiation (ES2016)
// /	Division
// %	Modulus (Remainder)
// ++	Increment
// --	Decrement


let firstName = "Aditya";
let lastName = 'Parashar';
let fullName = firstName + lastName; // The binary + is applied to strings, it (concatenates) the string
alert(fullName);


let x = 10;
let y = '10';

if(x == y) // == only checks the value of the variable and not its datatype.
{
    alert('true');
}

if(x === y) // === is a strict comparision it checks value as well as its datatype.
{
    alert('true');
}




