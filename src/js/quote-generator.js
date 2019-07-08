const formHeader = document.querySelector('.quote-generator-header');
const startScreen = document.querySelector('.start-screen');
const startButton = document.querySelector('#start-button');
const questions = document.querySelectorAll('.form-question');
const options = document.querySelectorAll('form input');
const formButtons = document.querySelector('.form-buttons');
const nextQuestionButton = formButtons.querySelector('button:last-of-type');
const priceDisplay = formButtons.querySelector('p');
const lastQuestionButton = formButtons.querySelector('button:first-of-type');
const formDetails = document.querySelector('.form-details');
const finalPriceDisplay = document.querySelector('.final-price');

const state = {
  website: false,
  android: false,
  ios: false,
  accounts: null,
  payments: null,
  cms: null,
  logo: null,
  designs: null,
  marketing: null,
  pages: null
};

let question = 0;
let price = 0;

startButton.addEventListener('click', e => {
  e.preventDefault();
  start();
});

options.forEach(option => {
  option.addEventListener('change', optionClicked);
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

function optionClicked(e) {
  if (e.target.type === 'radio') {
    state[e.target.name] = e.target.value;
  }

  if (e.target.type === 'checkbox') {
    state[e.target.value] = e.target.checked;
  }

  calculateTotal();
}

function calculateTotal() {
  price = 0;

  if (state.website) price += 1200;
  if (state.android) price += 1200;
  if (state.ios) price += 1200;
  if (state.accounts === 'yes') price += 2000;
  if (state.payments === 'yes') price += 2500;
  if (state.cms === 'yes') price += 1000;
  if (state.logo === 'yes') price += 800;
  if (state.designs === 'yes') price += 800;
  // if (state.marketing === 'yes') price += 800;
  if (state.pages === '1-3') price += 0;
  if (state.pages === '4-9') price += 800;
  if (state.pages === '10+') price += 1600;

  priceDisplay.innerText = `£${price}`;
  finalPriceDisplay.innerHTML = `£${price - 1000} - £${price + 1000}`;
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
