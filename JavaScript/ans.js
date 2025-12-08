let func = (a, b, c, d) => {
  return [a, b, c, d];
};
console.log(func(1, 2, 3, 4));

let sqrArray = (a, b, c, d) => {
  return [a * a, b * b, c * c, d * d];
};
console.log(sqrArray(2, 3, 4, 5));

let collectName = (init, last) => {
  return [init, last];
};
console.log(collectName("ashok", "tamata"));

let makeUser = (par1, par2, par3) => {
  return ["name:", par1, "age:", par2, "city:", par3];
};

console.log(makeUser("alex", "19", "bombay"));

let addTen = (par1, par2, par3) => {
  return [par1 + 10, par2 + 10, par3 * +10];
};
console.log(addTen(1, 2, 3));
