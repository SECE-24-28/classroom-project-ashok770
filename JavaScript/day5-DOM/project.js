// 1 We need all the instance
// 2. Generate a Rnadom Number betwenn 1 and 20
// 2.1 creat a varible of score
// Button Functionalities
// 1 We need all the instance
let againBtn = document.querySelector(".again");
let number = document.querySelector(".number");
let guess = document.querySelector(".guess");
let checkBtn = document.querySelector(".check");
let score = document.querySelector(".score");
let highScore = document.querySelector(".highscore");
let msg = document.querySelector(".message");

// 2. Generate a Rnadom Number betwenn 1 and 20
let randomNumber = Math.trunc(Math.random() * 20) + 1;

// 2.1 creat a varible of score
let scr = 20;

// Button Functionalities
// 1.event  that we want to occur 2. Callback
checkBtn.addEventListener("click", () => {
  let inputVal = Number(guess.value);
  if (!inputVal) {
    alert("Please Enter the number");
    msg.textContent = "No number please enter the number";
  }
  //   console.log(randomNumber);
  else if (inputVal == randomNumber) {
    document.body.style.backgroundColor = "green";
    if (scr > Number(highScore.textContent)) {
      number.textContent = randomNumber;
    }

    highScore.textContent = scr;
    msg.textContent = "Correct Value";
  } else if (inputVal > randomNumber) {
    scr -= 1;
    score.textContent = scr;

    msg.textContent = "Too High";
  } else if (inputVal < randomNumber) {
    scr -= 1;
    score.textContent = scr;

    msg.textContent = "To low";
  }
});

let init = () => {
  scr = 20;
  score.textContent = scr;
  number.textContent = "?";
  msg.textContent = "Start guessing....";
  guess.value = " ";
  let randomNumber = Math.trunc(Math.random() * 20) + 1;
  document.body.style.backgroundColor = "black";
  console.log(randomNumber);
};
againBtn.addEventListener("click", init);
