class Game {
    constructor() {

    }

    getState() {
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value", function (data) {
            gameState = data.val()
        });
    }

    update(state) {
        database.ref('/').update({
            gameState: state
        });
    }

    async start() {
        if (gameState === 0) {
            player = new Player();
            var playerCountRef = await database.ref('playerCount').once("value");
            if (playerCountRef.exists()) {
                playerCount = playerCountRef.val();
                player.getCount();
            }
            form = new Form()
            form.display();
        }

        player1 = createSprite(200, 100, 20, 20);
        player2 = createSprite(200, 300, 20, 20);
        player3 = createSprite(200, 500, 20, 20);
        player4 = createSprite(200, 700, 20, 20);

        skatePlayer = [player1, player2, player3, player4];
    }

    play() {
        form.hide();
        Player.getPlayerInfo();

        if (allPlayers !== undefined) {
            var index = 0
            var x
            var y = 50

            for (var plr in allPlayers) {
                index = index + 1;
                x = displayWidth - allPlayers[plr].distance
                y = y + 100
                skatePlayer[index - 1].x = x;
                skatePlayer[index - 1].y = y;
                if (index === player.index) {
                    stroke(10);
                    fill("red");
                    ellipse(x, y, 10, 10);
                    skatePlayer[index - 1].shapeColor = "red"
                    camera.position.x = skatePlayer[index - 1].x
                    camera.position.y = displayHeight/2
                   /* fill("white")
                    textSize(20)
                    text(allPlayers[plr].name, skatePlayer[index - 1].x, skatePlayer[index - 1].y + 75) */
                }
            }
        }

        if (keyIsDown(RIGHT_ARROW) && player.index !== null) {
            player.distance -= 10
            player.update();

            if(keyIsDown(39)){
                xPos += 0.2;
            }
        }else if(keyIsDown(38) && yPos > 0 && player.index !== null){
            yPos -= 0.1;
            xPos *= 0.9;
        }else{
            yPos *= 0.985;
            xPos *= 0.985;
        }
        drawSprites();
        }

        

                        

        
    }



