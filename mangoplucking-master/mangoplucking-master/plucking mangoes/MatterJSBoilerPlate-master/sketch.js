
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	boy = loadImage("boy.png")
	tree = loadImage("tree.png");
}

function setup() {
	createCanvas(1300, 600);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(width/2,height - 20,width,20);
	
	//tree = new Tree(1000,200);
	stone = new Stone(200,400,50,50);
	sling = new SlingShot(stone.body,{x:220,y:470})
	mango1 = new Mango(1000,200);
	mango2 = new Mango(1100,180);
	mango3 = new Mango(900,200);
	mango4 = new Mango(1050,250);
	mango5 = new Mango(930,150);
	mango6 = new Mango(1100,250);
	mango7 = new Mango(1150,150);
	mango8 = new Mango(950,250);
	mango9 = new Mango(850,180);
	mango10 = new Mango(1050,100);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightgreen");
  image(boy,200,420,100,200);
  image(tree,800,10,400,600);
  ground.display();
  //tree.display();
  stone.display();
  sling.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();

  detectollision(stone,mango1);
  detectollision(stone,mango2);
  detectollision(stone,mango3);
  detectollision(stone,mango4);
  detectollision(stone,mango5);
  detectollision(stone,mango6);
  detectollision(stone,mango7);
  detectollision(stone,mango8);
  detectollision(stone,mango9);
  detectollision(stone,mango10);

  drawSprites();
 
}

function mouseDragged(){
	Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
	sling.fly();
}

function detectollision(lstone,lmango){

    mangoBodyPosition=lmango.body.position
    stoneBodyPosition=lstone.body.position
  
    var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
 
  	if(distance<=35)
    {
		console.log(distance)
  	  Matter.Body.setStatic(lmango.body,false);
    }

  }

  function keyPressed() {
	if (keyCode === 32) {
      Matter.Body.setPosition(stone.body, {x:220, y:470}) 
	  sling.attach(stone.body);
	}
  }
