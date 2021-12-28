const carLeftPos = [100,400,700];
let posCar = getRandomInt(0,3);
let highScore;


function chkHighScore(){
    try{
        highScore = localStorage.getItem('highestScore');
    }
    catch(err){
        console.log(err);
        localStorage.setItem('highestScore', 0);
        highScore = 0;
    }
}


startBtn.addEventListener('click', () => {
    chkHighScore();
    gameContainer.classList.remove('hide');
    startBtn.classList.add('hide');
    gameContainer.innerHTML = "";

    gameSpeed = 8;
    gameStart = true;
    gameScore = 0;

    window.requestAnimationFrame(gamePlay);

    addRoadLane('roadLaneLeft');
    addRoadLane('roadLaneRight');

    let carElement = document.createElement('div');
    carElement.setAttribute('class', 'car');
    gameContainer.appendChild(carElement);
    carElement.style.left = carLeftPos[posCar] + "px";

    for(let count=0; count<3; count++){
        let enemyCar = document.createElement('div');
        enemyCar.setAttribute('class', 'enemyCar');
        enemyCar.y = ((count+1) * 500) * - 1;
        enemyCar.style.top = enemyCar.y + "px";
        enemyCar.style.color = getColor();
        enemyCar.style.left = carLeftPos[getRandomInt(0,3)] + "px";
        gameContainer.appendChild(enemyCar);

    }
});


function addRoadLane(laneSide){

    for(let i=0; i<5; i++){
        let roadLineElement = document.createElement('div');
        roadLineElement.setAttribute('class', laneSide);
        roadLineElement.y = (i*150);
        roadLineElement.style.top = roadLineElement.y + "px";
        gameContainer.appendChild(roadLineElement);
    }
}


function onCollision(a,b){
    aRect = a.getBoundingClientRect();
    bRect = b.getBoundingClientRect();

    return !((aRect.top >  bRect.bottom) || (aRect.bottom <  bRect.top) ||
        (aRect.right <  bRect.left) || (aRect.left >  bRect.right)); 
}


function onGameOver() {
    gameStart = false;
    startBtn.classList.remove('hide');
    localStorage.setItem('highestScore', highScore);
    startBtn.innerText = `Game Over\n Your final score is: ${gameScore}
                             Click to restart the game.\n\nCurrent High Score : ${highScore}`;
}


function moveLane(lineClass){
    let roadLines = document.querySelectorAll(lineClass);
    roadLines.forEach((item)=> {
        if(item.y >= 700){
            item.y -= 750;
        }
        item.y += gameSpeed;
        item.style.top = item.y + "px";
    });
}


function moveEnemyCars(carElement){
    let enemyCars = document.querySelectorAll('.enemyCar');
    enemyCars.forEach((item)=> {
        

        if(onCollision(carElement, item)){
            onGameOver();
        }
        if(item.y >= 700){
            item.y = -850;
            gameScore++;
            item.style.left = carLeftPos[getRandomInt(0,3)] + "px";
        }
        item.y += gameSpeed;
        item.style.top = item.y + "px";
    });
} 


function gamePlay() {
    const carElement = _('.car');
    let road = gameContainer.getBoundingClientRect();

    if(gameStart){
        moveLane('.roadLaneLeft');
        moveLane('.roadLaneRight');
        moveEnemyCars(carElement);
        
        carElement.style.left = carLeftPos[posCar] + "px";

        window.requestAnimationFrame(gamePlay);

        gameSpeed += (Math.random()*SPEED_FACTOR);

        if(gameScore > highScore) highScore = gameScore;

        score.innerText = `Highest Score : ${highScore}\nCurrent Score : ${gameScore}`;          
    }
}


const handleKey = (e) => {
    let code = e.code;
    if(code == "ArrowLeft" && posCar > 0) posCar-- ;
    if(code == "ArrowRight" && posCar <2) posCar++ ;
};

document.addEventListener('keydown', handleKey);