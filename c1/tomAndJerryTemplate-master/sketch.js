var bg,bgimage;
var tom,tomimage;
var jerry,jerryImage

function preload() {
    //load the images here
    bgimage= loadImage("garden.png")
    tomimage=loadAnimation("tomOne.png","tomTwo.png","tomThree.png","tomFour.png")
    jerryImage=loadAnimation("jerryOne.png","jerryTwo.png","jerryThree.png","jerryFour.png")
}

function setup(){
    createCanvas(1000,800);
    bg=createSprite(500,400);
    tom=createSprite(100,200)
   
    jerry=createSprite(200,200)
    jerry.addAnimation("bye",jerryImage)
    //create tom and jerry sprites here

}

function draw() {

    background(bgimage);
    //Write condition here to evalute if tom and jerry collide
    if(tom.x-jerry.x<(tom.width-jerry.width)/2){
        tom.velocityX=0
    }
keyPressed(tom,jerry);
    drawSprites();
}


function keyPressed(tom,jerry){

  //For moving and changing animation write code here
  if(keyCode===LEFT_ARROW){
    tom.velocityX=-5
    tom.addAnimation("hi",tomimage)
    tom.changeAnimation("hi")
}

}
