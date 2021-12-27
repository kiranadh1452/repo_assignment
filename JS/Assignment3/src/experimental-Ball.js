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

  this.speedX = getSpeed(this.radius);
  this.speedY = getSpeed(this.radius);

  this.ball.style.position = "absolute";
  this.ball.style.top = this.y + "px";
  this.ball.style.left = this.x + "px";

  this.render = function () {
    ballContainer.appendChild(this.ball);
  };

  this.move = function (){
    window.requestAnimationFrame(this.move.bind(this));

    this.x += this.speedX * this.dx;      
    this.y += this.speedY * this.dy;
    
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
        let dist = getDistance(ball.x + ball.radius , ball.y+ball.radius  , this.x+this.radius, this.y+this.radius);
        let netRad = ball.radius + this.radius;

        if(dist <= netRad){
          let diffDist = netRad - dist;

          //change direction.
          this.dx *= -1 ; //(this.speedX > ball.speedX)?this.dx: this.dx*(-1) ;
          this.dy *= -1 ; //(this.speedY > ball.speedY)?this.dy: this.dy*(-1) ;
          
          ball.dx *= -1 ; //(this.speedX > ball.speedX)?(ball.dx*(-1)): ball.dx ;
          ball.dy *= -1 ; //(this.speedX > ball.speedX)?(ball.dy*(-1)): ball.dy ;
      
      // Vector from center of this ball to other ball    
          //finding center of the current ball and other ball in contact
          this.centerX = this.x + this.radius;
          this.centerY = this.y + this.radius;
          ball.centerX = ball.x + ball.radius;
          ball.centerY = ball.y + ball.radius;

          //calculating the unit vector from centre of this ball to other ball in contact
          let diffVectX = (ball.centerX - this.centerX)/diffDist;
          let diffVectY = ball.centerY - this.centerY/diffDist;

      // Unit vector along the current movement direction
          //magnitude of current movement velocity
          let movementVectMag = Math.sqrt((this.speedX ** 2) + (this.speedY ** 2));
          let movementVectX = (this.speedX)/movementVectMag;
          let movementVectY = (this.speedY)/movementVectMag;

      // finding value of theta - angle between collision point vector and movement vector of current ball
          let angle = Math.acos((diffVectX*movementVectX) + (diffVectY*movementVectY));

      // changing the speed of current ball as per this angle of contact
          this.speedX *= Math.cos(angle);
          this.speedY *= Math.cos(angle);

      // chaning speed of other ball as per angle of contact
          ball.speedX *= Math.cos(angle);
          ball.speedY *= Math.cos(angle);


          //calculating displacements
          // ball.dx = ball.dx * -1;
          ball.x = ball.x + ((diffDist/netRad)*ball.radius*ball.dx);

          // this.dx = this.dx *-1;
          this.x = this.x + (((diffDist)/netRad)*this.radius*this.dx);

          // ball.dy = ball.dy * -1;
          ball.y = ball.y + (((diffDist)/netRad)*ball.radius*ball.dy);
          
          // this.dy = this.dy *-1;
          this.y = this.y + (((diffDist)/netRad)*this.radius*this.dy);
        }
      }
    });
  };

}