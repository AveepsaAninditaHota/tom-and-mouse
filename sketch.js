var mouse , mouseImg1 , mouseImg2 , mouseImg3 , mouseImg4;
var cat , catImg;
var bg,bgImg ;
var cat1Img

function preload() {
    mouseImg1 =loadAnimation("mouse1.png");
    mouseImg2 =loadAnimation("mouse2.png");
    mouseImg3 =loadAnimation("mouse3.png");
    mouseImg4 =loadAnimation("mouse4.png");
    catImg =loadAnimation("cat1.png","cat2.png","cat3.png","cat4.png");
    cat1Img = loadAnimation("cat1.png")
    bgImage =  loadImage("garden.png")

}

function setup(){
    createCanvas(1000,800);
    mouse = createSprite(150,550,50,50);
    mouse.addAnimation("mouseHappy", mouseImg2);
    mouse.scale = 0.1

    cat = createSprite(800,600,50,50);
    cat.addAnimation("cat",cat1Img);
    cat.scale = 0.1



}

function draw() {

    background(bgImage);
    
    if (cat.x - mouse.x < mouse.width/2 + cat.width/2
    && mouse.x - cat.x < mouse.width/2 + cat.width/2){
        mouse.changeAnimation("mouseHappy",mouseImg1)
        
    }

 
    drawSprites();
}


function  keyPressed(){

   

  if(keyDown( RIGHT_ARROW)){
      mouse.addAnimation("mouseHappy",mouseImg3);
      mouse.frameDelay = 25;
      cat.addAnimation("cat",catImg);
      cat.velocityX=-3;
  }

  if(keyDown ( LEFT_ARROW)){
      mouse.addAnimation("mouseHappy", mouseImg3);
      mouse.frameDelay =25;
      cat.addAnimation("cat",catImg);
      cat.velocityX=-3;
  }


}
