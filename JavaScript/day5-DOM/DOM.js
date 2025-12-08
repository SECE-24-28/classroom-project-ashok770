// // 1.Select by Tag
// // let id = document.getElementById("h1");
// // console.log(id);
// // return the htmlcollection array --> return multiple values

// //2.class selector

// // let cla = document.getElementsByClassName("Rocky");
// // console.log(cla);

// // 3.by Id
// // let Identy = document.getElementById("3");
// // console.log(Identy);
// // return single element--> the first element

// // 4.Query selector

// // let Q = document.querySelector(".Rocky");
// // console.log(Q);
// // // 5.Query selectorALl
// // let Q1 = document.querySelectorAll(".Rocky");
// // console.log(Q1);

// // ------------read and write operation---
// // textcontent --> return the content betweent the tag
// // innerHTML -> will insert with the tag + content

// // let head = document.querySelector("p");
// // // Read op
// // console.log(head.textContent);

// // Write operation
// // head.textContent = "This is DOM class going on";

// // let div = document.querySelector("div");
// // div.innerHTML = "<p>Hello From the Para</p>";
// // console.log(div.textContent);

// // console.log(div.innerHTML);
// //add ,remove and toggle class

// let head = document.querySelector("h1");
// console.log(head);
// head.classList.add("color");
// head.classList.add("border");
// head.classList.add("background");
// // head.classList.toggle("background");

// // ##note the style added using style will be added html part as a inline css
// let p = document.querySelector("p");
// p.style.color = "red";
// p.style.backgroundColor = "green";
// //Create a element

// let ul = document.createElement("ul");
// let lii = document.createElement("li");
// let li1 = document.createElement("li");

// lii.textContent = "Item 1";
// li1.textContent = "Item2";

// ul.appendChild(lii);
// ul.appendChild(li1);
// document.body.appendChild(ul);
// let arr = ["Apple", "Banana", "Mango"];
// arr.forEach((Element) => {
//   let lo = document.createElement("lo");
//   lo.textContent = Element;
//   ul.appendChild(lo);
// });
let form = document.querySelector("from");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let name = document.querySelectorAll("input")[0];
  let feedback = document.querySelectorAll("input")[1];
  console.log(name, feedback);

  if (name.value === "") {
    alert("Name field is required");
    return;
  }
  if (feedback.lenght < 5) {
    alert("feed back must be atleast more than 5 char");
    return;
  }
  let result = document.querySelector("#result");
  result.textContent = `thank for your feedback ${name.value} and feed back is ${feedback.value} `;
});
