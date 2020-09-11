class Form{
    constructor(){
        this.touchStart = false;
        this.touchStartLeft = false;
        this.touchStartRight = false;
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

       if( (/android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent) ) ){ 

        // function isMobile() { try{ document. createEvent("TouchEvent"); return true; } catch(e){ return false; } } if (isMobile()) { # do whatever you wanna do! }
            this.up = createButton("");
            this.boxUp = createDiv("");
            this.up.touchStarted(  () => {
                this.touchStart = true;
                console.log("Touch started");
              })   
              this.up.touchEnded(  () => {
                this.touchStart = false;
                console.log("Touch ended");
                // y = y - 50;
              })   

            this.left = createButton("");
            this.boxLeft = createDiv("");

            this.left.touchStarted( () => {
                this.touchStartLeft = true;
                console.log("Move left");
              })   
              this.left.touchEnded(  () => {
                this.touchStartLeft = false;
                console.log("Touch ended");
                // y = y - 50;
              })   
            
            
            this.right = createButton("");
            this.boxRight = createDiv("");

            this.right.touchStarted( () => {
                this.touchStartRight = true;
                console.log("Move right");
              })   
            this.right.touchEnded( () =>{
                this.touchStartRight = false;
            })
           
       }

       
       x = windowWidth/2;
       y = 550;
       if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) { 
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
                    if(mask1 === 0 && touches.length > 0){
                        this.instruction.html("Congrats You Have <br>Sanitized Your Hands<br>tap the screen to wear a mask" + touches.length);
                        touches = [];
                        mask1 = 1;
                    }
                    if(mask1 === 1 &&touches.length > 0){
                        this.instruction.html("Congrats You Wore Your<br> Mask You May Continue" + touches.length)
                        player.changeImage("boy with mask", this.image2);
                        player.addAnimation("astronaut animation", this.animation);
                        gameState = 1;
                        touches = [];
                        
                    }
                   
                    }
                    
                    
       
        }

    gameStateOne(){
        if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) { 
            this.instruction.html("Congrats You Have Taken<br> The Measures To Protect<br> Yourself.Tap the screen to go<br> to the next level");
            }
            else{
                this.instruction.html("Congrats You Have Taken<br> The Measures To Protect<br> Yourself.Press \"g\" to go<br> to the next level");
            }
        
            if(gameState == 1 && keyDown("g")){
                gameState = 2;
                console.log("yup");
            }
            if(gameState == 1 && touches.length > 0){
                gameState = 2;
                // this.up_arrow.position(windowWidth - 200, windowHeight *2/3);
                //this.up_arrow.class("Arrows");
                this.up.position(windowWidth - 200,windowHeight * 2/3);
                this.up.class("bt");
                this.boxUp.class("bt");
                this.boxUp.class("up");
                this.boxUp.parent(this.up);
                touches = [];
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
                    if(this.touchStart == true){
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
                    // this.this.left_arrow.position(windowWidth - 200, windowHeight *2/3);
                    // this.right_arrow.position(windowWidth - 200, windowHeight *2/3);
                }
                if(touches.length > 0){
                    gameState = 4;
                    y2  = 550;
                    x2 = windowWidth/2;
                    this.left.position(windowWidth - 300, windowHeight*2/3 + 100);
                    this.left.class("bt"); 
                    this.boxLeft.class("bt");
                    this.boxLeft.class("left");
                    this.boxLeft.parent(this.left);

                    this.right.position(windowWidth - 100, windowHeight*2/3 + 100);
                    this.right.class("bt");
                    this.boxRight.class("bt");
                    this.boxRight.class("right");
                    this.boxRight.parent(this.right);
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
            if(gameState == 4 && this.touchStart == true){
                y2 = y2-100;

                camera.position.x = x3;
                camera.position.y = y2;
            }


            if(gameState == 4 && keyDown(LEFT_ARROW)){
                x2 = x2-20;
                //console.log("it works : " + y2);
    
                camera.position.x = x3;
                camera.position.y = y2;
                console.log(y2);
            }
            if(gameState == 4 && this.touchStartLeft == true){
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
            
            if(gameState == 4 && this.touchStartRight == true){
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
           this.up.hide();
           this.boxUp.hide();
           this.left.hide();
           this.boxLeft.hide();
           this.right.hide();
           this.boxRight.hide();
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

