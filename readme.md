# Project Approach 

### Planning 
Once I had completed my set up, I spent some time trying to fully understand the requirements for the project. My approach of execution was as follows: 
- Install all the dependiences as instructed in the Readme.
- Read through the index.js and index.html and tried to understand what the classes were responsible for and whether I had to take any of this into consideration. 
- Identified places where arrays and array methods could be used to prevent duplication of code.
- Identified places where I could re use and re work some of the already exisiting code. 
- Implement small pieces of code and tested in browser.
- Ran some of the test in Cypress test suite. 
- Refractored my code to ensure all tests pass. 
- Added in extra tests


### Technologies Used
- HTML5
- CSS3
- JavaScript (ES6)
- Cypress(testing)


### Wins 

- Identifying how to make my code efficent.
- Exposure to the Cypress test suite, making all of the tests pass. 
- Reading the Cypress documentation and writing some of my own tests.  
- Completed some of the bonus tasks.

### Blockers 
- Not being able to complete all of the bonus tasks within the allocated time. 



# Smart Magic Cards
Join Smart by performing a simple magic trick.

### Requirements
- Make sure all 4 suits of cards are rendered. There are 13 cards in each suit (♥,   ♣, ♦, ♠).
- Make sure the value for each card is visible on the initial render, basically move each card a bit so the card is readable.
- Add 3 buttons to the flow that will do 3 actions:
  - **Shuffle:** Randomly shuffles all cards.
  - **Show/Hide:** Hide all the cards by adding a class (CSS is already included).
  - **Magic:** Order the cards again by suit.
- When performing the trick, use the existing cards rather then create new ones.

#### Bonus points
  - Find a way to remove duplications in the `cards.scss` file and generate all the classes automatically for the cards: `.hearts-1`, `.hearts-2`, ... , `.spades-13`.
  - Add animation.
  - Do not use images for the cards, style them with CSS/SCSS only.
  - Uncomment the tests in the `cypress/integration/magic-trick.js` file and **make sure the tests pass**.
  - Add additional tests (we like test coverage).
  - Add some extra functionality, this is your chance to be creative. 😉

#### Example
<img src="assets/working-example.gif" alt="working-example">

## Getting Started
Follow these steps to get the project setup on your machine.

### Clone the repository
```
git clone git@github.com:smartpension/smart-magic-cards.git
```
_Note:_ You won't have access to commit to this repository. We suggest you download it or fork it.

<img src="assets/fork-example.png" alt="working-example" width="800">

### Install
```
yarn install
```

### Develop
In order to use the SASS compiler, run the following command.
```
yarn develop
```

### Test
In order to run the tests, run the folowing command.
```
yarn test
```
_Note:_ [Cypress.io](https://www.cypress.io/) is included in the project and all tests will run on Travis CI.
