const books = [
  {
    id: "b001",
    title: "The Hitchhiker's Guide to the Galaxy",
    author: "Douglas Adams",
    genre: "Science Fiction",
    publishedYear: 1979,
    pages: 193,
    available: true,
  },
  {
    id: "b002",
    title: "Pride and Prejudice",
    author: "Jane Austen",
    genre: "Romance",
    publishedYear: 1813,
    pages: 279,
    available: true,
  },
  {
    id: "b003",
    title: "1984",
    author: "George Orwell",
    genre: "Dystopian",
    publishedYear: 1949,
    pages: 328,
    available: false,
  },
  {
    id: "b004",
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    genre: "Southern Gothic",
    publishedYear: 1960,
    pages: 281,
    available: true,
  },
  {
    id: "b005",
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    genre: "Classic",
    publishedYear: 1925,
    pages: 180,
    available: true,
  },
];
// // ✅ 10 Hands-on Questions Using forEach() Only
// Q1) Print every book title in the console.

// 📌 hint: book.title
// Q2) Print all book titles with their authors like:

// 📌 "1984 - George Orwell"
// Q3) Print only books that are available (available = true).

// (No filter — just forEach + if condition)
// Q4) Count how many books have more than 200 pages.

// 📌 You must use:
// ✔ counter variable
// ✔ increment inside forEach
// Q5) Find the total number of pages of all books combined.

// 📌 Expected output: sum = number
// ✔ You must manually accumulate total using forEach
// Q6) Print books published before 1950 in this format:

// 📌 "Old Book → The Great Gatsby"
// Q7) Create a new array titles containing all book titles (but without using map()).

// ✔ Using forEach
// ✔ Push each title manually
// 📌 Expected: ["The Hitchhiker...", "1984", ...]
// Q8) Print index + title like this:
// Q9) Add "📚 " prefix before every title and print like:
// Q10) Print genre-based messages
//1.
// books.forEach((book) => {
//   console.log(book.genre);
// });
//2.
// books.forEach((book) => {
//   console.log(`title ${book.title} | author ${book.author}`);
// });
//3
// let availableBook = books.filter((book) => {
//   return (book.available = true);
// });
// console.log(availableBook);
// let count = 0;
// books.forEach((book) => {
//   if (book.pages > 200) {
//     count += 1;
//   }
// });
// console.log(count);

// let totalPages = books.reduce((acc, book) => {
//   return acc + book.pages;
// }, 0);
// console.log(totalPages);

// let Books = books.filter((book) => {
//   return book.publishedYear < 1950;
// });
// console.log(Books);

let title = books.filter((book) => {
  return book.title;
});
console.log(title);
