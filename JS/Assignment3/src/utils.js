const HIGH_RADIUS = 10;
const LOW_RADIUS = 2;

const LOW_SPEED = 5;
const HIGH_SPEED = 15;

const FPS = 60;

const boundaryWidth = 1500;
const boundaryHeight = 750;

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

function getDirection() {
  return Math.random() > 0.5 ? 1 : -1; //math.random generates a value between 0 and 1.
}

function getDistance(x1, y1, x2, y2) {
  return Math.sqrt(((x2 - x1) ** 2) + ((y2 - y1) ** 2));
}

function getColor(){
  let r = getRandomInt(0,255);
  let g = getRandomInt(0,255);
  let b = getRandomInt(0,255);
  return `rgb(${r}, ${g}, ${b})`;
}

//Smaller the size, higher the speed
function getSpeed(radius){
  let diff = HIGH_RADIUS - LOW_RADIUS;
  let factor = (HIGH_RADIUS -radius) / (HIGH_RADIUS - LOW_RADIUS);
  let requiredSpeed = factor * (HIGH_SPEED - LOW_SPEED);
  return Math.max(Math.floor(requiredSpeed), LOW_SPEED);
}