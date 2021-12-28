/*
  @param {number} min => minimum range (inclusive)
  @param {number} max => maximum range (exclusive)
  returns an {integer} between min and max
*/
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

// return a random color
function getColor(){
  let r = getRandomInt(0,255);
  let g = getRandomInt(0,255);
  let b = getRandomInt(0,255);
  return `rgb(${r}, ${g}, ${b})`;
}

/*
  @param {string}: selector of the element/s you want to get hold on.
  return the {List} of elements with coressponsing selector value.
*/
function _(selectorValue){
  return document.querySelector(selectorValue);
}

function __(selectorValue){
  return document.querySelectorAll(selectorValue);
}
