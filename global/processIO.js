process.stdout.write('Hello \n\n');

const questions = [
    'What is your name?',
    'What would you rather be doing?',
    'what is your preferred programming language'
];

const answers = [];

function ask(i=0){
    process.stdout.write(`${questions[i]}`);
    process.stdout.write('>');
}

// questions.forEach((qusn) => {
//     ask(qusn);
// });

ask();

process.stdin.on('data',(data) =>{
    answers.push(data.toString().trim());
    if(answers.length < questions.length){
        ask(answers.length);
    }else{

        process.exit();
    }
});

process.on('exit',() =>{
    process.stdout.write('========= answers =========== \n');
    answers.forEach((val) => {
        process.stdout.write(`${val} \n\n`);    
    });    
});


