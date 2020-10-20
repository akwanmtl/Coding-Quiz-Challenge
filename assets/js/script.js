// declaring all elements 

var timerEl = document.getElementById("timer");
var topBar = document.getElementById("topBar");

var startQuizBtn = document.getElementById("startQuiz");

var welcomePage = document.getElementById("welcomePage");
var quizPage = document.getElementById("quizPage");
var scorePage = document.getElementById("scorePage");
var highscorePage = document.getElementById("highscorePage");

var feedbackSection = document.getElementById("feedback");

var questionText = document.getElementById("question");

var btnArray = document.getElementsByClassName("choices");

var scoreText = document.getElementById("score");

var submitBtn = document.getElementById("submit");

var goBackBtn = document.getElementById("goBack");
var clearBtn = document.getElementById("clear");

var timerID;
var timeLeft = 75;


// list of question objects
var questions = [
    {
        question: "Question 1",
        choices: ["answer 1", "answer 2","answer 3", "answer 4"],
        answer: "answer 2"
    },
    {
        question: "Question 2",
        choices:["answer 5", "answer 6","answer 7", "answer 8"],
        answer: "answer 8"
    },
    {
        question: "Question 3",
        choices:["answer a", "answer b","answer c", "answer d"],
        answer: "answer c"
    }

];
var questionsTotal = questions.length; 
var questionNumber = 0;

// function that starts the quiz and calls on timer
function startQuiz() {

    timerEl.innerText = "Time: " + timeLeft;
    startTimer();

    questionText.innerText = questions[questionNumber].question;
    for (var i = 0; i < 4; i++){
        btnArray[i].innerText = questions[questionNumber].choices[i];
    }
    
    welcomePage.style.display="none";
    quizPage.style.display="block";

}

// function that starts timer countdown
function startTimer(){
    var frame = function (){
        
        if(timeLeft <= 0){
            endQuiz();
        }
        else{
            timeLeft--;
            timerEl.innerText = "Time: " + timeLeft;
        }        
    }
    timerID = setInterval(frame,1000);
}

// function for when user chooses and answer
function answerQuestion(answer){
    if(answer === questions[questionNumber].answer){
        correct();
    }
    else {
        timeLeft -= 10;
        timerEl.innerText = "Time: " + timeLeft;
        wrong();
    }
    questionNumber++;
    if (questionNumber === questionsTotal){
        endQuiz();
    }
    else{
        questionText.innerText = questions[questionNumber].question;
        for (var i = 0; i < 4; i++){
            btnArray[i].innerText = questions[questionNumber].choices[i];
        }
    }    
}

function endQuiz(){
    
    clearInterval(timerID); 

    scoreText.innerText = timeLeft;
    quizPage.style.display="none";
    scorePage.style.display="block";

}

function showScore(){
  
    topBar.style.visibility="hidden";
    scorePage.style.display="none";
    highscorePage.style.display="block";

}

function restart(){

    timerEl.innerText = "Time: " + 0;
    timeLeft = 75;
    topBar.style.visibility="visible";
    highscorePage.style.display="none";
    welcomePage.style.display="block";

}
        
function correct(){
    feedbackSection.children[1].innerText = "Correct";
    feedbackSection.style.display="block";
    setTimeout(function(){
         feedbackSection.style.display="none";
     },500);
}

function wrong(){
    feedbackSection.children[1].innerText = "Wrong";
    feedbackSection.style.display="block";
    setTimeout(function(){
         feedbackSection.style.display="none";
     },500);
}

  

// Add event listener to startQuiz button
startQuizBtn.addEventListener("click", startQuiz);

for(var i = 0; i < btnArray.length; i++){
    
    btnArray[i].addEventListener("click",function(){
        answerQuestion(this.innerText);
    });
}

submitBtn.addEventListener("click", showScore);


goBackBtn.addEventListener("click", restart);