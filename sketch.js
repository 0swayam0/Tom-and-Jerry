var back,cat,mouse;

var backImg,catImg1,catRun,catImg2,mouseImg1,mouseImg2,mouseImg3;

function preload() {
    
    backImg=loadImage("images/garden.png");

    catImg1=loadImage("images/tomOne.png");
    catRun=loadAnimation("images/tomTwo.png","images/tomThree.png");
    catImg2=loadImage("images/tomFour.png");

    mouseImg1=loadImage("images/jerryOne.png");
    mouseImg2=loadAnimation("images/jerryTwo.png","images/jerryThree.png");
    mouseImg3=loadImage("images/jerryFour.png");

}

function setup(){
    createCanvas(1200,800);
    
    back=createSprite(400,400,0,0);
    back.addImage(backImg);
    back.scale=1;

    cat=createSprite(600,600,0,0);
    cat.addImage(catImg1);
    cat.scale=0.1;

    mouse=createSprite(150,600,0,0);
    mouse.addImage(mouseImg1);
    mouse.scale=0.08;
}

function draw() {
   
    keyPressed();

    drawSprites();

}


function keyPressed(){

    if(keyDown(LEFT_ARROW)){
        cat.addAnimation("catRunning",catRun);
        cat.changeAnimation("catRunning");
        cat.velocityX=-5;

        mouse.addAnimation("mouseRunning",mouseImg2);
        mouse.changeAnimation("mouseRunning");
    }

    if(cat.x - mouse.x < (cat.width - mouse.width)/2){
        cat.addAnimation("catStop",catImg2);
        cat.changeAnimation("catStop");
        cat.velocityX=0;

        mouse.addAnimation("mouseStop",mouseImg3);
        mouse.changeAnimation("mouseStop");

        cat.x=mouse.x+60;
    }

}
