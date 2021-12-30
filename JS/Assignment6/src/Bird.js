let indexBird = 0;
const birdImg = ["bird1","bird2","bird3"]; //array containing the sprites of the bird

//creates the flappy bird
function createFlappyBird() {
  const birdElement = document.createElement('div');

  birdElement.posY = INIT_POSY;
  birdElement.posX = INIT_POSX;

  birdElement.style.top = `${birdElement.posY}px`;
  birdElement.style.left = `${birdElement.posX}px`;
  birdElement.setAttribute('class', 'bird');
  birdElement.style.width = `${BIRD_WIDTH}px`;
  birdElement.style.height = `${BIRD_HEIGHT}px`;

  gameContainer.appendChild(birdElement);
}

//moves the bird downwards in response to gravity
function moveBird(){
  const birdElement = _('.bird');
  
  // v = u + g*t
  birdVelocity += (ACCLERATION_G *time);
  birdElement.posY += birdVelocity;
  birdElement.style.top = `${birdElement.posY}px`;

  //rotate the bird as per its moving direction
  if(birdVelocity > 0){
    birdElement.style.transform = `rotate(${birdVelocity*2.5}deg)`;
  }

  else{
    birdElement.style.transform = `rotate(${birdVelocity*5}deg)`;
  }

  if(checkWallCollision(birdElement)){    
    gameOver();
  }

  //Switches between the sprites of the bird for flapping effect
  indexBird = (indexBird+ FLAPPING_EFFECT_SPEED) % (birdImg.length-1);
  let intIndexBird = Math.floor(indexBird);

  birdElement.style.backgroundImage = `url('./assets/images/${birdImg[intIndexBird]}.png')`;
  birdElement.style.backgroundRepeat = "no-repeat";
  birdElement.style.backgroundRepeat = "100% 100%";
  birdElement.style.width = `${BIRD_WIDTH}px`;
  birdElement.style.height = `${BIRD_HEIGHT}px`;  
}

//function that animates the death of bird 
function birdDeath(){

  const bird = _('.bird');
  bird.style.transform = "rotate(90deg)";

  let deathFrame = window.requestAnimationFrame(birdDeath);

  if(bird.posY >= GAME_CONTAINER_HEIGHT-BIRD_HEIGHT){
    cancelAnimationFrame(deathFrame);
    return;
  }

  bird.posY += 20;
  bird.posY = Math.min(bird.posY, GAME_CONTAINER_HEIGHT-BIRD_HEIGHT);
  bird.style.top = `${bird.posY}px`;  
}

