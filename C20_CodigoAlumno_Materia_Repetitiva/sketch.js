
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var ball;
var ground;

var rock;
var ground2;

function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  
   var ball_options = {
    restitution: 0.95,
    frictionAir:0.01
  };
   
   var ground_options ={
     isStatic: true
   };
   
   var rock_options = 
   {
    restitution : 0.4
   };



   

  ground = Bodies.rectangle(200,390,400,20,ground_options);
  World.add(world,ground);

  ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);

  rock = Bodies.circle(300,5,15,rock_options);
  World.add(world,rock);

  ground2 = Bodies.rectangle(200,200,200,10,ground_options);
  World.add(world,ground2);
  
  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  Engine.update(engine);
  
  fill('yellow');
  ellipse(ball.position.x,ball.position.y,20);
  fill(0);
  rect(ground.position.x,ground.position.y,400,20);

  fill('gray');
  ellipse(rock.position.x,rock.position.y,15);
  fill('white')
  rect(ground2.position.x,ground2.position.y,200,10);
 
}

