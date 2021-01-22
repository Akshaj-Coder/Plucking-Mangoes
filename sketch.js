
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var Tree;
var Ground;
var Boy;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	//Tree = new tree(20,20,200,20);

	Ground = new ground(1000,600,4000,20); 
	Boy = new boy(900,650,2000,20);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230,230,230);
  
  //Tree.display();
    Boy.display();
	Ground.display();
	

  drawSprites();
 
}



