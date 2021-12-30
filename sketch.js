function preload(){
  BirdImg=loadImage("Bird.png")
  
}


function setup() {
  createCanvas(displayWidth,displayHeight);
  Bird1 = new Bird()
}

function draw() {
  background(0);
  Bird1.body.velocityX=11 
  camera.position.x=Bird1.body.x+600
  Bird1.gravity();
  if(keyDown("space")){
    Bird1.fly()
  }
  drawSprites();
}