const birdImage = ["url('../assets/images/bird1.png')", "url('../assets/images/bird2.png')", "url('../assets/images/bird3.png')"];
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

  if(checkWallCollision(birdElement)) gameOver();

  // else{
  //   setInterval(() => {
  //     let urlValue = birdImage[indexBird];
  //     birdElement.style.backgroundImage = `${urlValue}`;
  //     console.log(urlValue);
  //     indexBird = (indexBird+1) % birdImage.length;
  //   }, 1000);
  // }

}

