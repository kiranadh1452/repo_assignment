// factor by which the speed of the game will increase
const SPEED_FACTOR = 0.007;

// let bgAudio = new Audio();
// bgAudio.src = "";

// let crashAudio = new Audio();
// crashAudio.src = "";

// For manual adjustments of the game
const carWidth = 128;
const carHeight = 120;
const wrapperHeight = 800;
const containerHeight = 800;
const LaneSeperatorWidth = 15;
const LaneSeperatorHeight = 100;

// accessing the different elements of the game
const score = _('.score-container');
const startBtn = _('.start-btn');
const container = _('.main-container');
const gameContainer = _('.game-wrapper');