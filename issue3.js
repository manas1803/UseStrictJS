// Assigning values to readonly properties
// When not using the strict mode then we can even assign value to readonly properties
// Note that it will not change the value, but also it will not throw error 

//"use strict"
let obj = {};

Object.defineProperty(obj, "readonlyProperty", {
  writable: false,
  value: "Its readonly",
});

obj.readonlyProperty = "I am changing a readonly property";

console.log(obj);
