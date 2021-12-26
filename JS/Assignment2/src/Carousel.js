class Carousel{

  constructor(properties){
    this.wrapper = document.getElementById(properties.imgWrapperId);
    this.images = document.getElementById(properties.imgContainer);
    this.imageWidth = properties.imageWidth;
    this.requiredTime = properties.requiredTime;
    this.delay = properties.delay * 1000;

    this.currentIndex = 0;
    this.dx = 0;
    this.animateSpeed = (this.imageWidth / this.requiredTime) / 10;

    this.startAnimation1;
    this.startAnimation2;
    this.i = 0;


    this.imageCount = this.images.children.length;

    for (this.i; this.i < this.imageCount; this.i++){
      this.image = this.images.children[this.i];
      this.image.style.left = `${this.i * this.imageWidth}px`;
    }

    this.arrowBtn1 = document.createElement('button');
    this.arrowBtn1.innerHTML = "&#9001;";
    this.arrowBtn1.classList.add('control-button', 'left-btn');
    this.wrapper.appendChild(this.arrowBtn1);
    this.arrowBtn1.onclick = function (){
                              this.dx = this.imageWidth;
                              this.currentIndex--;
                              if (this.currentIndex<0) this.currentIndex = this.imageCount-1;
                              this.leftClick();
                              this.updateDots();
                              this.resetTimer();

                            }.bind(this)
    
    this.arrowBtn2 = document.createElement('button');
    this.arrowBtn2.innerHTML = "&#9002;";
    this.arrowBtn2.classList.add('control-button', 'btn-right');
    this.wrapper.appendChild(this.arrowBtn2);
    this.arrowBtn2.onclick = function (){
                              this.dx = 0;
                              this.currentIndex = (this.currentIndex+1)%this.imageCount;
                              if(this.currentIndex == this.imageCount){
                                this.currentIndex = 0;
                              }
                              this.rightClick();
                              this.updateDots();
                              this.resetTimer()
                            }.bind(this)

    this.dotsContainer = document.createElement('div');
    this.wrapper.appendChild(this.dotsContainer);
    
    this.dotsContainer.classList.add('dots-container');
    this.dotSpecific = [];
    for (let count = 0; count < this.imageCount; count++) {
      this.dotSpecific[count] = document.createElement('button');
      this.dotSpecific[count].classList.add('dot-specific');
      this.dotsContainer.appendChild(this.dotSpecific[count]);
      this.dotSpecific[count].addEventListener('click', function (){
        this.images.style.left = `-${(this.imageWidth*(count))}px`;
        this.resetTimer();
        this.currentIndex = count;
        for(let i=0; i< this.imageCount; i++){
          if(i == count) this.dotSpecific[i].classList.add('dot-current');
          else this.dotSpecific[i].classList.remove('dot-current');
        }
      }.bind(this));
    }
    this.dotSpecific[0].classList.add('dot-current');
    this.updateDots();
    this.timer = setInterval(this.render.bind(this), this.delay);
    

  }
  render(){
    this.arrowBtn2.click();  
  }

  resetTimer(){
    clearInterval(this.timer);
    this.timer = setInterval(this.render.bind(this), this.delay);
  }

  leftClick(){
    this.startAnimation1 = window.requestAnimationFrame(this.leftClick.bind(this));

    if(this.dx <= 0){
      window.cancelAnimationFrame(this.startAnimation1);
      this.dx = 0;  
    }
    else{
      this.dx = this.dx - this.animateSpeed;
      this.dx = Math.max(this.dx, 0)
    }

    this.images.style.left = `-${(this.imageWidth*(this.currentIndex))+this.dx}px`;

  }


  rightClick(){
    this.startAnimation2 = window.requestAnimationFrame(this.rightClick.bind(this));

    if(this.dx >= this.imageWidth){
      window.cancelAnimationFrame(this.startAnimation2);
    }
    else{
      this.dx += this.animateSpeed;
      this.dx = Math.min(this.dx , this.imageWidth);
    }

    this.images.style.left = `-${(this.imageWidth*(this.currentIndex-1))+this.dx}px`;

  }

  updateDots(){
    for(let i=0; i< this.imageCount; i++){
      if(i == this.currentIndex) this.dotSpecific[i].classList.add('dot-current');
      else this.dotSpecific[i].classList.remove('dot-current');
    }
  }
}