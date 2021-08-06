var background1,iss,roket
var hasDocked=false
var hasDocked,scimg,spacecraft,scimg2,scimg3,scimg4,kush
function preload(){
background1=loadImage("spacebg.jpg")
iss=loadImage("iss.png")
scimg=loadImage("spacecraft1.png")
scimg2=loadImage("spacecraft2.png")
scimg3=loadImage("spacecraft3.png")
scimg4=loadImage("spacecraft4.png")

}

function setup() {

  createCanvas(800,400);
 roket=createSprite(400,200,50,50)
 roket.addImage(iss)
spacecraft=createSprite(340,340,50,50)
spacecraft.scale=0.15
spacecraft.addImage(scimg)
kush=createSprite(332,230,10,10)
}

function draw() {
  background(background1); 
  if(!hasDocked){
spacecraft.x=spacecraft.x + random(-1,1)


if(keyDown(UP_ARROW)){

spacecraft.y = spacecraft.y -2

}
if(keyDown(LEFT_ARROW)){
  spacecraft.addImage(scimg3)
spacecraft.x=spacecraft.x +2
}
if(keyDown(RIGHT_ARROW)){
  spacecraft.addImage(scimg4)
spacecraft.x=spacecraft.x -2
}
if(keyDown(DOWN_ARROW)){
  spacecraft.addImage(scimg)
spacecraft.y=spacecraft.y +2
}
if(spacecraft.isTouching(kush)){
  
spacecraft.Distory
iss.visible=false
fill("red")
  textSize(30)
text("docking sucssesfull",343,338)
}
kush.visible=false
  }
  
 
  drawSprites();
}