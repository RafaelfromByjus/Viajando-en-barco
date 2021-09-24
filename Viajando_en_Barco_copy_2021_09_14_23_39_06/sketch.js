var ship, shipImg;
var sea, seaImg;

function preload(){
  
  shipImg = loadImage("ship.png");
  seaImg = loadImage("sea.png")
  
}

function setup() {
  createCanvas(400, 400);
  
  ship = createSprite(100, 300, 20, 20);
  ship.addImage("ship", shipImg);
  
  sea = createSprite(200,200,400,400);
  sea.addImage("sea", seaImg);
}

function draw() {
  background(220);
  
  if(sea.x < 0){
    sea.x =sea.width/2;
  }

  drawSprites();
}