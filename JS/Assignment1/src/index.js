let currentIndex = 0;

let interval;
let dx = 0;

const wrapper = document.getElementById("wrapper");
const images = document.getElementById("images");

const imageWidth = 500;
const imageCount = images.children.length;

const requiredTime = 5; //what should the tansition time be in seconds
let animateSpeed = (imageWidth / requiredTime) /10;

images.style.width = `${imageCount * imageWidth}px`;

for (let i = 0; i < imageCount; i++) {
  const image = images.children[i];
  image.style.left = `${i * imageWidth}px`;
}

const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

let arrowBtn1 = document.createElement('button');
arrowBtn1.innerHTML = "&#9001;";
arrowBtn1.classList.add('control-button', 'left-btn');
wrapper.appendChild(arrowBtn1);

let arrowBtn2 = document.createElement('button');
arrowBtn2.innerHTML = "&#9002;";
arrowBtn2.classList.add('control-button', 'btn-right');
wrapper.appendChild(arrowBtn2);

let startAnimation, startAnimation1; //animations frame for left and right slides

//Left slide button
arrowBtn1.onclick = function(){
  dx = imageWidth;
  currentIndex--;
  if (currentIndex<0) currentIndex = imageCount-1;
  left_slide();
  updateDots();
}

function left_slide() {
  startAnimation1 = window.requestAnimationFrame(left_slide);

  if(dx <= 0){
    window.cancelAnimationFrame(startAnimation1);
    dx = 0;  
  }
  else{
    dx = dx - animateSpeed;
    dx = Math.max(dx, 0)
  }
  images.style.left = `-${(imageWidth*(currentIndex))+dx}px`;
}

//right slide button
arrowBtn2.onclick = function(){
  dx = 0;
  currentIndex = (currentIndex+1)%imageCount;
  if(currentIndex == imageCount){
    currentIndex = 0;
  }
  right_slide();
  updateDots();
}

function right_slide() {
  startAnimation = window.requestAnimationFrame(right_slide);

  if(dx >= imageWidth){
    window.cancelAnimationFrame(startAnimation);
  }
  else{
    dx += animateSpeed;
    dx = Math.min(dx , imageWidth);
  }
  images.style.left = `-${(imageWidth*(currentIndex-1))+dx}px`;
}

let dotsContainer = document.createElement('div');
wrapper.appendChild(dotsContainer);

dotsContainer.classList.add('dots-container');
let dotSpecific = [];
for (let count = 0; count < imageCount; count++) {
  dotSpecific[count] = document.createElement('button');
  dotSpecific[count].classList.add('dot-specific');
  dotsContainer.appendChild(dotSpecific[count]);
  dotSpecific[count].addEventListener('click', function (){
    images.style.left = `-${(imageWidth*(count))}px`;
    currentIndex = count;
    for(let i=0; i< imageCount; i++){
      if(i == count) dotSpecific[i].classList.add('dot-current');
      else dotSpecific[i].classList.remove('dot-current');
    }
  });
}
dotSpecific[0].classList.add('dot-current');

function updateDots(){
  for(let i=0; i< imageCount; i++){
    if(i == currentIndex) dotSpecific[i].classList.add('dot-current');
    else dotSpecific[i].classList.remove('dot-current');
  }
}
