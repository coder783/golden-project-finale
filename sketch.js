var gameState = 0;
var player;
var playerCar;
var x,y;
var x2,y2;
var x3;
var x4, y4;
var player_img1, player_img2;
var obstacle2;
var form;
var bg_img;
var bg_img2;
var bg_img3;
var invisibleGround;
var bg;
var ground;
var mask1 = 0;

function preload(){
  //player_img1 = loadImage("player10.png");
  //player_img2 = loadImage();

  bg_img = loadImage("images/front_of the house0.png");
  bg_img2 = loadImage("images/track.jpg");
  bg_img3 = loadImage("images/space.jpg");

}

function setup() {
  createCanvas(windowWidth ,windowHeight);
  form = new Form();

  obstacle2 = new Obstacle();
  
}

function draw() {
 
  //form.display();
  
  if(gameState == 0){
      form.gameStateZero();
  }

  if(gameState == 1){
      form.gameStateOne();
  }
  
  if(gameState == 2){
    form.gameStateTwo();
  }

  if(gameState == 3){
    form.gameStateThree();
  }

  if(gameState == 4){
    form.gameStateFour();
    obstacle2.displaySpawn();
  }

  if(gameState == 5){
    form.gameStateFive();
  }

  if(gameState == 6){
    form.gameStateSix();
  }

  drawSprites();
}