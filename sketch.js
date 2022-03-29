
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

var ball;
var bottom_wall;
var right_wall;
var left_wall;


function preload()
{
	
}

function setup() {
	createCanvas(600, 300);
	
	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);

	var ball_options = {
		restitution : 0.3,
		friction : 0,
		density : 1.2
	}
	
	//Create the Bodies Here.
	ball = Bodies.circle(100,100,10,ball_options)
	World.add(world,ball)

	bottom_wall = new Ground(300,290,600,10);
	right_wall = new Ground(300,235,10,100);
  	left_wall = new Ground(450,235,10,100);

	  rectMode(CENTER);
	  ellipseMode(RADIUS);

	}


function draw() {
  rectMode(CENTER);
  background("black");
  bottom_wall.show();
  left_wall.show();
  right_wall.show();
  push()
  fill("white")
  ellipse(ball.position.x,ball.position.y,10)
  pop()
  Engine.update(engine);
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
Body.applyForce(ball,{x:0 ,y:0},{x:5,y:-5})
	}
}

