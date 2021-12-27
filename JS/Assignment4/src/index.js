const antContainer = document.getElementById("ant-container");

antContainer.style.width = `${boundaryWidth}px`
antContainer.style.height = `${boundaryHeight}px`

const antCount = 50;
let antArray = [];

for (let i = 0; i < antCount; i++){
  const ant = new Ant(antRadius, antContainer);  
  antArray.push(ant);
}


let frame;
function renderWhole(){
  frame = window.requestAnimationFrame(renderWhole);
  for(ant of antArray){
    ant.render();
    ant.move();
  }
}
renderWhole();

const destruct = (ant) => {
  const updatedAnts = antArray.filter(( list , index) => ant !== index);
  antArray = updatedAnts;
};

antContainer.addEventListener('mousedown', (event) => {
  let x = event.x;
  let y = event.y;


  for (let i = 0; i < antArray.length; i++) {
    if (getDistance(x-antRadius, y-antRadius, antArray[i].x, antArray[i].y) <= antArray[i].radius) {
      antArray[i].ant.remove();
      destruct(i);
    }
  }
});