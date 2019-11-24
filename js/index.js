const cardsWrapper = document.querySelector('.cards-wrapper');
const buttonWrapper = document.querySelector('.btn-wrapper');

const startButton = document.getElementById('start-game');

const buttons = ['Magic', 'Show/Hide', 'Shuffle'];
const suits = ['hearts', 'spades', 'diamonds', 'clubs'];

let cards;

// Create an array with objects containing the value and the suit of each card
function createCards() {
  cards = [];
  suits.forEach((indivdualSuit) => {
    for (let i = 1; i <= 13; i += 1) {
      const cardObject = {
        value: i,
        suit: indivdualSuit,
      };

      cards.push(cardObject);
    }
  });
}

// For each dataObject, create a new card and append it to the DOM
function displayCards(arrayOfCreatedCards) {
  arrayOfCreatedCards.forEach((card, i) => {
    const positionFromLeft = i * 28;
    const cardElement = document.createElement('div');
    cardElement.setAttribute('data-value', card.value);
    cardElement.classList.add('card', `${card.suit}-${card.value}`);
    cardElement.style.left = `${positionFromLeft}px`;
    cardsWrapper.append(cardElement);
  });
}

// Function to handle the show and hide function required.

function handleShowButton() {
  if (!cardsWrapper.classList.contains('hidden')) {
    cardsWrapper.classList.add('hidden');
  } else {
    cardsWrapper.classList.remove('hidden');
  }
}

// Function used to remove all the Nodelist children which will be used to shuffle and reorder
function emptyAllCards() {
  const cardsWrapperEmpty = document.querySelector('.cards-wrapper');

  while (cardsWrapperEmpty.firstChild) {
    cardsWrapperEmpty.firstChild.remove();
  }
}

// Function used order all the cards

function handleMagicButton() {
  emptyAllCards();
  cards = [];
  createCards();
  displayCards(cards);
}

// function used to handle shuffle which uses the array method sort
// and a shuffle calculation found online

function handleShuffleButton() {
  emptyAllCards();
  const shuffleArray = cards.sort(() => Math.random() - 0.5);
  displayCards(shuffleArray);
}

// Function to clear out the initial button and create new buttons to play the game.

function createButtons() {
  // Inbuilt  Dom method which removes objects from the page
  startButton.remove();

  //  Creation of buttons using the forEach array methods
  buttons.forEach((indivdualButton) => {
    const button = document.createElement('div');
    button.classList.add('btn', 'btn-lg', 'btn-secondary');
    button.innerHTML = `${indivdualButton}`;

    buttonWrapper.appendChild(button);

    if (button.innerHTML === 'Magic') {
      button.addEventListener('click', handleMagicButton);
    }
    if (button.innerHTML === 'Show/Hide') {
      button.addEventListener('click', handleShowButton);
    }
    if (button.innerHTML === 'Shuffle') {
      button.addEventListener('click', handleShuffleButton);
    }
  });
}

// Function to start the game by clearing the wrapper, creating
// and appending the buttons and all the cards to the DOM
function startGame() {
  createButtons();
  createCards();
  displayCards(cards);
}

startButton.addEventListener('click', startGame);
