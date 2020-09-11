class Obstacle{
    constructor(){
        this.image = loadImage("images/meteor.png0.png");
        this.obstacleGroup = createGroup();
    }

    displaySpawn(){
        if(frameCount % 50 == 0){
            var obstacle = createSprite(random(200/1000, (displayWidth - 200)/1000)*1000, y2 - 300, 20, 20);
            obstacle.addImage(this.image);
            this.obstacleGroup.add(obstacle);
            
            obstacle.setCollider("circle", 0, 0, 55);
            obstacle.velocityY = 5;
            obstacle.lifetime = 70;
        }

        if(this.obstacleGroup.isTouching(player)){
            gameState = 3;
            
            this.obstacleGroup.destroyEach();

            x = displayWidth/2;
            y = 100;

            player.x = x;
            player.y = y ;

            image(bg_img2,  0,-windowHeight*4,windowWidth, windowHeight*5);

            form.gameStateTwo();
        }
        if(gameState == 5){
            this.obstacleGroup.destroyEach();
        }
        
    }
}