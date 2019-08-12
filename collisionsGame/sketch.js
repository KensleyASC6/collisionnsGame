let posX;
const posY = 45;

// position of the ball
let y = 33;
// how far the ball moves every time
var speed = 10;

//setup function
function setup() {
   createCanvas(600, 600);
   background(0);
   fill(255);
   posX = width / 2;
}


//background, key press functions
function draw() {
 background(0);

if (keyIsDown(LEFT_ARROW)) {
 posX -= 10
}

if(keyIsDown(RIGHT_ARROW)) {
 posX += 10
}

 //draw the basket
 fill(random(255),random(255),random(255)); 
 rect (posX, 550, 100, 25);

 //draw the falling ball
 fill(random(255),random(255),random(255));
 ellipse(200, y, 50, 50);

 // move the ball
 y = y + speed;

 if (y > 590)
 {
  speed = -10;
 }

 if (y < 31)
 {
   speed = 10
 }
}

var rect1 = (200, y, 50, 50);
var ellipse1 = (200, y, 50, 50);

if (rect1.posX < ellipse1.posX + ellipse1.width && rect1.posX + rect1.width > ellipse1.posX && rect1.posY < ellipse1.posY + rect1.height && drect1.posY + rect1.height > ellipse.posY) {

}

//if ()