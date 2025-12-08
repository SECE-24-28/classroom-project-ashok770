function sum(a1, b1) {
  let a = a1 || 10;
  let b = b1 || 20;
  let sum = a + b;
  console.log("the sum is :", sum);
}
sum(2, 3);
sum();

// var funcExp = function () {
//   console.log("function expression ");
// };
// funcExp();

// let arrow = () => {
//   console.log("Arrow function");
// };
// arrow();

// (() => {
//   console.log("Arrow function");
// })();

function multiply(par1, par2) {
  let num1 = par1 || 2;
  let num2 = par2 || 3;
  let total = num1 * num2;
  console.log(total);
}
function division(par1, par2) {
  let num1 = par1 || 6;
  let num2 = par2 || 3;
  let total = num1 / num2;
  console.log(total);
}

function substract(a1, b1) {
  let a = a1 || 10;
  let b = b1 || 20;
  let sub = a - b;
  console.log(`the sub of ${a} and ${b} is:`, sub);
}

multiply(4, 3);
multiply(3, 2);
division(4, 2);
division(9, 3);
substract(29, 3);

function paraSum(par1, par2) {
  let sum = par1 + par2;
  console.log(sum);
}

let value1 = "value1";
let value2 = "value2";
paraSum(value1, value2);


let a;
