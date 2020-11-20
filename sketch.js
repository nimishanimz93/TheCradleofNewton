
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Render = Matter.Render;
const Body = Matter.Body;

var engine, world;
var roof;
var bob1;
var rope1;
var bobDiameter;
var canvas;

function setup(){

	var canvas = createCanvas(1600, 1000);
	
    engine = Engine.create();
    world = engine.world;

    var render = Render.create({
        element: document.body,
        engine: engine,
        options: {
            width: 1200,
            height: 700,
            wireframes: false
        }
    });

    roof = new Roof(800,150,900,20);
    
    startBobPositionX = width/2;
	startBobPositionY = height/4+500;
    bobDiameter = 40
    bob1 = new Bob(580, 550, 100, PI/2);
    bob2 = new Bob(690, 550, 100, PI/2);
    bob3 = new Bob(800, 550, 100, PI/2);
    bob4 = new Bob(910, 550, 100, PI/2);
    bob5 = new Bob(1020, 550, 100, PI/2);

    rope1=new Rope(bob1.body, roof.body, -bobDiameter*2, 0)
    rope2=new Rope(bob2.body, roof.body, -bobDiameter*1, 0)
    rope3=new Rope(bob3.body, roof.body, 0, 0)
    rope4=new Rope(bob4.body, roof.body, bobDiameter*1, 0)
    rope5=new Rope(bob5.body, roof.body, bobDiameter*2, 0)

	Engine.run(engine);
}

function draw(){

	background(255);
	
	strokeWeight(4);
	
	roof.display();

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

function keyPressed(){
 if ((keyCode === UP_ARROW) || (keyCode === LEFT_ARROW)) {
     Matter.Body.applyForce(bob1.body, bob1.body.position, {x:-50,y:-45});
  }
}

function drawLine(constraint) {
    bobBodyPosition=constraint.bodyA.position
    roofBodyPosition=constraint.bodyB.position
    roofBodyOffset=constraint.pointB;
    roofBodyX=roofBodyPosition.x + roofBodyOffset.x
    roofBodyY=roofBodyPosition.y + roofBodyOffset.y
    line(bobBodyPosition.x, bobBodyPosition.y, roofBodyX, roofBodyY);
}
