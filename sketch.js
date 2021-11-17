var title
var bgImg,titleImg;
var ground,ground2,groundImg,runman,runimg,spike,spikeImg,spikeG,coin,coinImg,coins,coinget,coin2,coins2,coin3,coin3,wait,play;
var score = 0
var hiscore = 0
function preload(){
  bgImg = loadImage("OIP(1).png");
  titleImg = loadImage("e3e0853cc46b3bfda8c5b37318f3b78d6280c7f984ab59283b84facef159bd84621d5fcb7aa90cabda39a3ee5e6b4b0d3255bfef95601890afd80709f2e9afc85c07cc1278cd1cc27395078e.png");
  groundImg = loadImage("R.png")
  runimg = loadImage("costume2 (2).png")
  spikeImg = loadImage("spike.png")
  coinImg = loadImage("Coin.png")
  coinget = loadSound("coinget.mp3")
  wait = loadSound("new_tab_game_wait.mp3")
  play = loadSound("new_tab_game.mp3")
}

function setup() {
  play.loop()
  createCanvas(windowWidth, windowHeight);
  title = createSprite(width/2,height/4)
  title.addImage(titleImg)
  ground = createSprite(422,height-150)
  ground.addImage(groundImg)
  ground.scale = 2
  ground2 = createSprite(width-422,height-150)
  ground2.addImage(groundImg)
  ground2.scale = 2
  ground.setCollider("rectangle",0,103)
  runman = createSprite(width/4,height*0.5)
  runman.addImage(runimg)
  runman.scale = 3
  spikeG = createGroup()
  coins = createGroup()
  coins2 = createGroup()
  coins3 = createGroup()
}
function draw() {
  background(bgImg)
  runman.velocityY+=2
  runman.collide(ground)
  score++
  if (score > hiscore){
    hiscore = score
  }
  if (keyWentDown("up")&&runman.y >= 540){
    runman.velocityY = -20
  }
  drawSprites()
  fill("white")
  textAlign(CENTER,CENTER)
  handleDanger()
  if (runman.isTouching(coins)){
    coins.destroyEach()
    score += 50
    coinget.play()
  }
  if (runman.isTouching(coins2)){
    coins2.destroyEach()
    score += 50
    coinget.play()
  }
  if (runman.isTouching(coins3)){
    coins3.destroyEach()
    score += 50
    coinget.play()
  }
  // text(mouseX + " " + mouseY,mouseX,mouseY)
  
  text(score + "     " + "HI "+ hiscore,width/2,height/2)

}

function handleDanger(){
  if (frameCount % 30 === 0){
    spike = createSprite(width,ground.y+24)
    spike.velocityX = -15 - (score / 100)
    spike.lifetime = 300
    spike.addImage(spikeImg)
    spike.scale = 0.08
    spikeG.add(spike)
  }
  if (runman.isTouching(spikeG)){
    spikeG.destroyEach()
    score = 0
    coins.destroyEach()
    coins2.destroyEach()
    coins3.destroyEach()
  }

  if (frameCount % 60 === 10){
    coin = createSprite(width,runman.y);
    coin.addImage(coinImg)
    coin.scale = 0.03
    coin.velocityX = -15 - (score / 100)
    coins.add(coin)
  }
  if (frameCount % 60 === 30){
    coin2 = createSprite(width,runman.y);
    coin2.addImage(coinImg)
    coin2.scale = 0.03
    coin2.velocityX = -15 - (score / 100)
    coins2.add(coin2)
  }
  if (frameCount % 60 === 50){
    coin3 = createSprite(width,runman.y);
    coin3.addImage(coinImg)
    coin3.scale = 0.03
    coin3.velocityX = -15 - (score / 100)
    coins3.add(coin3)
  }
}
