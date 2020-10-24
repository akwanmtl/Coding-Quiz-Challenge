# Coding Quiz Challenge

## Description
This website is online quiz about coding, mainly Javascript. The quiz is timed, and the remaining time is your score. You can enter the leaderboard by entering your initials. 

The website uses a Bootstrap framework for a responsive layout. Javascript was used to implement the quiz by dynamically changing the content of the html and stylesheet. Instead of using different html files for the different pages, the main content of the website is dynamically replaced with Javascript. Also, to store the initials and score, session storage was used. I created the background image using quetion marks in an assorted of fonts. 

Here is the outline of the website works.
1. In the homepage, the user can either choose the start the quiz or view the leaderboard.
2. As soon as the user starts the quiz, the timer starts and the first is loaded. 
3. The questions of the quiz are selected randomly in a pool of questions and the choices of the answers are also shuffled. The questions were taken from the [LETSFINDCOURSE website](https://letsfindcourse.com/technical-questions/javascript-mcq/javascript-mcq-questions)
4. When a wrong answer is selected, 10 sec is deducted. The user is notified whether they answered correctly or incorrectly.
5. When the user finishes answering the last question, or the timer is at 0 sec, the quiz has ended.
6. The user is presented with their score. The user can enter their initials.
7. The leaderboard is displayed. The user can choose to clear the leaderboard and/or return back to the home page.

Here are the screenshots of online quiz.
![Website Screenshot](assets/images/screenshot.PNG) 

Link to the Github repository: https://github.com/akwanmtl/Coding-Quiz-Challenge

Link to the website: https://akwanmtl.github.io/Coding-Quiz-Challenge/

## Credits

* [LETSFINDCOURSE website](https://letsfindcourse.com/technical-questions/javascript-mcq/javascript-mcq-questions)
* [Stackoverflow response about changing placeholder colour](https://stackoverflow.com/questions/51299051/placeholder-color-change-in-bootstrapp)
* [Medium Post by Soyeong Oh - Watch Out When Using SetTimeout() in For Loop #JS] (https://medium.com/@axionoso/watch-out-when-using-settimeout-in-for-loop-js-75a047e27a5f)
* [License badge link](https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba)


## License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Copyright (c) [2020] [Annie Kwan]
