// Assigning values to undefined and NaN that are readonly

// We can assign values to undefined and NaN even though they should not be
// Using strict mode we can avoid that

"use strict";

undefined = 100;
NaN = 154;
console.log("Undefined value is ", typeof undefined);
function foo() {
  undefined = 10;
  console.log(undefined);
}

foo();
