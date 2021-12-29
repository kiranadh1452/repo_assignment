// on clicking the gamestart button

startBtn.addEventListener('click', () => {
  chkHighScore();

  score = 0;
  time = initTime;
  gameStart = true;
  gameSpeed = INIT_GAME_SPEED;
  birdVelocity = INIT_VELOCITY;
  gameContainer.innerHTML = "";
  startBtn.classList.add('hide');
  gameContainer.classList.remove('hide');    

  addPipeToScene();
  createFlappyBird();
  window.requestAnimationFrame(gamePlay);

});

