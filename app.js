import { answers } from './answers.js';

const answer = document.getElementById('answer');
const submitButton = document.getElementById('submit-button');
const twinkle = document.getElementById('twinkle');
const tryagainButton = document.getElementById('try-again-button');

submitButton.addEventListener('click', ()=>{
    const getRandomNumber = (max)=>{
        return Math.floor(Math.random() * max);
    };
    const randomAnswer = getRandomNumber(answers.length);
    const answerShown = answers[randomAnswer];
    answer.textContent = answerShown;
    answer.classList.remove('fade');
    twinkle.play();
    submitButton.style.display = 'none';
    tryagainButton.classList.remove('hidden');
});

tryagainButton.addEventListener('click', ()=>{
    document.location.reload(true);
});
