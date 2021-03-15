const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constrain
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint




function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    bob1 = new bob(250,300);
    bob2 = new bob(300,300,);
    bob3 = new bob(350, 300);
    bob4 =  new bob(400,300 );
    bob5 = new bob(450,300);

    rope1 = new Log(bob1.body,roof.body,-100, 0);
    rope2 = new Log(bob2.body,roof.body,-50, 0);
    rope3 = new Log(bob3.body,roof.body,-0, 0);
    rope4 = new Log(bob4.body,roof.body,-50, 0);
    rope5 = new Log(bob5.body,roof.body,-100, 0);
   
}
function draw(){
    background("white");
    Engine.update(engine);
    
    bob1.display();
    bob2.display();
    bob3.display();
    bob4.display();
    bob5.display();

    rope1.display();
    rope2.display();
    rope3.display();
    rope4.display();
    rope5.display();
} 

function keyPressed() {
  	if (keyCode === UP_ARROW) {

    	Matter.Body.applyForce(bob1.body,bob2.body.position,{x:-730,y:0});

    
  	}
}































t