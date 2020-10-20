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

var initialsText = document.getElementById("inputInitials");
var formSubmit = document.getElementById("scoreForm");

var ranking = document.getElementById("ranking");
var goBackBtn = document.getElementById("goBack");
var clearBtn = document.getElementById("clear");

var timerID;
var timeLeft = 75;


// list of question objects
var questions = [
    {
        question: "Question 1",
        choices: ["answer 1", "correct","answer 3", "answer 4"],
        answer: "correct"
    },
    {
        question: "Question 2",
        choices:["answer 5", "answer 6","answer 7", "correct"],
        answer: "correct"
    },
    {
        question: "Question 3",
        choices:["answer a", "answer b","correct", "answer d"],
        answer: "correct"
    },
    {
        question: "Question 4",
        choices:["correct", "answer f","answer g", "answer h"],
        answer: "correct"
    }

];
var questionsTotal = questions.length; 
var questionNumber;

function shuffleQuestions(){
    for(var i = 0;i< questions.length; i++){
        questions[i].choices = shuffle(questions[i].choices);
    }
    questions = shuffle(questions);
}

function shuffle(array) {
    for (var i = array.length-1; i > 0; i--){
        var j = Math.floor(Math.random()*(i+1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

// function that starts the quiz and calls on timer
function startQuiz() {
    shuffleQuestions();
    questionNumber = 0;
    timerEl.innerText = "Time: " + timeLeft;
    startTimer();

    loadQuestion();
    
    welcomePage.style.display="none";
    quizPage.style.display="block";

}

function loadQuestion(){
    questionText.innerText = questions[questionNumber].question;
    for (var i = 0; i < 4; i++){
        btnArray[i].innerText = questions[questionNumber].choices[i];
    }
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
        loadQuestion();
    }    
}

function endQuiz(){
    
    clearInterval(timerID); 

    scoreText.innerText = timeLeft;
    quizPage.style.display="none";
    scorePage.style.display="block";

}

function submitScore(){
    var key = sessionStorage.length;
    console.log(initialsText.value)
    var entry = {
        name: initialsText.value,
        score: timeLeft
    };
    sessionStorage.setItem(key, JSON.stringify(entry));

    showScore();
}

function showScore(){

    var arrayStorage = [];
    for (var i = 0; i < sessionStorage.length; i++){
        var key = sessionStorage.key(i);
        arrayStorage.push(JSON.parse(sessionStorage.getItem(key)));
    }

    arrayStorage.sort(compare);
    console.log(arrayStorage);

    var table = document.createElement('table');
    table.setAttribute("Class","table-striped");
    
    for (var j = 0; j < arrayStorage.length; j++){
        var row = table.insertRow(j);
        var cell = row.insertCell(0);
        cell.innerHTML = (j+1) + ": " + arrayStorage[j].name + " " + arrayStorage[j].score;
    }

    ranking.replaceChild(table,ranking.childNodes[0]);

    topBar.style.visibility="hidden";
    scorePage.style.display="none";
    welcomePage.style.display="none";
    highscorePage.style.display="block";

}

function compare(a,b){
    return b.score - a.score;
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

function clearScore(){
    sessionStorage.clear();
    ranking.removeChild(ranking.childNodes[0]);
}
  

//Callback functions for the buttons

//Start Quiz button calls the startQuiz function
startQuizBtn.addEventListener("click", startQuiz);

//goes through the list of all choices buttons
for(var i = 0; i < btnArray.length; i++){
    
    //Choice button calls the answerQuestion function with the corresponding text of the button as an argument
    btnArray[i].addEventListener("click",function(){
        answerQuestion(this.innerText);
    });
}

//Go Back button call the restart function
goBackBtn.addEventListener("click", restart);

//Clear button calls the clearScore function
clearBtn.addEventListener("click", clearScore);