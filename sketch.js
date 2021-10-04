
function preload(){
  backgroundImg = loadImage("snow1.jpg")
}


function setup() {
  createCanvas(1500,700);
  createSprite(400, 200, 50, 50);
  
}

function draw() {
  background(backgroundImg);  
  
  drawSprites();
}