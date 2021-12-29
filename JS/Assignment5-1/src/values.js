// constants values

//container related
const gameContainerWidth = 800;
const gameContainerHeight = (gameContainerWidth/930) *800;

//related
INITIAL_SPEED = 8;
const SPEED_FACTOR = 0.002;
const carLeftPos = [10.75268, 43.0107 ,75.2688];

//stripes - white vertical bars
const carLaneHeight = gameContainerHeight / 5 ;

//variables
let gameScore = 0;
let bulletCount = 0;
let shotStatus = false;
let gameSpeed = INITIAL_SPEED;
let posCar = getRandomInt(0,3);

//different elements
const startBtn = _('.start-btn');
const score = _('.score-container');
const container = _('.main-container');
const gameContainer = _('.game-wrapper');
const bulletCountHolder = _('.bullet-number');

// assigning layout for main elements
container.style.height = `${gameContainerHeight}px`;
gameContainer.style.width = `${gameContainerWidth}px`;
gameContainer.style.height = `${gameContainerHeight}px`;

/* For audio
let bgAudio = new Audio();
bgAudio.src = "../assets/audio/bg-audio";

let crashAudio = new Audio();
crashAudio.src = ""; */
