// factor by which the speed of the game will increase
const SPEED_FACTOR = 0.007;

/* For audio
let bgAudio = new Audio();
bgAudio.src = "";

let crashAudio = new Audio();
crashAudio.src = ""; */

// For manual adjustments of the game
const gameContainerWidth = 800;
const gameContainerHeight = (gameContainerWidth/930) *800;


const carLaneHeight = gameContainerHeight / 5 ;

// accessing the different elements of the game
const score = _('.score-container');
const startBtn = _('.start-btn');
const container = _('.main-container');
const gameContainer = _('.game-wrapper');

container.style.height = `${gameContainerHeight}px`;
gameContainer.style.width = `${gameContainerWidth}px`;
gameContainer.style.height = `${gameContainerHeight}px`;

