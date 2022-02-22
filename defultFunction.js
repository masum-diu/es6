//normal function
// function defultFunction(num1, num2) {
//   const sum = num1 + num2;
//   return sum;
// }

// const result = defultFunction(12, 23);
// console.log(result);

//  es6
function defultFunction(num1, num2 = 0) {
  const sum = num1 + num2;
  return sum;
}

const result = defultFunction(12, 23);
console.log(result);
