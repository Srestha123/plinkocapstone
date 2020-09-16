
const Engine = Matter.Engine;
const World = Matter.World;
const  Body = Matter.Body;
const Bodies = Matter.Bodies;
var particles;
var plinkos = [];
var divisions = [];
var divisionHeight=300;
var score =0;
var gameState="play",points=0;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);
   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }
    for (var j = 75; j <=width; j=j+50) 
    {
       plinkos.push(new Plinko(j,75));
    }
    for (var j = 50; j <=width-10; j=j+50) 
    {
       plinkos.push(new Plinko(j,175));
    }
     for (var j = 75; j <=width; j=j+50) 
    {
       plinkos.push(new Plinko(j,275));
    }
     for (var j = 50; j <=width-10; j=j+50) 
    {
       plinkos.push(new Plinko(j,375));
    }
}
function draw() {
  background("black");
  textSize(20) 
  Engine.update(engine);
 
   for (var i = 0; i < plinkos.length; i++) {  
     plinkos[i].display();  
   }
   for (var i = 0; i < divisions.length; i++) {  
    divisions[i].display();  
  }
  ground.display();
 
   text(points,200,100);
   if(gameState==="end"){
    textSize(100);
    text("GAME OVER!",100,400);
  }
  
}


function mousePressed(){
  if(gameState!=="end"){ 
    particles=new Particle(mouseX,10,10);
    score++;
    console.log("mouse is pressed");
  }
  if (particles!==null){
    particles.display();
    console.log("mouse is pressed,display");
    if(particles.body.position.y>760)
    {
      if(particles.body.position.x<300){
        points=points+500;
        particles=null;
        if(score>=5){
          gameState="end";
        }
  
      }
    }
}
}
