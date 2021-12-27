function Ant(radius, antContainer, c){

  this.limitX = boundaryWidth-2*radius;
  this.limitY = boundaryHeight-2*radius;

  this.ant = document.createElement("div");
  this.ant.classList.add("ant");
  this.ant.style.width = 2*radius + "px";
  this.ant.style.height = 2*radius + "px";
  this.ant.style.background = `url("assets/images/ant1.png")`;
  this.ant.style.backgroundSize = 'cover';

  this.radius = radius;
  this.x = getRandomInt(0, boundaryWidth-radius);
  this.y = getRandomInt(0, boundaryHeight-radius);

  this.dx = getDirection(); //+1 for right-direction motion and -1 for left-direction
  this.dy = getDirection(); //+1 for downwards motion and -1 for upwards

  this.speed = getSpeed(this.radius);

  this.ant.style.position = "absolute";
  this.ant.style.top = this.y + "px";
  this.ant.style.left = this.x + "px";

  this.render = function (){
    antContainer.appendChild(this.ant);
  };


  this.move = function (){
    this.x += this.speed * this.dx;      
    this.y += this.speed * this.dy;
    
    this.checkWallCollision();
    this.checkAntCollision();

    this.ant.style.top = this.y + "px";
    this.ant.style.left = this.x + "px";
  }

  this.checkWallCollision = function (){

    if (this.x < 0 || this.x >this.limitX) {
      this.dx = this.dx * -1;
      this.x = (this.x > 0) ? this.limitX : 1;
    }

    if (this.y <=0 || this.y>this.limitY) {
      this.dy = this.dy * -1;
      this.y = (this.y > 0) ? this.limitY : 1;
    }
  };

  this.checkAntCollision = function () {
    antArray.forEach((ant) => {
      if (ant !== this) {
        let dist = getDistance(ant.x+ant.radius , ant.y+ant.radius  , this.x+this.radius, this.y+this.radius);
        let netRad = ant.radius + this.radius;
        if(dist <= netRad){
          ant.dx = ant.dx * -1;
          ant.x = ant.x + (((netRad-dist)/netRad)*this.radius*ant.dx);

          this.dx = this.dx *-1;
          this.x = this.x + (((netRad-dist)/netRad)*ant.radius*this.dx);

          ant.dy = ant.dy * -1;
          ant.y = ant.y + (((netRad-dist)/netRad)*this.radius*ant.dy);
          
          this.dy = this.dy *-1;
          this.y = this.y + (((netRad-dist)/netRad)*ant.radius*this.dy);
        }
      }
    });
  };

}