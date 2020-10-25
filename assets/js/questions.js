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