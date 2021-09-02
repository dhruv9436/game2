var bg,bgimg,shooter,shooterimg,heart1,heart1img,heart2,heart2img,heart3,heart3img;
var zombie1,bulletImg,bullet;
var zombie1Img,zombie2Img,zombie3Img,zombie4Img;

function preload(){
bgimg=loadImage("assets/bg1.jpg")
shooterimg=loadImage("assets/shooter_3.png")
heart1img=loadImage("assets/heart_1.png")
zombie1Img=loadImage("assets/zombie.png")
zombie2Img=loadImage("assets/zombie1.png")
zombie3Img=loadImage("assets/zombie2.png")
zombie4Img=loadImage("assets/zombiewin.png")
bulletImg=loadImage("assets/bullet.png")
}


function setup() {
  createCanvas(800,600);
  bg=createSprite(400,300)
  bg.addImage(bgimg);
  bg.scale=0.5;

  shooter=createSprite(150,500,20,20);
  shooter.addImage(shooterimg)
  shooter.scale=0.3

  heart1=createSprite(120,50,20,20)
  heart1.addImage(heart1img)
  heart1.scale=0.2;

  heart2=createSprite(80,50,20,20)
  heart2.addImage(heart1img)
  heart2.scale=0.2;

heart3=createSprite(40,50,20,20)
  heart3.addImage(heart1img)
  heart3.scale=0.2;

  zombieG=new Group()
}



function draw() {

  background(0,0,0);
  createZombie1();
if(keyDown("UP_ARROW") ){

shooter.y=shooter.y-10;


}

if(keyDown("DOWN_ARROW") ){

  shooter.y=shooter.y+10;

  }
  if(keyDown("F")){
bullet=createSprite(shooter.x+50,500,20,20)
bullet.addImage(bulletImg);
bullet.y=shooter.y-25;
bullet.velocityX=3
bullet.scale=0.1;
  }

  
  drawSprites();
}
function createZombie1() {
  if (World.frameCount % 250 == 0) {
    var zombie1 = createSprite(800,Math.round(random(50,600), 10, 10));
    var rand = Math.round(random(1,3));
    switch(rand) {
      case 1: zombie1.addImage(zombie1Img);
              break;
      case 2: zombie1.addImage(zombie2Img);
              break;
      case 3: zombie1.addImage(zombie3Img);
              break;
    
      default: break;
    }
  
  
  zombie1.scale=0.5;
  zombie1.velocityX =- 3;
 zombie1.lifetime =300;
  zombieG.add(zombie1);
}
}


 
 