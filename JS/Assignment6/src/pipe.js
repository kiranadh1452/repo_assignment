//adding pipes to the scene
function addPipeToScene(){
  // for(let i=0; i<3; i++){
  //   pipePosArray.push((GAME_CONTAINER_WIDTH/3) * (i+1));
  // }
  
  for(let count = 0; count< PIPE_COUNT; count++){
    const pipe1Len = getRandomInt(150, MAX_PIPE_HEIGHT*0.92);

    addPipe(pipe1Len, "top");
    addPipe(MAX_PIPE_HEIGHT - pipe1Len, "bottom");
  
    indexPipe = (indexPipe+1) % pipePosArray.length;
  }
}



/*
  creates pipes and renders it to scene
  @param {integer} length: vertical length of the pipe
  @param {string} alignment: position - top or bottom
*/
function addPipe(length, alignment) {
  const pipe = document.createElement('div');

  if (alignment === "top") {
    pipe.style.top = `0px`;
    pipe.setAttribute('class', 'pipe pipeUp');
  }

  if (alignment === "bottom") {
    pipe.style.bottom = `0px`;
    pipe.setAttribute('class', 'pipe pipeDown');
  }

  pipe.x = pipePosArray[indexPipe];
  pipe.style.width = `${PIPE_WIDTH}px`;
  pipe.style.height = `${length}px`;
  pipe.style.left = `${pipe.x}px`;
  gameContainer.appendChild(pipe);

}


/*
  function to move the pipe in -x direction
  @param {Node} bird: the flappy bird element
*/
function movePipe(bird){
  const pipeList = __('.pipe');
  
  pipeList.forEach(pipe => {
    
    if(checkCollision(pipe, bird)){
      gameOver();
    }

    if(pipe.x < -1*(PIPE_WIDTH-1)){
      pipe.x = GAME_CONTAINER_WIDTH-(PIPE_WIDTH-1);
      score += 0.5;
    }

    pipe.x -= INIT_GAME_SPEED;
    pipe.style.left = `${pipe.x}px`;
    
  });
}
