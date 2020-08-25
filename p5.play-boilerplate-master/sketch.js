var gameState = "wait";

function preload(){
  BGIMG = loadImage("images/Form_BG.jpg");
  BGIMG2 = loadImage("images/BG2.jpg");

  PlayImg = loadImage("images/playbutton.png");
  playerIMG = loadImage("images/player.png");

  stepIMG = loadImage("images/step.png");

  zombie1IMG = loadImage("images/zombie1.png");
  zombie2IMG = loadImage("images/zombie2.png");
  zombie3IMG = loadImage("images/zombie3.png");
}

function setup() {
  createCanvas(1400,900);
  BG = createSprite(450,450,1400,900);
  BG.addImage("background",BGIMG);
  
  PlayButton = createSprite(830,530,50,50);
  PlayButton.addImage("playImg",PlayImg);
  PlayButton.scale = 0.5;
  //form = new Form();

  zombiesGroup = createGroup();

}

function draw() {
  background("white");  
  
  if(mousePressedOver(PlayButton)){
    gameState = "play";
    
  }

  if(gameState === "play"){
    BG2 = createSprite(700,450,1400,900);
    BG2.addImage("background2",BGIMG2);
  
    //ground = createSprite(1,850,700,200);
    //ground.shapeColor = "#130016"
  
    //step = createSprite(350,786,10,10);
    //step.addImage("steps",stepIMG);
  
    ground = createSprite(880,870,2000,50);
    //ground.shapeColor = "#130016"
    ground.shapeColor = "grey";
    //ground.x = ground.width/2;
    ground.velocityX = +3;
    
    if(ground.x>0){
    //ground.x = ground.width/2;
    }

    player = createSprite(176,660,10,10);
    player.addImage("player",playerIMG);
    player.scale = 0.5;
  
    player.collide(ground);

    Zombie();
}
  //form.display();

  drawSprites();

  if(gameState ==="wait"){
    textSize(45);
    fill("White");
    text("XOTIC RANGE",680,450);
  }
  text(mouseX + ',' + mouseY, 50, 50);
}

function Zombie() {

  if(frameCount % 80 === 0 ){
  

    var zombie = createSprite(1400,800,10,10);
    zombie.velocityX = -3;
    
    //zombie.addImage("zombie1",zombie1IMG);

    //scale Zombies
    zombie1IMG.s

   //generate random obstacles
    var rand = Math.round(random(1,3));
    switch(rand) {
      case 1: zombie.addImage(zombie1IMG);
              break;
      case 2: zombie.addImage(zombie2IMG);
              break;
      case 3: zombie.addImage(zombie3IMG);
              //break;
      default: break;
    }
    
    //assign scale and lifetime to the obstacle           
    zombie.scale = 0.45;
    zombie.lifetime = 750;

    //add each obstacle to the group
    zombiesGroup.add(zombie);
  }
}