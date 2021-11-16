console.log("Hello Oa");

let score = 0;
let count = 0;

let questions = [
  {
    q: "JavaScript is a descendant of which language?",
    a1: "Ruby",
    a2: "Python",
    a3: "Java",
    a4: "C++"
  },
  {
    q: "How would you print a message to the console?",
    a1: "System.out.println()",
    a2: "console.log()",
    a3: "Object.assign()",
    a4: "parseInt()"
  },
  {
    q: "How do you transform a string into an array of letters?",
    a1: "transform()",
    a2: "join()",
    a3: "split()",
    a4: "toUpperCase()"
  },
  {
    q: "JavaScript works with what language to change the DOM?",
    a1: "CSS",
    a2: "React",
    a3: "Sinatra",
    a4: "HTML"
  },
  {
    q: "Thank You For Taking The JavaScript Challenge!"
  }
];

const startButton = document.getElementById("start-button");
console.log(startButton);
// is logging the HTML to the console
const firstQuestionDiv = document.getElementById("first-question-div");
console.log(firstQuestionDiv);

startButton.addEventListener("click", onSubmit);

function onSubmit(e) {
  let currentQuestion = questions[0];
  let questionsP = document.getElementById("questions");
  questionsP.innerHTML = currentQuestion.q;
  document.getElementById("a1").innerHTML = currentQuestion.a1;
  document.getElementById("a2").innerHTML = currentQuestion.a2;
  document.getElementById("a3").innerHTML = currentQuestion.a3;
  document.getElementById("a4").innerHTML = currentQuestion.a4;
  count = 1;
  console.log(count);
}

const a1Button = document.getElementById("a1");

a1Button.addEventListener("click", onSubmit2);

function onSubmit2(e) {
  let currentQuestion = questions[count];
  let questionsP = document.getElementById("questions");
  questionsP.innerHTML = currentQuestion.q;
  document.getElementById("a1").innerHTML = currentQuestion.a1;
  document.getElementById("a2").innerHTML = currentQuestion.a2;
  document.getElementById("a3").innerHTML = currentQuestion.a3;
  document.getElementById("a4").innerHTML = currentQuestion.a4;
  count++;
  console.log(count);
}

const a2Button = document.getElementById("a2");

a2.addEventListener("click", onSubmit3);

function onSubmit3(e) {
  let currentQuestion = questions[count];
  let questionsP = document.getElementById("questions");
  questionsP.innerHTML = currentQuestion.q;
  document.getElementById("a1").innerHTML = currentQuestion.a1;
  document.getElementById("a2").innerHTML = currentQuestion.a2;
  document.getElementById("a3").innerHTML = currentQuestion.a3;
  document.getElementById("a4").innerHTML = currentQuestion.a4;
  if (count == 2) {
    score = score + 25;
  }
  count++;
  console.log(score);
}

const a3Button = document.getElementById("a3");

a3Button.addEventListener("click", onSubmit4);

function onSubmit4(e) {
  let currentQuestion = questions[count];
  let questionsP = document.getElementById("questions");
  questionsP.innerHTML = currentQuestion.q;
  document.getElementById("a1").innerHTML = currentQuestion.a1;
  document.getElementById("a2").innerHTML = currentQuestion.a2;
  document.getElementById("a3").innerHTML = currentQuestion.a3;
  document.getElementById("a4").innerHTML = currentQuestion.a4;
  if (count == 1 || count == 3) {
    score = score + 25;
  }
  count++;
  console.log(score);
}

const a4Button = document.getElementById("a4");

a4Button.addEventListener("click", onSubmit5);

const msg = document.getElementById("msg1");

function onSubmit5(e) {
  let currentQuestion = questions[count];
  let questionsP = document.getElementById("questions");
  questionsP.innerHTML = currentQuestion.q;
  document.getElementById("a1").innerHTML = "";
  document.getElementById("a2").innerHTML = "";
  document.getElementById("a3").innerHTML = "";
  document.getElementById("a4").innerHTML = "";
  if (count == 4) {
    score = score + 25;
  }
  msg.innerHTML = `Your Score is ${score}!`;

  console.log(score);
}
