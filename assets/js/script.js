// declaring all elements from the document using id and for one instance class name

// Top of the webpage
var topBar = document.getElementById("topBar"); //Bar including View Highscores and timer
var timerTxt = document.getElementById("timer"); //Timer 

// There are 4 sections that take the main component depending on the user's action
var homePage = document.getElementById("homePage"); //The home page 
var quizPage = document.getElementById("quizPage"); //The quiz page
var scorePage = document.getElementById("scorePage"); //The page where the user enters initials
var highscorePage = document.getElementById("highscorePage"); //The page showing a table of Highscore

// home page  element
var startQuizBtn = document.getElementById("startQuiz"); //The button on the home page to start the quiz + timer

// quiz page elements
var questionText = document.getElementById("question"); //The element that contains the question
var btnArray = document.getElementsByClassName("choices"); //The elements referring to the 4 buttons choices
var feedbackSection = document.getElementsByClassName("feedback"); //The element that shows whether the user is correct or incorrect

// enter score page
var scoreText = document.getElementById("score"); //The element that diplays the score of the user
var initialsText = document.getElementById("inputInitials"); //The input field that contains the user 
var submitBtn = document.getElementById("submit"); //The button that submit the form 

//highscore page
var ranking = document.getElementById("ranking"); //The section that will contain a table of scores
var goBackBtn = document.getElementById("goBack"); //The button to go back to the home page
var clearBtn = document.getElementById("clear"); //the button to clear the highscores

//Timer component
var timerID; // Declaring the variable for the setInterval
var timeLeft = 75; // set the time for the quiz to 75 sec

// array of question objects
// each object contains the property question, choices, and answer
var questions = [
    {
        question: "______ tag is an extension to HTML that can enclose any number of JavaScript statements.",
        choices: ["<script>", "<body>","<head>", "<title>"],
        answer: "<script>"
    },
    {
        question: "Using _______ statement is how you test for a specific condition.",
        choices:["if", "select","switch", "for"],
        answer: "if"
    },
    {
        question: '<script type="text/javascript">\nx=4+"4";\ndocument.write(x);\n</script>\nOutput----?',
        choices:["44", "8","4", "Error Output"],
        answer: "44"
    },
    {
        question: 'What is the correct syntax for referring to an external script called " abc.js"?',
        choices:['<script scr=" abc.js">', '<script href=" abc.js">','<script name=" abc.js">', '<script rel=" abc.js">'],
        answer: '<script scr=" abc.js">'
    },
    {
        question: 'Which of the following is not JavaScript Data Types?',
        choices:['Float', 'Number','Boolean', 'Undefined'],
        answer: 'Float'
    },
    {
        question: 'Among the following, which one is a ternary operator in JavaScript?',
        choices:['?:', '::','&:', '#'],
        answer: '?:'
    },
    {
        question: 'Which of them is not the looping structures in JavaScript?',
        choices:['forwhile', 'for','while', 'dowhile'],
        answer: 'forwhile'
    },
    {
        question: 'How to get a particular value using the tagged name?',
        choices:['getElementsbyTagName()', 'getElementbyID()','getElementsbyName()', 'getTagName()'],
        answer: 'getElementsbyTagName()'
    },
    {
        question: 'Among the keywords below, which one is not a statement?',
        choices:['use strict', 'if','with', 'debugger'],
        answer: 'use strict'
    },
    {
        question: 'Which symbol is used for comments in Javascript?',
        choices:['//', '\\\\','\\* *\\', '\\* */'],
        answer: '//'
    }
];
//https://letsfindcourse.com/technical-questions/javascript-mcq/javascript-mcq-questions

var questionsTotal = 5; //The total number of questions for the quiz
var questionNumber; //Declaring counter for question number

//Shuffle the questions and choices calling on the shuffle(array) funciton 
function shuffleQuestions(){
    for(var i = 0;i< questions.length; i++){
        questions[i].choices = shuffle(questions[i].choices);
    }
    questions = shuffle(questions);
}

