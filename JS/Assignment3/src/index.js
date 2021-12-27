const ballContainer = document.getElementById("ball-container");

ballContainer.style.width = `${boundaryWidth}px`
ballContainer.style.height = `${boundaryHeight}px`



const ballCount = 1000;
const ballArray = [];

document.getElementById("btn").onclick = function () {
  ballContainer.innerHTML = "";
  for (let i = 0; i < ballCount; i++){
    ballRadius = getRandomInt(LOW_RADIUS, HIGH_RADIUS);
    const ball = new Ball(ballRadius, ballContainer, getColor());
    ballArray.push(ball);
    ball.move();
    ball.render();
  }
};