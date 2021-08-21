var bg,bg2,form,system,code,security,clues;
var score=0;
var Start=0; 
var Play=1;
var End=2;
var time=0;
var gameState=Start;
var ans1,ans2,ans3;
var sc1,sc2,sc3;


function preload() {
  bg = loadImage("aladdin_cave.jpg");
  bg2 = loadImage("treasure.jpg")
  bg3 = loadImage("bg3.jpeg")
  playbImg = loadImage("play.png");
  potImg = loadAnimation("rain/g-6.png","rain/g-7.png","rain/g-8.png","rain/g-9.png","rain/g-10.png","rain/g-11.png","rain/g-12.png","rain/g-13.png","rain/g-14.png");
  genieImg = loadImage("genie.png")
}

function setup() {
  createCanvas(1400,700);
  system = new System()
  security = new Security()

  playb = createSprite(700,600, 50, 50);
  playb.addImage("Iss",playbImg);
  playb.scale=0.4



  board2 = createSprite(680,370, 620, 420);
  board2.shapeColor=rgb(71,39,20,)
  board = createSprite(680,370, 600, 400);
  board.shapeColor="yellow"

  pot = createSprite(340,550, 50, 50);
  pot.addAnimation("Iss",potImg);
  pot.scale=0.4
  pot2 = createSprite(1000,550, 50, 50);
  pot2.addAnimation("Iss",potImg);
  pot2.scale=0.4

  genie = createSprite(1050,240, 50, 50);
  genie.addImage("Iss",genieImg);
  genie.scale=1.7
}

function draw() {
console.log(gameState)
  if(gameState===Start)
  {
    background(bg3)
    system.position()
    drawSprites();
    pot.visible=false
    playb.visible=true
    pot2.visible=false
    board.visible=false
    genie.visible=false
    board2.visible=false
    if(mousePressedOver(playb))
    {
      gameState=Play
      playb.visible=false
      system.display();
    }
    }

  if(gameState===Play) 
  {
    background(bg);


system.display();
/*if(sc1===1)
{
  textSize(30);
  fill("white")
  text("Your ans: "+ans1,120,330);
}

if(sc2===1)
{
  textSize(30);
  fill("white")
  text("Your ans: "+ans2,950,330);
}

if(sc3===1)
{
textSize(30);
fill("white")
text("Your ans: "+ans3,550,530);
}*/
    textSize(60);
    fill("white");
    textFont("Algerian");
    text("treasure hunt",500,50);
    textSize(50);
    textFont("freestyle script");
    text("Score :"+score,650,150);

    if(score===3)
    {
      gameState=End
      playb.visible=false
      system.hide()
    }

  }
  if(gameState===End)
  {
    background(bg2);
    pot.visible=true
    pot2.visible=true
playb.visible=false
board.visible=true
genie.visible=true
board2.visible=true
  drawSprites();
  textSize(60);
  fill("purple");
  textFont("Algerian");
  text("congratulations",430,260);
  textSize(50);
  textFont("freestyle script");
  text("You gave all the  answers correctly",450,350);
  text("Now you can take away the treasure.",450,390);
  text("To restart the game press F5.",465,490);
}
}