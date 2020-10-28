var fixedrect
var movingrect
function setup() {
  createCanvas(800,400);
  movingrect=createSprite(400, 200, 50, 50);
fixedrect=createSprite(200,200,50,50)
fixedrect.shapeColor="orange"
movingrect.shapeColor="orange"

}

function draw() {
  background(255,255,255);  
  movingrect.x=mouseX
  movingrect.y=mouseY
  if(movingrect.x-fixedrect.x<fixedrect.width/2+movingrect.width/2
    && fixedrect.x-movingrect.x<fixedrect.width/2+movingrect.width/2
    && movingrect.y-fixedrect.y<fixedrect.height/2+movingrect.height/2
    &&fixedrect.y-movingrect.y<fixedrect.height/2+movingrect.height/2
    ){
    fixedrect.shapeColor="blue"
movingrect.shapeColor="blue"

  }
else{
  fixedrect.shapeColor="orange"
movingrect.shapeColor="orange"
}
  drawSprites();
}