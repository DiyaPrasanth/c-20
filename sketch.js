
var movingObj, fixedObj;

function setup() {
  createCanvas(800,400);
  movingObj = createSprite(200,200, 50, 50);
  fixedObj = createSprite(100,170,50,50)
}

function draw() {
  background(255,255,255);  
movingObj.debug = "true";
fixedObj.debug = "true";
movingObj.x = World.mouseX;
movingObj.y = World.mouseY;
console.log(movingObj.x - fixedObj.x);
if(movingObj.x - fixedObj.x < movingObj.width/2 + fixedObj.width/2 &&
  fixedObj.x - movingObj.x < movingObj.width/2 + fixedObj.width/2 &&
  movingObj.y - fixedObj.y < movingObj.height/2 + fixedObj.height/2 &&
  fixedObj.y - movingObj.y < movingObj.height/2 + fixedObj.height/2){
  movingObj.shapeColor = "red";
}
else{
  movingObj.shapeColor = "green";
}

  drawSprites();
}