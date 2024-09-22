// The this property issue
"use strict";
function sum(a, b) {
  console.log(this);
  console.log(typeof this);
  return a + b;
}

//console.log(this);
//sum(1, 2);
const x = sum.bind(10);
console.log(x);
x(1, 2);
