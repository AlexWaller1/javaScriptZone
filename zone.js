console.log("Hello Oa");

let score = 0;

const startButton = document.getElementById("start-button");
console.log(startButton);
// is logging the HTML to the console
const firstQuestionDiv = document.getElementById("first-question-div");
console.log(firstQuestionDiv);

startButton.addEventListener("click", onSubmit);

function onSubmit(e) {
  firstQuestionDiv.innerHTML += `
    <br>
    <br>
    <h2 id="question-1-header">
    1. JavaScript is a descendant of which language?
  </h2>
  <form action="">
    <input
      type="checkbox"
      id="choice-a-1"
      name="choice-a-1"
      value="choice-a-1"
    />
    <label for="choice-a-1">Ruby</label>
    <br />
    <input
      type="checkbox"
      id="choice-b-1"
      name="choice-b-1"
      value="choice-b-1"
    />
    <label for="choice-b-1">Python</label>
    <br />
    <input
      type="checkbox"
      id="choice-c-1"
      name="choice-c-1"
      value="choice-c-1"
    />
    <label for="choice-c-1">Java</label>
    <br />
    <input
      type="checkbox"
      id="choice-d-1"
      name="choice-d-1"
      value="choice-d-1"
    />
    <label for="choice-d-1">C++</label>
    <br />
  </form>
  <br>
  <button id="question-1-button" type="button" onclick="onSubmit2()" class="btn btn-light">
        Next Question
      </button>
      <br>
      <br>
    `;
}

const q1Button = document.getElementById("question-1-button");
console.log(q1Button);
const secondQuestionDiv = document.getElementById("second-question-div");

function onSubmit2() {
  secondQuestionDiv.innerHTML += `
    
    <h2 id="question-2-header">
    2. How would you print a message to the console?
  </h2>
  <input
    type="checkbox"
    id="choice-a-2"
    name="choice-a-2"
    value="choice-a-2"
  />
  <label for="choice-a-2">System.out.println()</label>
  <br />
  <input
    type="checkbox"
    id="choice-b-2"
    name="choice-b-2"
    value="choice-b-2"
  />
  <label for="choice-b-2">console.log()</label>
  <br />
  <input
    type="checkbox"
    id="choice-c-2"
    name="choice-c-2"
    value="choice-c-2"
  />
  <label for="choice-c-2">Object.assign()</label>
  <br />
  <input
    type="checkbox"
    id="choice-d-2"
    name="choice-d-2"
    value="choice-d-2"
  />
  <label for="choice-d-2">parseInt()</label>
  <br>
  <br>
  <button id="question-2-button" type="button" onclick="onSubmit3()" class="btn btn-light">
        Next Question
      </button>
      <br>
      <br>
    
    `;

  firstQuestionDiv.value = "";
}

const thirdQuestionDiv = document.getElementById("third-question-div");
console.log(thirdQuestionDiv);

function onSubmit3() {
  thirdQuestionDiv.innerHTML += `
    
    <h2 id="question-3-header">
        3. How do you transform a string into an array of letters?
      </h2>
      <input
        type="checkbox"
        id="choice-a-3"
        name="choice-a-3"
        value="choice-a-3"
      />
      <label for="choice-a-3">transform()</label>
      <br />
      <input
        type="checkbox"
        id="choice-b-3"
        name="choice-b-3"
        value="choice-b-3"
      />
      <label for="choice-b-3">join()</label>
      <br />
      <input
        type="checkbox"
        id="choice-c-3"
        name="choice-c-3"
        value="choice-c-3"
      />
      <label for="choice-c-3">split()</label>
      <br />
      <input
        type="checkbox"
        id="choice-d-3"
        name="choice-d-3"
        value="choice-d-3"
      />
      <label for="choice-d-3">toUpperCase()</label>
    <br>
    <br>
    <button id="question-2-button" type="button" onclick="onSubmit4()" class="btn btn-light">
    Next Question
  </button>
  <br>
  <br>

    
    `;
}
