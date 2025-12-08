let arr = [1, 2, 3, 4, 5, 6];
// arr.map((element, index) => {
//   console.log(element, index);
// });

let aa = arr.map((element, index) => {
  return element + index;
});
console.log(aa);
console.log(arr);

let arr1 = [5, 10, 15, 20];
let arr2 = arr1.map((element, index) => element + index);
console.log(arr1);
console.log(arr2);

console.log(typeof arr1);
