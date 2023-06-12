var towerImg, tower;
var doorImg, door, doorsGroup;
var climberImg, climber, climbersGroup;
var ghost, ghostImg;
var invisibleBlockGroup, invisibleBlock;
var gameState = "play"

function preload(){
  towerImg = loadImage("tower.png");
  doorImg = loadImage("door.png");
  climberImg = loadImage("climber.png");
  ghostImg = loadImage("ghost-standing.png");
  spookySound = loadSound("spooky.wav");
  doorsGroup = new Group();
  climbersGroup = new Group();
}

function setup() {
  createCanvas(600, 600);
  tower = createSprite(300,300);
  tower.addImage("tower",towerImg);
  tower.velocityY = 1;
 ghost = createSprite (200,200,50,50);
 ghost.addImage("ghost",ghostImg) 
 ghost.scale =0.3
}

function draw() {
  background(200);
  if (gameState==="play"){

  
  if(tower.y > 400){
      tower.y = 300
    
    }
    if (keyDown("UP_ARROW") ){
      ghost.y = ghost.y -5
    }
    if (keyDown("LEFT_ARROW") ){
      ghost.x = ghost.x -5
    }
    if (keyDown("RIGHT_ARROW") ){
      ghost.x = ghost.x +5
    }
    if (climbersGroup.isTouching(ghost)){
      ghost.velocityY=0
    }
    spawnDoors();
  
  
    drawSprites();
}
if (gameState==="end"){
  stroke("yellow");
  fill("yellow");
  textSize(30)
  text("GAME OVER",230,250)

}
}
function spawnDoors(){
 if (frameCount%240===0){
  var door = createSprite(200,-50);
  door.addImage(doorImg);
  var climber = createSprite(200,10);
  climber.addImage(climberImg)
  door.x = Math.round(random(120,400));
  climber.x = door.x
  door.velocityY=1
  climber.velocityY=1
  ghost.depth=door.depth;
  ghost.depth+=1
  ghost.depth=climber.depth
  door.lifetime=800;
  climber.lifetime=800;
  doorsGroup.add(door)
  climbersGroup.add(climber)
 } 
}