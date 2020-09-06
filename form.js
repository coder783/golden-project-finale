class Form{
    constructor(){
       this.image1 = loadImage("images/player10.png");
       this.image2 = loadImage("images/masked_player0.png");
       this.image3 = loadImage("images/car2.png");
       this.image5 = loadImage("images/rocket0.png")
       this.image6 = loadImage("images/spaceImg.jpg");
       this.image7 = loadImage("images/mars background.jpg");
       this.image8 = loadImage("images/astronaut player.png");
       this.image9 = loadImage("images/cure0.png");
       this.animation = loadAnimation("images/astro0.png","images/astro1.png", "images/astro2.png", "images/astro3.png", "images/astro4.png", "images/astro5.png", "images/astro6.png")
       player = createSprite(windowWidth * 1/3, windowHeight * 2/3);
       player.addImage("boy without mask",this.image1);
       player.addImage("boy with mask", this.image2);
       player.addImage("the player's car", this.image3);
       player.addImage("player's rocket", this.image5);
       player.addImage("player as astronaut", this.image8);

       x = windowWidth/2;
       y = 550;
        if(window.innerWidth < 450 ){
            this.instruction = createElement("h2", "You have been chosen to <br> get the cure of the virus <br> from mars but first <br>u need to wash your <br>hands  tap the screen" ); 
        }
        else{
            this.instruction = createElement("h2", "You have been chosen to <br> get the cure of the virus <br> from mars but first <br>u need to wash your <br>hands(press h)" );
        }
       
       this.instruction.style("color","white") ;
       this.cure = createSprite(0, 20, 20, 20);
       this.cure.addImage(this.image9);
       this.cure.visible = false;

       this.instructionBox = createElement("div");
    }
    gameStateZero(){
        background(bg_img);
            this.instruction.position(windowWidth-500, 60);
                if(gameState == 0  ){
                    if( keyDown("h")){
                        this.instruction.html("Congrats You Have <br>Sanitized Your Hands<br>Press \"m\" to wear a mask");
                    }
                    if( keyDown("m") ){
                        this.instruction.html("Congrats You Wore Your<br> Mask You May Continue")
                        player.changeImage("boy with mask", this.image2);
                        player.addAnimation("astronaut animation", this.animation);
                        gameState = 1;
                    }
                    if(touches.length > 0){
                        this.instruction.html("Congrats You Have <br>Sanitized Your Hands<br>tap the screen to wear a mask");
                        touches = [];
                    }
                    if(touches.length > 0){
                        this.instruction.html("Congrats You Wore Your<br> Mask You May Continue")
                        player.changeImage("boy with mask", this.image2);
                        player.addAnimation("astronaut animation", this.animation);
                        gameState = 1;
                        touches = [];
                    }
                    }
                    
       
        }

    gameStateOne(){
        this.instruction.html("Congrats You Have Taken<br> The Measures To Protect<br> Yourself.Press \"g\" to go<br> to the next level");
            if(gameState == 1 && keyDown("g")){
                gameState = 2;
                console.log("yup");
            }
        }
    
    gameStateTwo(){
        this.instruction.hide();
            image(bg_img2,  0,-windowHeight*3.5,windowWidth, windowHeight*5);
            player.changeImage("the player's car", this.image3);

                player.x = x;
                player.y =  y + 250; 
                    if(keyIsDown(UP_ARROW)){
                        y = y - 50;
                    }
                camera.position.x = player.x;
                camera.position.y = player.y;

            if(y < -2650){
                gameState = 3;
                console.log("#1");
            }
        }   

     gameStateThree(){
        this.instruction.html("Congrats You Have Reached <br>Your Rocket. You Will Go<br> To Space Next.Where You <br>Will Have To  Dodge <br>Meteors (press e to continue) ");
        this.instruction.style("color", "yellow");
        this.instruction.show();

            image(bg_img2,  0,-windowHeight*4,windowWidth, windowHeight*5);

                if(keyDown("e")){
                    gameState = 4;
                    y2  = 550;
                    x2 = windowWidth/2;
                }
        }
        
    gameStateFour(){
        image(this.image6, 0, -windowHeight*12, windowWidth, windowHeight*15);
        //player.debug = true;
            this.instruction.hide();
            player.changeImage("player's rocket", this.image5);
            console.log("#2");

            player.x = x2;
            player.y = y2;

            x3 = windowWidth/2;
            
            if(gameState == 4 && keyDown(UP_ARROW)){
                y2 = y2-100;
                //console.log("it works : " + y2);
    
                camera.position.x = x3;
                camera.position.y = y2;
                console.log(y2);
            }
            if(gameState == 4 && keyDown(LEFT_ARROW)){
                x2 = x2-20;
                //console.log("it works : " + y2);
    
                camera.position.x = x3;
                camera.position.y = y2;
                console.log(y2);
            }

            if(gameState == 4 && keyDown(RIGHT_ARROW)){
                x2 = x2+20;
                //console.log("it works : " + y2);
    
                camera.position.x = x3;
                camera.position.y = y2;
                console.log(y2);
            }
            if(gameState == 4 && x2 < 5){
                x2 = windowWidth-50;
            }
            if(gameState == 4 && x2 > windowWidth-5){
                x2 = 50;
            }

            if(y2 < - 8100){
                gameState = 5;

                y4 = 600; 
                //camera.position.x = player.x;
                camera.position.y = y4;

                player.x = 0 - 10;
                player.x = player.x + 10;

                 //player.changeImage("player as astronaut",this.image8);
                invisibleGround = createSprite(windowWidth/2, windowHeight, windowWidth, 10);              
                player.collide(invisibleGround);

                this.cure.x = windowWidth - 120;
                this.cure.y = -8000;
                this.cure.scale = 0.5;

            }
        }
        
        gameStateFive(){
            //console.log("it woks yay !!!");
           // player.y = y4;
            player.scale = 0.40;
            player.x = player.x + 10;
            player.changeAnimation("astronaut animation", this.animation);


            background(this.image7);
            this.cure.visible = true;
            console.log(player.x, player.y, this.cure.x, this.cure.y)
            // player.velocityY = player.velocityY + 0.5;
            
            camera.position.y = player.y;

            //console.log("x : " + player.x);
            //console.log("y : " + player.y);
            //console.log("x : " + mouseX);
            if(player.isTouching(this.cure)){
                gameState = 6;
                //console.log("the level ended");
            }
        }

        gameStateSix(){
            //console.log("The last level of the game");
             this.instructionBox.html("Congrats!! <br><br><br> You Have Got The Cure For Covid-19 And Saved The World From The Danger Of The Virus<br>&#129303");
            this.instructionBox.style("background", "white");
            this.instructionBox.style("width", "400px");
            this.instructionBox.style("height", "400px");
            this.instructionBox.style("position", "fixed");
            this.instructionBox.style("top", "5%");
            this.instructionBox.style("left", "25%");
            this.instructionBox.style("z-index", "100");
            this.instructionBox.style("padding", "5% 10%");
            this.instructionBox.style("color", "black");
            this.instructionBox.style("text-align", "center");
            this.instructionBox.style("font-size", "40px");
            this.instructionBox.style("border" , "5px solid blue")
            this.instructionBox.style("border-radius", "15%")

            player.visible = false;
            this.cure.visible = false;
        }
    }

