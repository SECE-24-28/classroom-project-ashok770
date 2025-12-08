// setTimeout(() => {
//   console.log("SetTimeOut");
// }, 2000);
// console.log("Hello Async programming");
// //callback fun and timer
// //callback Hell and nested callbacks

// const { log } = require("async");

// const { log } = require("async");

// setTimeout(() => {
//   console.log("hello 1");
//   setTimeout(() => {
//     console.log("hello 2");
//     setTimeout(() => {
//       console.log("hello 3");
//       setTimeout(() => {
//         console.log("hello 4");
//         setTimeout(() => {
//           console.log("hello 5");
//           setTimeout(() => {
//             console.log("hello 6");
//             setTimeout(() => {
//               console.log("hello 7");
//             }, 2000);
//           }, 2000);
//         }, 2000);
//       }, 2000);
//     }, 2000);
//   }, 2000);
// }, 2000);
// promise Pass a callback function with paramaters
// 3 state of promise
// 1.pending
// 2.fullfilled
// 3.rejected
// let myPromise = new Promise((res, rej) => {
//   let marks = 40;
//   if (marks >= 60) {
//     res("Student is passed");
//   } else {
//     rej("Student is failed");
//   }
// });

// ways to call a promise
//.then() and .catch()

// myPromise
//   .then((a) => {
//     console.log(a);
//   })
//   .then((err) => {
//     console.log(err);
//   });

// Async and await
//no error handling

// let handlePromise = async () => {
//   try {
//     console.log("hello");
//     let response = await myPromise;
//     console.log(response);
//     console.log("Anythings");
//   } catch (err) {
//     console.log(err);
//   }
// };

// fetch api
// let fetchData = () => {
//   fetch("https://jsonplaceholder.typicode.com/users")
//     .then((res) => {
//       console.log(res);
//       return res.json();
//     })
//     .then((data) => {
//       console.log("valus is", data);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// };

// fetchData();

let fetchData = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    console.log(response);
    const data = await response.json();
    localStorage.setItem("requiured Data", JSON.stringify(data));
    console.log("value is ", data);
  } catch (err) {
    console.log(err);
  }
};

let localDat = JSON.parse(localStorage.getItem("responseData")) || [];
if (localDat.length <= 0) {
  fetchData();
}
