var helicopterIMG, helicopterSprite, package1, packageIMG, ground;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);

	package1=createSprite(width/2, 200, 50,50);
	package1.addImage(packageIMG);
	package1.scale=0.2;
	
	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG);
	helicopterSprite.scale=0.6;

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	engine = Engine.create();
	world = engine.world;

	//package = new Package(width/2, 200, 50, 50);
	package2 = Bodies.rectangle(width/2, 200, 50, 50 , {isStatic:true} );
	World.add(world, package2);

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

 	boxPosition=width/2-100
 	boxY=610;


 	boxleftSprite=createSprite(boxPosition, boxY, 20,100);
 	boxleftSprite.shapeColor=color(255,0,0);

 	boxLeftBody = Bodies.rectangle(boxPosition+20, boxY, 20,100 , {isStatic:true} );
 	World.add(world, boxLeftBody);

 	boxBase=createSprite(boxPosition+100, boxY+40, 200,20);
 	boxBase.shapeColor=color(255,0,0);

 	boxBottomBody = Bodies.rectangle(boxPosition+100, boxY+40, 200,20 , {isStatic:true} );
 	World.add(world, boxBottomBody);

 	boxleftSprite=createSprite(boxPosition+200 , boxY, 20,100);
 	boxleftSprite.shapeColor=color(255,0,0);

 	boxRightBody = Bodies.rectangle(boxPosition+200-20 , boxY, 20,100 , {isStatic:true} );
 	World.add(world, boxRightBody);


	Engine.run(engine);
  
}


function draw() {
  background(0);

  //package.display();
  package1.x = package2.position.x;
  package1.y = package2.position.y;

  if(keyDown(LEFT_ARROW)){
	helicopterSprite.x = helicopterSprite.x - 10;
	Matter.Body.translate(package2 , {x:-10 , y:0});
  }

  if(keyDown(RIGHT_ARROW)){
	helicopterSprite.x = helicopterSprite.x + 10;
	Matter.Body.translate(package2 , {x:10 , y:0});
  }

  if(keyDown(DOWN_ARROW)){
	Matter.Body.setStatic(package2 , false);
  }

  drawSprites();
  
  
 
}
