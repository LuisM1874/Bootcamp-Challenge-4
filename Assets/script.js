// Questions that will be asked 
var questions = [
    {
        prompt : " What does a file containing Javascript end in?",
        options : [".js",".css",".html","It can be put in any"],
        answer : ".js"

    },
    {
        prompt : "What is the correct syntax for referring to an external script called 'xxx.js'?",
        options : ["<script src = 'xxx.js>","<script name = 'xxx.js'","<script href = 'xxx.js'"],
        answer : "<script src = 'xxx.js'>"
    },
    {
        prompt : "The external JavaScript file must contain the <script> tag.",
        options : ["True","False"],
        answer :"False"
    },
    {
        prompt : "How does a FOR loop start",
        options : ["for (i = 0; i <= 5)", "for (i = 0; i <= 5; i++)", "for (i = 5)", "for (i = 0; i++)"],
        answer : "for (i = 0; i <= 5; i++)"
    },
    {
        prompt : "Javascript is the same as Java",
        options : ["True","False"],
        answer : "False",
    },
];

// Global Variables 
var timing = document.querySelector("#timer");
var questionsEl = document.querySelector("#questions");
var choicesEl = document.querySelector("#options");
var nameEl = document.querySelector("#name");
var feedbackEl = document.querySelector("#feedback");
var enterBtn = document.querySelector("#submit-score");
var startBtn = document.querySelector("#start");
var reStartBtn = document.querySelector("#restart");

var Index = 0;
var time = questions.length * 10;
var timerId;

// Function for quiz to start
function quizStart() {
    timerId = setInterval(clockTick, 1000);
    timing.textContent = time;
    var landingScreenEl = document.getElementById("start-screen");
    landingScreenEl.setAttribute("class", "hide");
    questionsEl.removeAttribute("class");
    myQuestions();
};

// Questions loop
function myQuestions() {
    var currentQuestion = questions[Index];
    var promptEl = document.getElementById("question-words")
      promptEl.textContent = currentQuestion.prompt;
      choicesEl.innerHTML = "";
      currentQuestion.options.forEach(function(choice, i) {
          var choiceBtn = document.createElement("button");
          choiceBtn.setAttribute("value", choice);
          choiceBtn.textContent = i + 1 + ". " + choice;
          choiceBtn.onclick = timeCheck;
          choicesEl.appendChild(choiceBtn);
      });
  };






  




