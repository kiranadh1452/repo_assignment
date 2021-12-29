//constants values

//dimension related
const initTime = 0;
const pipeGap = 150;
const initPosX = 50;
const initPosY = 50;
const birdWidth = 35;
const pipeWidth = 50;
const birdHeight = 35;
const pipeCountScene = 3;
const gameContainerHeight = 800;
const gameContainerWidth =  1000;
const maxPipeHeight = gameContainerHeight - pipeGap;
const pipePosArray = [gameContainerWidth/3, gameContainerWidth*2/3, gameContainerWidth];

//movement related
const INIT_VELOCITY = 2;
const INIT_GAME_SPEED = 2;
const SPEED_FACTOR = 0.002;
const ACCLERATION_G = 9.8065;

//different elements
const startBtn = _('.start-btn');
const restartBtn = _('.restart-btn');
const container = _('.main-container');
const gameContainer = _('.game-wrapper');
const scoreContainer = _('.score-container');

// assigning layout for main elements
container.style.height = `${gameContainerHeight}px`;
gameContainer.style.width = `${gameContainerWidth}px`;
gameContainer.style.height = `${gameContainerHeight}px`;

// global variables
let score = 0;
let indexPipe = 0;