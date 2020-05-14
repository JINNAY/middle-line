var rain;

function setup() {
  createCanvas(400,400);
}

function draw() {
  background(0,0,0); 
  
  rain = createSprite(200,5,1,20)

  rain.velocityY = 10;

  if(rain.y>=400){
    
    rain.x = random(1,400);
    rain.y = 5;
  }

  drawSprites();
}