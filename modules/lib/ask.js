const readline = require('node:readline');
const collectAnswers = require('./collectAnswers');

const questions = [
    'What is your name?\n',
    'Where do you live?\n',
    'What are you going to do with Node.js?\n'
];

const answerEvent = collectAnswers(questions, (answers) => {
    answers.forEach(element => {
        console.log(element);
    });
    process.exit();
});

answerEvent.on('answer',(answer)=>{
    console.log(`The answer is ${answer}`)
});