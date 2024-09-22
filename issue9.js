// arguments
"use strict";
function sum(a, b) {
  a = 10;
  return [a + b, arguments[0] + arguments[1]];
}

console.log(sum(1, 2));
