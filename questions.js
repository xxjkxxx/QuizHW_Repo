// select start butto and store
var startBtn = document.getElementById("start")

//call startQuiz function on button clicks
startBtn.onclick = startQuiz;

// function to start quiz
function startQuiz() {
    var startScreen = document.querySelector("#startScreen");
    startScreen.setAttribute("class", "hide");

    //unhide the questions
    questionsElement.removeAttribuet("class")
}
// function for kicking off quiz
var questions = [
    {
        title: "Commonly used data types DO NOT include:",
        choices: ["strings", "booleans", ]

        
    }
]