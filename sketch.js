var canvas1,bg;
var together;
var tom, tomImg1,tomImg2;
var jerry, jerryImg1,jerryImg2;

function preload() {
    bg = loadImage("garden.jpg");
    tomImg1= loadAnimation("tomOne_new.png");
    tomImg2=loadAnimation("tomTwo.png","tomThree.png");
    tomImg3= loadAnimation("tomFour.png");
    jerryImg1=loadAnimation("jerryOne_new.png");
    jerryImg2= loadAnimation("jerryTwo_new.png","jerryThree_new.png");
    jerryImg3=loadAnimation("jerryFour_new.png");

}

function setup(){
    createCanvas(1000,650);
    canvas1 = createSprite(500,325);
     canvas1.addImage(bg);
    tom = createSprite(850, 600,130,80);
    tom.addAnimation("tomSleeping", tomImg1);
    tom.debug = true;
    tom.scale=0.8;

    jerry = createSprite(450, 480,60,100);
    jerry.addAnimation("jerryStanding", jerryImg1);
    jerry.debug = true;
    jerry.scale=0.8;

    tom.height = 80;
    console.log(tom.x-jerry.x) ;
    console.log(tom.width);
}

function draw() {

   // background(bg);

    if(tom.x-jerry.x < tom.width/2+ jerry.width/2 && tom.y-jerry.y<tom.height/2+jerry.height/2)
    {   
        
        console.log(jerry.width/2);
        tom.velocityX=0;
        tom.velocityY=0;
        tom.addAnimation("tomLastImage", tomImg3);
        //tom.x =jerry.x+jerry.width/2;
        //tom.y = jerry.y+jerry.height/2;
        tom.changeAnimation("tomLastImage");
        jerry.addAnimation("jerryLastImage", jerryImg3);
        jerry.changeAnimation("jerryLastImage");
    }  
    

    drawSprites();
}


function keyPressed(){

    if(keyCode === LEFT_ARROW){
        tom.velocityX = -5; 
        tom.addAnimation("tomRunning", tomImg2);
        tom.changeAnimation("tomRunning");
        
        jerry.addAnimation("jerryTeasing", jerryImg2);
        jerry.frameDelay = 25;
        jerry.changeAnimation("jerryTeasing");
    }
    if(keyCode === UP_ARROW){
        tom.velocityY = -1;
        tom.addAnimation("tomRunning", tomImg2);
        tom.changeAnimation("tomRunning");
        
        jerry.addAnimation("jerryTeasing", jerryImg2);
        jerry.frameDelay = 25;
        jerry.changeAnimation("jerryTeasing");
    }
    
}
