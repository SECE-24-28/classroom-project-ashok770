const students = ["Ashok", "Aman", "Ravi", "Ankit", "Rajat"];
// students.forEach((name) => {
//   console.log(`hello ${name}`);
// });
// students.forEach((name, index) => {
//   console.log(index, name);
// });
// Q1️⃣ Print each student name with “Welcome” messagesr
// students.forEach((name) => {
//   console.log(`Welcome ${name}`);
// });
// const marks = [75, 20, 90, 45, 10];
// marks.forEach((mark) => {
//   if (mark >= 35) {
//     console.log(`pass ${mark}`);
//   } else {
//     console.log(`fail ${mark}`);
//   }
// });

// Q4️⃣ Count how many students have name length > 4 using forEach
let count = 0;
students.forEach((name) => {
  if (name.length > 4) {
    count += 1;
  }
});
console.log(count);
