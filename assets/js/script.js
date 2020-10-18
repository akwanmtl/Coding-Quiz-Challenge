var startQuizBtn = document.getElementById("startQuiz");
var timeLeft = 75;
var timerEl = document.getElementById("timer");

var topBar = document.getElementById("topBar");

var welcomePage = document.getElementById("welcomePage");
var quizPage = document.getElementById("quizPage");
var scorePage = document.getElementById("scorePage");
var highscorePage = document.getElementById("highscorePage");


var feedbackSection = document.getElementById("feedback");


var btn1 = document.getElementById("choice1");
var btn2 = document.getElementById("choice2");
var btn3 = document.getElementById("choice3");
var btn4 = document.getElementById("choice4");

var submitBtn = document.getElementById("submit");

var goBackBtn = document.getElementById("goBack");
var clearBtn = document.getElementById("clear");

var timerID;


function startQuiz() {

    timerEl.innerText = "Time: " + timeLeft;
    startTimer();

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
    timerID = setInterval(frame,1000);
}

function answerQuestion(num){
    
    if(num===4){
        timeLeft-=10;
        wrong();
    }
}

function endQuiz(){
    
    clearInterval(timerID); 

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


// btn1.addEventListener("click", function(){
//     answerQuestion(1);
//     });

    
btn1.addEventListener("click", endQuiz);

        
// btn2.addEventListener("click", function(){
//     answerQuestion(2);
//     });


btn2.addEventListener("click", correct);

btn3.addEventListener("click", function(){
    answerQuestion(3);
    });
btn4.addEventListener("click", function(){
    answerQuestion(4)
    });

    
submitBtn.addEventListener("click", showScore);


goBackBtn.addEventListener("click", restart);