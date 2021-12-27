const ballContainer = document.getElementById("ball-container");

ballContainer.style.width = `${boundaryWidth}px`
ballContainer.style.height = `${boundaryHeight}px`

const ballCount = 10;
const ballArray = [];

let toogle = false;

document.getElementById("btn").onclick = function () {
  
  toogle = !toogle;

  if(!toogle){
    ballContainer.innerHTML = "";

    while(ballArray.length >0 ){
      ballArray.pop();
    }
  }

  else{
    for (let i = 0; i < ballCount; i++){
      ballRadius = getRandomInt(LOW_RADIUS, HIGH_RADIUS);
      const ball = new Ball(ballRadius, ballContainer, getColor());
      
      ballArray.push(ball);
      
      ball.move();
      ball.render();
    }
  }
};