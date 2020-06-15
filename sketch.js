
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World = Matter.World;
var engine,world,ground,s1,s2,s3;
var dbI,cpI,db,cp;

function preload(){
  dbI=loadImage("dustbingreen.png");
  cpI=loadImage("paper.png");
}

function setup() {
  createCanvas(1000,500);
  engine=Engine.create();
  world=engine.world;

  ground = Bodies.rectangle(width/2,height-15,width,15,{isStatic:true});
  World.add(world,ground);

  db=createSprite(825,height-100);
  db.addImage(dbI);
  db.scale=0.5;

  s1=Bodies.rectangle(763,height-100,7,150,{isStatic:true});
  World.add(world,s1);
  s2=Bodies.rectangle(825,height-25,125,10,{isStatic:true});
  World.add(world,s2);
  s3=Bodies.rectangle(887,height-100,7,150,{isStatic:true});
  World.add(world,s3);
  
  ball = Bodies.circle(100,400,25,{isStatic:false,restitution:0.3,friction:0.5,density:1.2});
  World.add(world,ball);
  cp = createSprite();
  cp.addImage(cpI);
  cp.scale=0.375;

}

function draw() {
  background(256,256,256);  
  Engine.update(engine);

  fill(color(111,78,55));{
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,width,15);
  noFill();}

  cp.x=ball.position.x;
  cp.y=ball.position.y;
  drawSprites();
}

function keyPressed(){
  if(keyCode===UP_ARROW){
    Matter.Body.applyForce(ball,ball.position,{x:0,y:-50});
  }
  if(keyCode===RIGHT_ARROW){
    Matter.Body.applyForce(ball,ball.position,{x:50,y:0});
  }
}