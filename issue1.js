// Misspelling of variables

// If we don't use the strict mode then any misspelled variable gets stored in the Window object
// Here since we are using the strict mode it will throw an error
"use strict";
let variable = "Manas";
vriable = "Alice";

console.log(window);
