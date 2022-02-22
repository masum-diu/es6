//Normal function
function sayHello(firstName, lastName) {
  return firstName + " " + lastName;
}

const fullName = sayHello(`md: masum`, "mollah");

console.log(fullName);

//anonimas function
const sum = function (a, b) {
  return a + b;
};
const total = sum(5, 6);
console.log(total);

//vary short of function convart by arrow function
const addition = (num1, num2) => num1 + num2;
const totalAddition = addition(50, 7);
console.log(totalAddition);
