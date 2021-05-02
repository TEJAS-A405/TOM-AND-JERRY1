var cat , catImg1 , catImg2 , catImg4
var mouse , mouseImg1 , mouseImg2  , mouseImg4
var bgImg

function preload() {
    
    bgImg = loadImage("images/garden.png"),
    catImg1 = loadAnimation("images/cat1.png" );
    catImg2 = loadAnimation("images/cat2.png","images/cat3.png" );
    catImg4 = loadAnimation("images/cat4.png" );
     
    mouseImg1 = loadAnimation("images/mouse1.png");
    mouseImg2 = loadAnimation("images/mouse2.png" , "images/mouse3.png");
    mouseImg4 = loadAnimation("images/mouse4.png");
     
}
function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat = createSprite(870,600);
    cat.addAnimation("sitting", catImg1);
    cat.scale = 0.2;
    
    mouse = createSprite(200,600);
    mouse.addAnimation("taste", mouseImg1);
    mouse.scale = 0.15
}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide
if(cat.x- mouse.x<(cat.width - mouse.width)/2){
    cat.velocityX = 0;
    cat.addAnimation("standing",catImg4);
    cat.x =300;
    cat.scale = 0.2;
    cat.changeAnimation("standing");
    mouse.addAnimation("detective",mouseImg4 );
    mouse.scale = 0.15;
    mouse.changeAnimation("detective");

}
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if (keyCode === LEFT_ARROW){
    cat.velocityX = -5;
    cat.addAnimation("running",catImg2);
    cat.changeAnimation("running");
    mouse.addAnimation("mouseTeasing",mouseImg2);
    mouse.changeAnimation("mouseTeasing");
    mouse.frameDelay = 25;
}
}
