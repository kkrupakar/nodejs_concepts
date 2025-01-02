const readline = require('node:readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const questions = [
    'What is your name?\n',
    'Where do you live?\n',
    'What are you going to do with Node.js?\n'
];

function collectAnswers(questions, done) {
    const answers = [];
    const questionAnswered = (answer) => {
        answers.push(answer.trim());
        if (answers.length < questions.length) {
            rl.question(questions[answers.length],questionAnswered);
        } else {
            return done(answers);
        }
    }
    rl.question(questions[0], questionAnswered);
}


collectAnswers(questions, (answers) => {
    answers.forEach(element => {
        console.log(element);
    });
    process.exit();
});

