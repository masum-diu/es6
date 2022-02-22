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

// what is defult parameter ,
/**
 * defult parmeter predefine data it is call defult parameter for example is above top?
 */
