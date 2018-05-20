var canvas, ctx, w, h;
	  var xMonster1 = 10;
	  var xMonster2 = 10;
	  var yMonster1 = 115;
	  var yMonster2 = 220;
	  var monsterSpeed = 1;
	  var ball = {
		  x: 100,
		  y:100,
		  radius: 15,
		  color:'green',
		  speedX:2,
		  speedY:1
		}
	  window.onload = init;
	  
	  function init(){
		canvas = document.querySelector('#myCanvas');
		w = canvas.width;
		h = canvas.height;
		ctx = canvas.getContext('2d');
		
		drawFilledRectangle(0, 0, 20, 20, "red");
  		drawFilledCircle(100, 100, 15, "green");
		drawFilledCircle(ball);
		
		loopHorizontal1();
		loopHorizontal2();
		loopBall1();
	  }
	function drawFilledCircle(c) {
		// GOOD practice: save the context, use 2D trasnformations
		ctx.save();
	  
		// translate the coordinate system, draw relative to it
		ctx.translate(c.x, c.y);
	  
		ctx.fillStyle = c.color;
		// (0, 0) is the top left corner of the monster.
		ctx.beginPath();
		ctx.arc(0, 0, c.radius, 0, 2*Math.PI);
		ctx.fill();
	 
		// GOOD practice: restore the context
		ctx.restore();
	}
	function moveBall(b) {
	  b.x += b.speedX;
	  b.y += b.speedY;
	  
	  testCollisionBallWithWalls(b);
	}
	function testCollisionBallWithWalls(b) {
		// COLLISION WITH VERTICAL WALLS ?
		if((b.x + b.radius) > w) {
		// the ball hit the right wall
		// change horizontal direction
		b.speedX = -b.speedX;
		
		// put the ball at the collision point
		b.x = w - b.radius;
	  } else if((b.x -b.radius) < 0) {
		// the ball hit the left wall
		// change horizontal direction
		b.speedX = -b.speedX;
		
		// put the ball at the collision point
		b.x = b.radius;
	  }
	  
	  // COLLISIONS WTH HORIZONTAL WALLS ?
	  // Not in the else as the ball can touch both
	  // vertical and horizontal walls in corners
	  if((b.y + b.radius) > h) {
		// the ball hit the right wall
		// change horizontal direction
		b.speedY = -b.speedY;
		
		// put the ball at the collision point
		b.y = h - b.radius;
	  } else if((b.y -b.radius) < 0) {
		// the ball hit the left wall
		// change horizontal direction
		b.speedY = -b.speedY;
		
		// put the ball at the collision point
		b.Y = b.radius;
	  }  
	}
	function drawFilledRectangle(x, y, width, height, color){
		// GOOD practice: save the context, use 2D trasnformations
		ctx.save();	  
		// translate the coordinate system, draw relative to it
		ctx.translate(x, y);	  
		ctx.fillStyle = color;
		// (0, 0) is the top left corner of the monster.
		ctx.fillRect(0, 0, width, height);	  
		// GOOD practice: restore the context
		ctx.restore();
	}
	function drawFilledCircle(x, y, radius, color) {
		// GOOD practice: save the context, use 2D trasnformations
		ctx.save();	  
		// translate the coordinate system, draw relative to it
		ctx.translate(x, y);	  
		ctx.fillStyle = color;
		// (0, 0) is the top left corner of the monster.
		ctx.beginPath();
		ctx.arc(0, 0, radius, 0, 2*Math.PI);
		ctx.fill();	 
		// GOOD practice: restore the context
		ctx.restore();
	}
	function drawMyMonster1(x, y) {
		// draw a big monster !
		// head
	  
		// GOOD practice: save the context, use 2D trasnformations
		ctx.save();
	  
		// translate the coordinate system, draw relative to it
		ctx.translate(x, y);
	  
		// (0, 0) is the top left corner of the monster.
		ctx.strokeRect(0, 0, 100, 100);
	  
		// eyes, x=20, y=20 is relative to the top left corner
		// of the previous rectangle
		ctx.fillRect(20, 20, 10, 10);
		ctx.fillRect(65, 20, 10, 10);
	  
		// nose
		ctx.strokeRect(45, 40, 10, 40);
	  
		// mouth
	   ctx.strokeRect(35, 84, 30, 10);
	  
	   // teeth
	   ctx.fillRect(38, 84, 10, 10);
	   ctx.fillRect(52, 84, 10, 10);
	  
	   // GOOD practice: restore the context
	   ctx.restore();
	}
	function drawMyMonster2(x, y) {
		// draw a big monster !
		// head
	  
		// GOOD practice: save the context, use 2D trasnformations
		ctx.save();
	  
		// translate the coordinate system, draw relative to it
		ctx.translate(x, y);
	  
		// (0, 0) is the top left corner of the monster.
		ctx.strokeRect(0, 0, 100, 100);
	  
		// eyes, x=20, y=20 is relative to the top left corner
		// of the previous rectangle
		ctx.fillRect(20, 20, 10, 10);
		ctx.fillRect(65, 20, 10, 10);
	  
		// nose
		ctx.strokeRect(45, 40, 10, 40);
	  
		// mouth
	   ctx.strokeRect(35, 84, 30, 10);
	  
	   // teeth
	   ctx.fillRect(38, 84, 10, 10);
	   ctx.fillRect(52, 84, 10, 10);
	  
	   // GOOD practice: restore the context
	   ctx.restore();
	}
	function loopHorizontal1() {
	  // 1 - clear the canvas. We told you that w, and h will be useful!
	  ctx.clearRect(0, yMonster1 - 1, w, h);
	  
	  // 2 - draw the monsters
	  drawMyMonster1(xMonster1, yMonster1);
	  	  
	  // 3 - move the monster
	  xMonster1 += monsterSpeed;
	  
	  // 4 - test collisions with vertical boundaries
	   if (((xMonster1 + 100)> w) || (xMonster1 < 0))  {
		 // collision with left or right wall
		// change the direction of movement
		monsterSpeed = -monsterSpeed;
	  }
	  
	  // 5 - request a new frame of animation in 1/60s
	  requestAnimationFrame(loopHorizontal1);
	}
	function loopHorizontal2() {
	  // 1 - clear the canvas. We told you that w, and h will be useful!
	  ctx.clearRect(0, yMonster2 - 1, w, h);
	  
	  // 2 - draw the monsters
	  drawMyMonster2(xMonster2, yMonster2);
	  
	  // 3 - move the monster
	  //xMonster2 += monsterSpeed;
	  xMonster2 ++;
	  // 4 - test collisions with vertical boundaries
	   if (xMonster2 > w)  {
		 // collision with left or right wall
		// change the direction of movement
		xMonster2 = -100;
	  }
	  
	  // 5 - request a new frame of animation in 1/60s
	  requestAnimationFrame(loopHorizontal2);
	}
	function loopBall1(){
		drawFilledCircle(ball);
		moveBall(ball);
		requestAnimationFrame(loopBall1);
	}