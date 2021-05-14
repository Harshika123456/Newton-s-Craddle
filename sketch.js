
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup(){
createCanvas(800, 700);

engine = Engine.create();
world = engine.world;
bob1 = new Bob(140,125,100,100);
bob2 = new Bob(240,250,100,100);
bob3 = new Bob(340,375,100,100);
bob4 = new Bob(440,500,100,100);
bob5 = new Bob(540,625,100,100);
roof = new Roof(400,100,550,50);
chain1 = new Chain(bob1.body,{x:200, y:100})
chain2 = new Chain(bob2.body,{x:300, y:100})
chain3 = new Chain(bob3.body,{x:400, y:100})
chain4 = new Chain(bob4.body,{x:500, y:100})
chain5 = new Chain(bob5.body,{x:600, y:100})
Engine.run(engine);
  
}

function draw(){
rectMode(CENTER);
background('white');
bob1.display();
bob2.display();
bob3.display();
bob4.display();
bob5.display();
roof.display();
chain1.display();
chain2.display();
chain3.display();
chain4.display();
chain5.display();
drawSprites();
 
}

function keyPressed(){
    if(keyCode === UP_ARROW){
      Matter.Body.applyForce(bob1.body, bob1.body.position, {x:-20, y:-15})
    }
}