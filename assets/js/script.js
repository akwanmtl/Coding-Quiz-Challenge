var startQuizBtn = document.getElementById("startQuiz");
var timeLeft = 75;
var timerEl = document.getElementById("timer");

var btn1 = document.getElementById("choice1");
var btn2 = document.getElementById("choice2");
var btn3 = document.getElementById("choice3");
var btn4 = document.getElementById("choice4");



function startQuiz() {

    timerEl.innerText = "Time: " + timeLeft;
    startTimer();


    var welcomePage = document.getElementById("welcomePage");
    var quizPage = document.getElementById("quizPage");

    welcomePage.style.display="none";
    quizPage.style.display="block";

    
}

function startTimer(){
    var frame = function (){
        
        if(timeLeft <= 0){
            clearInterval(timerID); 
        }
        else{
            timeLeft--;
            timerEl.innerText = "Time: " + timeLeft;
        }        
    }
    
    var timerID = setInterval(frame,50);
}


    // var topBar = document.getElementById("topBar");
    // topBar.style.visibility="hidden";

// Add event listener to startQuiz button
startQuizBtn.addEventListener("click", startQuiz);