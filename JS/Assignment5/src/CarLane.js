
let posCar = getRandomInt(0,3);
let highScore;

//checks if there is a localstorage for highscore
function chkHighScore(){
    try{
        highScore = localStorage.getItem('highestScore');
    }
    catch(err){
        localStorage.setItem('highestScore', 0);
    }
    finally{
        if(highScore == null) highScore = 0;
    }
} 

//on clicking game start
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

    createCar();
    createEnemyCar();
});


//creates user's car
function createCar(){
    let carElement = document.createElement('div');
    carElement.setAttribute('class', 'car');
    gameContainer.appendChild(carElement);
    carElement.style.left = carLeftPos[posCar] + "%";
}


//creates enemy cars  
function createEnemyCar(){
    for(let count=0; count<3; count++){
        let enemyCar = document.createElement('div');
        enemyCar.setAttribute('class', 'enemyCar');
        enemyCar.y = ((count+1) * 500) * - 1;
        enemyCar.style.top = enemyCar.y + "px";
        enemyCar.style.color = getColor();
        enemyCar.style.left = carLeftPos[getRandomInt(0,3)] + "%";
        gameContainer.appendChild(enemyCar);
    }
}


/*
    @param user's-car-node {carElement}
*/
function moveEnemyCars(carElement){
    let enemyCars = document.querySelectorAll('.enemyCar');
    enemyCars.forEach((item)=> {        

        if(onCollision(carElement, item)){
            onGameOver();
        }

        if(item.y >= 700){
            item.y = -850;
            gameScore++;
            item.style.left = carLeftPos[getRandomInt(0,3)] + "%";
        }
        item.y += gameSpeed;
        item.style.top = item.y + "px";
    });
} 


//adds road stripes into the screen
function addRoadLane(laneSide){
    for(let i=0; i< 7; i++){
        let roadLineElement = document.createElement('div');
        roadLineElement.setAttribute('class', laneSide);
        roadLineElement.y = (i* carLaneHeight);
        roadLineElement.style.top = roadLineElement.y + "px";
        gameContainer.appendChild(roadLineElement);
    }
}


//moves the stripes with gamaspeed
function moveLane(lineClass){
    let roadLines = document.querySelectorAll(lineClass);

    roadLines.forEach((item)=> {
        if(item.y >= gameContainerHeight){
            item.y -= (gameContainerHeight*1.3);
        }

        item.y += gameSpeed;
        item.style.top = item.y + "px";
    });
}


/*
    @param ObjectA {a}
    @param ObjectB {b}
    return {true} if a and b collide
*/
function onCollision(a,b){
    aRect = a.getBoundingClientRect();
    bRect = b.getBoundingClientRect();

    return !((aRect.top >  bRect.bottom) || (aRect.bottom <  bRect.top) ||
        (aRect.right <  bRect.left) || (aRect.left >  bRect.right)); 
}


// game ending scenario handling
function onGameOver() {
    gameStart = false;
    startBtn.classList.remove('hide');
    localStorage.setItem('highestScore', highScore);
    startBtn.innerText = `Game Over\n Your final score is: ${gameScore}
                             Click to restart the game.\n\nCurrent High Score : ${highScore}`;
}


// game started by user
function gamePlay() {
    const carElement = _('.car');
    let road = gameContainer.getBoundingClientRect();

    if(gameStart){
        moveLane('.roadLaneLeft');
        moveLane('.roadLaneRight');
        moveEnemyCars(carElement);
        
        carElement.style.left = carLeftPos[posCar] + "%";
        window.requestAnimationFrame(gamePlay);
        gameSpeed += (Math.random()*SPEED_FACTOR);
        if(gameScore > highScore) highScore = gameScore;

        score.innerText = `Highest Score : ${highScore}\nCurrent Score : ${gameScore}`;          
    }
}


//controlling the user car with left and right arrow keys
const handleKey = (e) => {
    let code = e.code;
    if(code == "ArrowLeft" && posCar > 0) posCar-- ;
    if(code == "ArrowRight" && posCar <2) posCar++ ;
};

document.addEventListener('keydown', handleKey);
