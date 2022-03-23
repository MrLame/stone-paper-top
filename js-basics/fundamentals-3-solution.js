function add7(num) {
  return num + 7;
}

function multiply(x, y) {
  return x * y;
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function lastLetter(str) {
  return str.charAt(str.length - 1);
}

alert(add7(7));
alert(multiply(4, 4));
let mess = "xyz";
alert(capitalize(mess));
alert(lastLetter(mess));