//Shuffle function using the Durstenfeld shuffle
function shuffle(array) {
    for (var i = array.length-1; i > 0; i--){
        var j = Math.floor(Math.random()*(i+1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

// Starts the quiz
// It first shuffles the quetions/choices, calls on timer function, load the first question and show the quiz page
function startQuiz() {
    shuffleQuestions(); 
    questionNumber = 0;
    timerTxt.innerText = "Time: " + timeLeft;
    startTimer();

    loadQuestion();
    
    homePage.style.display="none";
    quizPage.style.display="block";

}

// Changes the text of the question and buttons
function loadQuestion(){
    questionText.innerText = questions[questionNumber].question;
    for (var i = 0; i < 4; i++){
        btnArray[i].innerText = questions[questionNumber].choices[i];
    }
}

// starts timer countdown
function startTimer(){
    var frame = function (){
        if(timeLeft <= 0){
            endQuiz();
        }
        else{
            timeLeft--;
            timerTxt.innerText = "Time: " + timeLeft;
        }     
        timerRed();   
    }
    timerID = setInterval(frame,1000);
}

// turns timer text to red to alert user time is running out (10 sec and under)
function timerRed(){
    if(timeLeft<11){ 
        timerTxt.setAttribute("style","color:red");
    }
}

// function for when user chooses and answer
// if the answer is correct, calls the correct() function
// if the answer is wrong, deduct 10 from the time left and calls the wrong() function
function answerQuestion(answer){
    if(answer === questions[questionNumber].answer){
        feedbackDisplay("Correct");
    }
    else {
        timeLeft -= 10;
        if(timeLeft <=0) timeLeft = 0;
        timerTxt.innerText = "Time: " + timeLeft;
        timerRed();
        feedbackDisplay("Wrong");
    }
    questionNumber++;
    //checks to see if all the questions has been answered
    if (questionNumber === questionsTotal){
        endQuiz();
    }
    else{
        loadQuestion();
    }    
}

// function used to show whether the user is correct or wrong
function feedbackDisplay(word){
    for(var i = 0; i < feedbackSection.length; i++){
        feedbackSection[i].children[1].innerText = word;
        feedbackSection[i].style.visibility="visible";
        delay(i);
    }
}

// Delay function 
function delay(i){
    setTimeout(function(){
        console.log(i)
        feedbackSection[i].style.visibility="hidden";
    },700); //0.7 sec
}

// at the end of the quiz, clear Interval and display the page to enter initials 
function endQuiz(){

    clearInterval(timerID); 

    scoreText.innerText = timeLeft;
    quizPage.style.display="none";
    scorePage.style.display="block";

}

// add a new item in sessionStorage using JSON object then calls showScore()
function submitScore(){
    var key = sessionStorage.length;
    // console.log(initialsText.value)
    var entry = {
        name: initialsText.value.trim(),
        score: timeLeft
    };
    sessionStorage.setItem(key, JSON.stringify(entry));

    showScore();
}

// displays in a table the highscores
function showScore(){
    
    // Check if the sessionStorage is empty
    if (sessionStorage.length != 0){
        // get the items in sessionStorage and store in array
        var arrayStorage = [];
        for (var i = 0; i < sessionStorage.length; i++){
            var key = sessionStorage.key(i);
            arrayStorage.push(JSON.parse(sessionStorage.getItem(key)));
        }

        //sort the array based on score in descending order
        // arrayStorage.sort(compare);
        arrayStorage.sort(function(a,b){
            return b.score - a.score;
        });

        //creates a table each time with class table-striped
        var table = document.createElement('table');
        table.setAttribute("Class","table-striped table-bordered");
        
        for (var j = 0; j < arrayStorage.length; j++){
            var row = table.insertRow(j);
            var rank = j+1;
            row.insertCell(0).outerHTML = "<th>"+rank+"</th>";
            row.insertCell(1).innerHTML = arrayStorage[j].name.trim();
            row.insertCell(2).innerHTML = arrayStorage[j].score;
        }

        //the new table replaces the existing one (if any) under the div ranking
        ranking.replaceChild(table,ranking.childNodes[0]);
    }
    
    topBar.style.visibility="hidden";
    scorePage.style.display="none";
    homePage.style.display="none";
    quizPage.style.display="none";
    highscorePage.style.display="block";

    clearInterval(timerID); 

}

// Goes back to the home page and resets the timer
function restart(){

    timerTxt.setAttribute("style","color:black");
    timerTxt.innerText = "Time: " + 0;
    timeLeft = 75;
    topBar.style.visibility="visible";
    highscorePage.style.display="none";
    homePage.style.display="block";

}
        
// Clear the highscores and removes the table
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

// Submit form button
submitBtn.addEventListener("click", function(event){
    event.preventDefault(); //prevent the default event

    // Check and make sure that user enter initals
    if(initialsText.value.trim() === ""){
        initialsText.value = "";
        initialsText.setAttribute("placeholder","Please enter initials");
        return false;
    }
    else{
        submitScore();
    }
});

//Go Back button call the restart function
goBackBtn.addEventListener("click", restart);

//Clear button calls the clearScore function
clearBtn.addEventListener("click", clearScore);

