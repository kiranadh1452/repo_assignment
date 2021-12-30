//constants values

//movement related
const INIT_VELOCITY = 2;
const INIT_GAME_SPEED = 2;
const SPEED_FACTOR = 0.002;
FLAPPING_EFFECT_SPEED = 0.1;
const ACCLERATION_G = 9.8065;

//dimension related
const INIT_TIME = 0;
const INIT_POSX = 50;
const PIPE_COUNT = 4;
const PIPE_GAP = 150;
const BIRD_WIDTH = 35;
const INIT_POSY = 150;
const PIPE_WIDTH = 50;
const BIRD_HEIGHT = 35;
const GAME_CONTAINER_HEIGHT = 800;
const GAME_CONTAINER_WIDTH =  1400;
const MAX_PIPE_HEIGHT = GAME_CONTAINER_HEIGHT - PIPE_GAP;

//different elements
const startBtn = _('.start-btn');
const restartBtn = _('.restart-btn');
const container = _('.main-container');
const gameContainer = _('.game-wrapper');
const scoreContainer = _('.score-container');

// assigning layout for main elements
container.style.height = `${GAME_CONTAINER_HEIGHT}px`;
gameContainer.style.width = `${GAME_CONTAINER_WIDTH}px`;
gameContainer.style.height = `${GAME_CONTAINER_HEIGHT}px`;

// global variables
let score = 0;
let indexPipe = 0;

//left margin for pipes
const pipePosArray = [];
for(let i=1; i<=PIPE_COUNT ; i++){
  pipePosArray.push((GAME_CONTAINER_WIDTH/PIPE_COUNT) * i);
}