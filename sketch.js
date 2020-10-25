var bullet,wall;
var speed,weight, thickness;

function setup() {
  createCanvas(1600,400);
 bullet = createSprite(50, 200, 50, 10);
 wall = createSprite(1500,200,thickness,height/2);
 wall.shapeColor = color(80,80,80);


 speed=random(223,321);
 weight=random(30,52);
 thickness=random(22,83);

}

function draw() {  
 background("white");
  bullet.velocityX=speed; 
  if(wall.x-bullet.x < (bullet.width+wall.width)/2)
  {
   bullet.velocityX=0;
   var deformation=0.5 * weight * speed* speed/22500;
   if(deformation>80)
   {
     wall.shapeColor=color(255,0,0);
   }
   if(deformation<80)
   {
     wall.shapeColor=color(0,255,0);
   }
  }
  drawSprites();
}
