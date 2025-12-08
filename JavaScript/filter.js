let a = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let b = a.filter((el) => {
  return el % 2 === 1;
});
console.log(b);

// ###:return a single value1 ---> by default acc value = 1
let c = a.reduce((acc, ele, index) => {
  console.log(acc, ele);
  return acc + ele;
}, 10);
console.log(c);
