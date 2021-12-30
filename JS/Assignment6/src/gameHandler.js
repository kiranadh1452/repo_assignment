//function to handle the gameplay
function gamePlay() {
  let birdElement = _('.bird');

  if (gameStart) {

    document.addEventListener('keydown', handleKey);

    moveBird();
    movePipe(birdElement);
    time += 0.001;

    if(score>highScoreFlappy){
      highScoreFlappy = score;
    }

    window.requestAnimationFrame(gamePlay);
    scoreContainer.innerText = `${score}`;
  }

}

//function to handle the bird death
function gameOver() {
  time = 0;
  birdDeath();
  gameStart = false;
  birdVelocity = INIT_VELOCITY;
  startBtn.classList.remove('hide');
  document.removeEventListener("keydown", handleKey);
  localStorage.setItem('highestScore', highScoreFlappy);
  startBtn.innerHTML = `<p>Your Score : ${score} </p><p>Restart</p> <img src="assets/images/startButton.png" alt="play">
  <p>High Score : ${highScoreFlappy} </p> <p> Use Space Bar To JUMP</p>`;
}

//handling the key interaction
function handleKey(e) {
  let code = e.code;

  if (code == "Space") {
    birdVelocity = 0;
    time = 0;
    birdVelocity = -4;
  }

}
