// const number = [34, 56, 33, 44, 4, 45];
// const maxNumber = Math.max(56, 45, 34); //normaly check max number with math.max and you can check min.

// //if you array of number you can check you should be sparead ... used to three dot..
// const max = Math.max(...number);
// console.log(max, maxNumber);

const person = { id: 23444, name: "khan", divison: "dhaka", phone: 90090089 };
const { id, name, phone } = person;

// console.log(id);

const mass = {
  reduan: "reduan",
  nasir: { emon: "emon", tamim: "tamim" },
  tambir: { tanim: "tanim", rabbi: "rabbi" },
};

// console.log(mass.nasir.emon);

// array destring
const { emon } = mass.nasir;
const { rabbi } = mass.tambir;

console.log(
  `he is nasir yonger bother ${emon} and rabbi also younger bother all mass member ${rabbi}`
);
