var form, player, game;
var database;
var gameState = 0;
var playerCount;
var player1, player2, player3, player4;
var allPlayers;
var skatePlayer = [];
var xPos = 0;
var yPos = 0;

function setup() {
  createCanvas(displayWidth - 20, displayHeight - 30);
  
  database = firebase.database();

  game = new Game();
  game.getState();
  game.start();

}

function draw() {
  background(255,255,255);  
  if (playerCount === 4) {
    game.update(1);
  }
  if (gameState === 1) {
    clear();
    game.play();
  }
  }