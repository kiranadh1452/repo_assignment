// factor by which the speed of the game will increase
const INITIAL_SPEED = 8;
const SPEED_FACTOR = 0.007;

/* For audio
let bgAudio = new Audio();
bgAudio.src = "../assets/audio/bg-audio";

let crashAudio = new Audio();
crashAudio.src = ""; */

//Car position in the three lanes - in percentange
const carLeftPos = [10.75268, 43.0107 ,75.2688];

// For manual adjustments of the game
const gameContainerWidth = 800;
const gameContainerHeight = (gameContainerWidth/930) *800;


const carLaneHeight = gameContainerHeight / 5 ;

// accessing the different elements of the game
const score = _('.score-container');
const startBtn = _('.start-btn');
const container = _('.main-container');
const gameContainer = _('.game-wrapper');

// assigning layout for main elements
container.style.height = `${gameContainerHeight}px`;
gameContainer.style.width = `${gameContainerWidth}px`;
gameContainer.style.height = `${gameContainerHeight}px`;
