
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject	
var world;
var dustkeeper;

function preload(){
	dustbingreen=loadImage("dustbingreen.png");
	trashIMG=loadImage("paper.png");
	backIMG=loadImage("ddd.png");
	c=loadImage("c.png");
	c1=loadImage("c1.png");
}

function setup() {
	createCanvas(1600, 675);
	rectMode(CENTER);

	background(0);

	engine = Engine.create();
	world = engine.world;


	wave1=createSprite(900,20,200,30);
    World.add(world, wave1);
	wave1.addImage(c1);

	wave2=createSprite(1420,120,200,30);
    World.add(world, wave1);
	wave2.addImage(c);

	wave3=createSprite(250,120,200,30);
    World.add(world, wave1);
	wave3.addImage(c1);

    back=createSprite(800,150,50,50);
	back.addImage(backIMG);
	back.scale=1.5;
	World.add(world, back);
    console.log(back.x);

	
	paperBody = createSprite(200, 650,30,30, options);
    paperBody.addImage(trashIMG);
	World.add(world, paperBody);
	paperBody.scale=0.55;

	groundObject=new ground(width/2,670,width,20);
	groundObject2=new ground(width/2,600,width,160);
	dustbinObj=new dustbin(1200,650);

	Engine.run(engine);

	dustkeeper=createSprite(1200,550,20,20);
	dustkeeper.addImage(dustbingreen);
	dustkeeper.scale=0.85;

	var options={
		isStatic:false,
		friction:0.5,
		density:1.2,
		restitution:0.3			
		}
	
}


function draw() {
  rectMode(CENTER);
  background(230);

  rectMode(CENTER)
  fill(128,128,128)
  rect(paperBody.x,paperBody.y,30, 30);

  groundObject.display();
  groundObject2.display();
  dustbinObj.display();

if (keyDown("down")){
	paperBody.velocityX=10;
	paperBody.velocityY=-10;
}
if (paperBody.isTouching(wave1)){
	paperBody.velocityX=10;
	paperBody.velocityY=0;
}
if (paperBody.isTouching(wave2)){
	paperBody.velocityX=0;
	paperBody.velocityY=10;
}
  drawSprites();
}

