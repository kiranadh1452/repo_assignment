const birdRotate = [];
let indexBird = 0;

//creates the flappy bird
function createFlappyBird() {
  const birdElement = document.createElement('div');

  birdElement.posY = initPosY;
  birdElement.posX = initPosX;

  birdElement.style.top = `${birdElement.posY}px`;
  birdElement.style.left = `${birdElement.posX}px`;
  birdElement.setAttribute('class', 'bird');
  birdElement.style.width = `${birdWidth}px`;
  birdElement.style.height = `${birdHeight}px`;

  gameContainer.appendChild(birdElement);
}

//moves the bird downwards in response to gravity
function moveBird(){
  const birdElement = _('.bird');
  
  birdVelocity += (ACCLERATION_G *time);
  birdElement.posY += birdVelocity;
  birdElement.style.top = `${birdElement.posY}px`;

  if(birdVelocity > 0){
    birdElement.style.transform = `rotate(${birdVelocity*2.5}deg)`;
  }

  else{
    birdElement.style.transform = `rotate(${birdVelocity*5}deg)`;
  }

  if(checkWallCollision(birdElement)) gameOver();

  // else{
  //   setInterval(() => {
  //     let urlValue = birdImage[indexBird];
  //     birdElement.style.backgroundImage = `${urlValue}`;
  //     indexBird = (indexBird+1) % birdImage.length;
  //   }, 1000);
  // }

}

//function that animates the death of bird 
function birdDeath(){
  const bird = _('.bird');
  bird.style.transform = "rotate(90deg)";

  let deathFrame = window.requestAnimationFrame(birdDeath);

  if(bird.posY >= gameContainerHeight-birdHeight){
    cancelAnimationFrame(deathFrame);
    return;
  }

  bird.posY += 20;
  bird.posY = Math.min(bird.posY, gameContainerHeight-birdHeight);
  bird.style.top = `${bird.posY}px`;

  
}