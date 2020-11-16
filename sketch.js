function setup() {
  createCanvas(800,400);
  fixedrect= createSprite(400, 200, 50, 50);
  movingrect= createSprite (200,200,80,30);
  fixedrect.shapeColor= "green";
  movingrect.shapeColor= "orange";
}

function draw() {
  background(255,255,255);  
  movingrect.y= World.mouseY;
  movingrect.x= World.mouseX;
  if (movingrect.x- fixedrect.x < fixedrect.width/2+fixedrect.width/2 &&
    fixedrect.x-movingrect.x< fixedrect.width/2+fixedrect.width/2 &&
    movingrect.y- fixedrect.y < fixedrect.width/2+fixedrect.width/2 &&
      fixedrect.y-movingrect.y< fixedrect.width/2+fixedrect.width/2){
  movingrect.shapeColor= "purple"
  fixedrect.shapeColor= "purple"
  }
  else{
    fixedrect.shapeColor= "green";
  movingrect.shapeColor= "orange";
  }
  drawSprites();
} 