/*
  Function to get a value in a given range
  @param {number} min => minimum range (inclusive)
  @param {number} max => maximum range (exclusive)
  returns {integer}
*/
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}


/*
  Function to return elements with a given selector value
  @param {string}: selector of the element/s you want to get hold on.
  return {List}
*/
function _(selectorValue){

  return document.querySelector(selectorValue);
}

function __(selectorValue){

  return document.querySelectorAll(selectorValue);
}


/*
Function to check if two elements collide
  @param {Rectangle} element1
  @param {Rectangle} element2
  returns {bool}
*/
function checkCollision(element1, element2){
  elem1Rect = element1.getBoundingClientRect();
  elem2Rect = element2.getBoundingClientRect();


  return !((elem1Rect.top >  elem2Rect.bottom) || (elem1Rect.bottom <  elem2Rect.top) ||
      (elem1Rect.right <  elem2Rect.left) || (elem1Rect.left >  elem2Rect.right)); 
}


/*
  @param {bird-Node} item
  returns {true} if {bird-Node} collides with the up-down wall
*/
function checkWallCollision(item){
  const y = item.posY;
  
  if( y<=0 || (y+BIRD_HEIGHT) >= GAME_CONTAINER_HEIGHT){

    return true;
  }

  return false;
}
