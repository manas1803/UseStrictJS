// If not in strict mode it allows to have same parameter variable names
function combine(a, a, c) {
  return [a, a, c];
}

console.log(combine(1, 2, 3));
