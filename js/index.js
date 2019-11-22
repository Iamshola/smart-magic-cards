const suit = 'hearts';
const cardsWrapper = document.querySelector('.cards-wrapper');
const buttonWrapper = document.querySelector('.btn-wrapper');
const buttons = ['Magic', 'Show/Hide', 'Shuffle'];
const startButton = document.getElementById('start-game');
const suits = ['hearts', 'spades', 'diamonds', 'clubs'];

const cards = [];

function createCards() {
  // Create an array with objects containing the value and the suit of each card
  suits.forEach((indivdualSuit) => {
    for (let i = 1; i <= 13; i += 1) {
      const cardObject = {
        value: i,
        suit: indivdualSuit,
      };

      cards.push(cardObject);
    }
  });

  // For each dataObject, create a new card and append it to the DOM
  cards.forEach((card, i) => {
    const positionFromLeft = i * 25;
    const cardElement = document.createElement('div');
    cardElement.setAttribute('data-value', card.value);
    cardElement.classList.add('card', `${card.suit}-${card.value}`);
    cardElement.style.left = `${positionFromLeft}px`;
    cardsWrapper.append(cardElement);
  });
}

// Function to clear out the initial button and create new buttons to play the game.
function createButtons() {
  // Your Code
  startButton.remove();

  buttons.forEach((indivdualSuit) => {
    const button = document.createElement('div');
    button.classList.add('btn', 'btn-lg', 'btn-secondary');
    button.innerHTML = `${indivdualSuit}`;
    buttonWrapper.appendChild(button);
  });
}

// Function to start the game by clearing the wrapper, creating
// and appending the buttons and all the cards to the DOM
function startGame() {
  createButtons();
  createCards();
}

document.getElementById('start-game').addEventListener('click', startGame);
