var ground;
var monkey , monkey_running
var bananaImage, obstacle, obstacleImage;
var bGroup;
var oGroup;
var survivalTime=0;


function preload(){
  
  //loading images and animations
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,600);
  //creating monkey
  monkey=createSprite(80,550,20,20);
  monkey.addAnimation("running",monkey_running);
  monkey.scale=0.1;
  
  //creating ground
  ground=createSprite(300,550,600,20);
  
  //creating groups
  bGroup=new Group();
  oGroup=new Group();
  
}


function draw() {
  background("white");
  //calling functions
  b();
  o();
  
  //providing velocity to ground and making it endless
  ground.velocityX=-5;
  ground.x=ground.width/2;
  monkey.collide(ground);
  
  //showing score
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate());
  text("Survival Time:"+survivalTime,150,150);
  
  //making monkey jump when space key is pressed
  if(keyDown("space"))
  {
    monkey.velocityY=-15;
  }
  //providing gravity to the monkey
  monkey.velocityY=monkey.velocityY+0.6;
 
  drawSprites();
 
}

function b(){
    if (frameCount % 80 === 0) 
    {
    var banana = createSprite(600,120,40,10);
    bGroup.add(banana);
    banana.y = Math.round(random(200,400));
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -3;
    banana.lifetime=200;
    }
}

function o(){
    if (frameCount % 300 === 0)
    {
    var obstacle = createSprite(600,550,40,10);
    oGroup.add(obstacle);
    obstacle.y = Math.round(random(500,500));
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.3;
    obstacle.velocityX = -5;
    obstacle.lifetime=200;      
    }
}






