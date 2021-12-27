function Ball(radius, ballContainer, bgColor){

  this.limitX = boundaryWidth-2*radius;
  this.limitY = boundaryHeight-2*radius;

  this.ball = document.createElement("div");
  this.ball.classList.add("ball");
  this.ball.style.width = 2*radius + "px";
  this.ball.style.height = 2*radius + "px";
  this.ball.style.background = bgColor;

  this.radius = radius;
  this.x = getRandomInt(0, boundaryWidth-radius);
  this.y = getRandomInt(0, boundaryHeight-radius);

  this.dx = getDirection(); //+1 for right-direction motion and -1 for left-direction
  this.dy = getDirection(); //+1 for downwards motion and -1 for upwards

  this.speed = getSpeed(this.radius);

  this.ball.style.position = "absolute";
  this.ball.style.top = this.y + "px";
  this.ball.style.left = this.x + "px";

  this.render = function () {
    ballContainer.appendChild(this.ball);
  };

  this.move = function (){
    window.requestAnimationFrame(this.move.bind(this));

    this.x += this.speed * this.dx;      
    this.y += this.speed * this.dy;
    
    this.checkWallCollision();
    this.checkBallCollision();

    this.ball.style.top = this.y + "px";
    this.ball.style.left = this.x + "px";
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

  this.checkBallCollision = function () {
    ballArray.forEach((ball) => {
      if (ball !== this) {
        let dist = getDistance(ball.x+ball.radius , ball.y+ball.radius  , this.x+this.radius, this.y+this.radius);
        let netRad = ball.radius + this.radius;
        if(dist <= netRad){
          ball.dx = ball.dx * -1;
          ball.x = ball.x + ((((netRad-dist)/netRad)*this.radius + 1)*ball.dx);

          this.dx = this.dx *-1;
          this.x = this.x + ((((netRad-dist)/netRad)*ball.radius + 1)*this.dx);

          ball.dy = ball.dy * -1;
          ball.y = ball.y + ((((netRad-dist)/netRad)*this.radius + 1)*ball.dy);
          
          this.dy = this.dy *-1;
          this.y = this.y + ((((netRad-dist)/netRad)*ball.radius + 1)*this.dy);
        }
      }
    });
  };

}