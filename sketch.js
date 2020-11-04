var fr,mr,ball1,ball2,ball3,ball4;

function setup() {
  createCanvas(800,400);
  fr=createSprite(200,200,50,50);
  fr.shapeColor="green";
  mr=createSprite(500,200,50,50);
  mr.shapeColor="green";
  fr.velocityX=2;
  mr.velocityX=-2;

  ball1=createSprite(200,300,50,50);
  ball2=createSprite(400,300,50,50);

ball1.velocityX=2;
ball2.velocityX=-2;

ball3=createSprite(200,100,50,50);
ball4=createSprite(400,100,50,50);

ball3.shapeColor="green";
ball4.shapeColor="green";

}

function draw() {
  background(255,255,255);  
  //mr.x=World.mouseX;
  //mr.y=World.mouseY;

ball4.y=World.mouseY;
ball4.x=World.mouseX;

bouncing(mr,fr);

bouncing(ball1,ball2);
if(touching(ball3,ball4)){
  ball3.shapeColor="red";
  ball4.shapeColor="red";
}

else{
  ball4.shapeColor="green";
  ball3.shapeColor="green";
}
  
  
  drawSprites();
}

