
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	Ball_image=loadImage("ball1.png")
	Dustbin_image=loadImage("dustbin.png")
}

function setup() {
	createCanvas(800, 400);


	engine = Engine.create();
	world = engine.world;
    ball_options={
		restitution:0.5
	}
	ground_options={
		isStatic:true
	}
	//Create the Bodies Here.
	ball=Bodies.rectangle(100,350,40,40,ball_options)
	
	World.add(world,ball)
	ground=Bodies.rectangle(400,400,800,20,ground_options)
	World.add(world,ground)
    box1=new box(500,350,20,100)
	box2=new box(600,350,20,100)
	box3=new lying(550,390,120,20)
	keyPressed()
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  
  background("white");
  imageMode (CENTER)
  box1.display()
  box2.display()
  box3.display()
  image(Ball_image,ball.position.x,ball.position.y,40,40)
  image(Dustbin_image,box3.body.position.x,box3.body.position.y-20,150,150)
  rect(ground.position.x,ground.position.y,800,20)
  drawSprites();
  console.log(ball.width)
}
function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.setVelocity(ball,{x:9.7,y:-10})
	}
}


