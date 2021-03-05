
const cardsArray = [
	{
		name: 'paddyscard',
		img: 'images/paddyscard.jpg',
	},
	{
		name: 'paddyscard',
		img: 'images/paddyscard.jpg',
	},
	{
		name: 'clover',
		img: 'images/clover.jpg',
	},
	{
		name: 'clover',
		img: 'images/clover.jpg',
	},
	{
		name: 'beer',
		img: 'images/beer.jpg',
	},
	{
		name: 'beer',
		img: 'images/beer.jpg',
	},
	{
		name: 'cheers',
		img: 'images/cheers.jpg',
	},
	{
		name: 'cheers',
		img: 'images/cheers.jpg',
	},
	{
		name: 'rainbow',
		img: 'images/rainbow.jpg',
	},
	{
		name: 'rainbow',
		img: 'images/rainbow.jpg',
	},
	{
		name: 'clover cookies',
		img: 'images/clover_cookies.jpg',
	},
	{
		name: 'clover cookies',
		img: 'images/clover_cookies.jpg',
	},
];

// attach grid container to the board
const gameBoard = document.querySelector('.grid-container');
// these need to be set to empty arrays so nothing is hard set to them
let cardPicked = [];
let cardPickedImg = [];
let matchesWon = [];
let click = 0;
// add a scoreboard to keep score
const playerScore = document.querySelector('#score');



// make function for the board
function board() {

/************* 
* Card sorting 
**************/

// set a Math.random function to mix up cards
    cardsArray.sort(function () {
	return 0.5 - Math.random();
});
/********************************
 * Setting up the board and cards
 *******************************/

	//maybe for loop? to loop through the cards
	for (let i = 0; i < cardsArray.length; i++) {
		let card = document.createElement('img');
		// set attribute of the card to the back(shamrock img) of the card
		card.setAttribute('src', 'images/shamrock');
		card.setAttribute('data-id', i);
		// add event listener to listen for click to flip the card over
		card.addEventListener('click', flipCard);
		// need to append cards to the game
        gameBoard.appendChild(card);
        
	}
}

/**********************
 * Checking for matches
 *********************/

//function to check for matches
function checkForMatches() {
	let matchCard = document.querySelectorAll('img');
	// first and second value in my array
	const card1 = cardPickedImg[0];
	const card2 = cardPickedImg[1];
	// console.log(card1, card2)
	// if statement
	if (cardPicked[0] === cardPicked[1]) {
		// if this is true, then set " "
        matchCard[card1].setAttribute('src', '');
        matchCard[card2].setAttribute('src', '');
		// add alert to tell you when you found a match
		alert('You found matching cards!');
		matchesWon.push(cardPicked);
        
		// else statement
	} else {
		// else the cards don't match flip them back over (shamrock img)
		matchCard[card1].setAttribute('src', 'images/shamrock.jpg');
		matchCard[card2].setAttribute('src', 'images/shamrock.jpg');
	}

	// clear the unmatched cards
	cardPicked = [];
    cardPickedImg = [];

    playerScore.textContent = matchesWon.length
    if (matchesWon.length === cardsArray.length/2) {
    playerScore.textContent =  'You won!'
}
}

/********************
 * Flipping the cards
 *******************/

    // make function to flip cards over
function flipCard(event) {
	let cardType = event.target.getAttribute('data-id');
	// push cards after being flipped
	cardPicked.push(cardsArray[cardType].name);
	cardPickedImg.push(cardType);
	event.target.setAttribute('src', cardsArray[cardType].img);
	// console.log(event.target);
	// console.log(cardPickedImg)
	click++;
	if (click > 0 && click % 2 === 0) {
		setTimeout(checkForMatches, 500);
	}
}
    // invoke function
    board();

/************************
 * restarting a new game
 ************************/

    // add new game button
const newGAmeButton = document.querySelector('button');
newGAmeButton.addEventListener('click', restartGame);
function restartGame() {
    gameBoard.innerHTML = '';
    board();
}