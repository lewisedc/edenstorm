const formHeader = document.querySelector('.quote-generator-header');
const startScreen = document.querySelector('.start-screen');
const startButton = document.querySelector('#start-button');
const questions = document.querySelectorAll('.form-question');
const formButtons = document.querySelector('.form-buttons');
const nextQuestionButton = formButtons.querySelector('button:last-of-type');
const lastQuestionButton = formButtons.querySelector('button:first-of-type');
const formDetails = document.querySelector('.form-details');

let question = 0;
let price = 0;

startButton.addEventListener('click', e => {
  e.preventDefault();
  start();
});

nextQuestionButton.addEventListener('click', e => {
  e.preventDefault();
  nextQuestion();
});

lastQuestionButton.addEventListener('click', e => {
  e.preventDefault();
  previousQuestion();
});

function start() {
  formHeader.style.display = 'none';
  startScreen.style.display = 'none';
  questions[question].style.display = 'block';
  formButtons.style.display = 'flex';

  question++;
}

function nextQuestion() {
  questions[question - 1].style.display = 'none';
  question++;

  if (question === 9) {
    end();
    return;
  }

  questions[question - 1].style.display = 'block';

  if (question > 1) {
    lastQuestionButton.disabled = false;
  }
}

function previousQuestion() {
  questions[question - 1].style.display = 'none';
  question--;
  questions[question - 1].style.display = 'block';

  if (question <= 1) {
    lastQuestionButton.disabled = true;
  }
}

function end() {
  formButtons.style.display = 'none';
  formDetails.style.display = 'flex';
}
