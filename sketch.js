const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

 var sq1,sq2,sq3,sq4,sq5,sq6,sq7,sq8,sq9,sq10,sq11,sq12,sq13,sq14,sq15,sq16,sq17,sq18,sq19,sq20,sq21,sq22
 ,sq23,sq24,sq25,sq26,sq27,sq28,sq29,sq30,sq31,sq32,sq33,sq34,sq35,sq36;
var ground;
var base1;
var hex;
var sling;
var score = 0;

var backgroundImg;

var bg = "light.jpg" ;

function preload() {
  //   backgroundImg = loadImage("sprites/bg.png");
 
  getBackGroundImg();
 }

function setup() {
  createCanvas(1200,800);

  engine = Engine.create();
  world = engine.world;
 
  Engine.run(engine);

 sq1 = new Box(325,575,50,50);
 sq2 = new Box(375,575,50,50);
 sq3 = new Box(425,575,50,50);
 sq4 = new Box(475,575,50,50);
 sq5 = new Box(525,575,50,50);
 sq6 = new Box(575,575,50,50);
 sq7 = new Box(625,575,50,50);
 sq8 = new Box(675,575,50,50);
 sq9 = new Box(350,525,50,50);
 sq10 = new Box(400,525,50,50);
 sq11 = new Box(450,525,50,50);
 sq12 = new Box(500,525,50,50);
 sq13 = new Box(550,525,50,50);
 sq14 = new Box(600,525,50,50);
 sq15 = new Box(650,525,50,50);
 sq16 = new Box(375,475,50,50);
 sq17 = new Box(425,475,50,50);
 sq18 = new Box(475,475,50,50);
 sq19 = new Box(525,475,50,50);
 sq20 = new Box(575,475,50,50);
 sq21 = new Box(625,475,50,50);
 sq22 = new Box(400,425,50,50);
 sq23 = new Box(450,425,50,50);
 sq24 = new Box(500,425,50,50);
 sq25 = new Box(550,425,50,50);
 sq26 = new Box(600,425,50,50);
 sq27 = new Box(425,375,50,50);
 sq28 = new Box(475,375,50,50);
 sq29 = new Box(525,375,50,50);
 sq30 = new Box(575,375,50,50);
 sq31 = new Box(450,325,50,50);
 sq32 = new Box(500,325,50,50);
 sq33 = new Box(550,325,50,50);
 sq34 = new Box(475,275,50,50);
 sq35 = new Box(525,275,50,50);
 sq36 = new Box(500,225,50,50);
 ground = new Ground(600,790,1200,20);
 base1 = new Base(500,600,420,10);
 hex = new Hex(1000,500,40,40);
 sling = new Slingshot(hex.body,{x:1000,y:500});

}

function draw() {
  if(backgroundImg){
  background(backgroundImg);
  }

  noStroke();
  textSize(40);
  fill("white")
  text("score : " + score , width-300,50);

  drawSprites();

  sq1.display();
  sq2.display();
  sq3.display();
  sq4.display();
  sq5.display();
  sq6.display();
  sq7.display();
  sq8.display();
  sq9.display();
  sq10.display();
  sq11.display();
  sq12.display();
  sq13.display();
  sq14.display();
  sq15.display();
  sq16.display();
  sq17.display();
  sq18.display();
  sq19.display();
  sq20.display();
  sq21.display();
  sq22.display();
  sq23.display();
  sq24.display();
  sq25.display();
  sq26.display();
  sq27.display();
  sq28.display();
  sq29.display();
  sq30.display();
  sq31.display();
  sq32.display();
  sq33.display();
  sq34.display();
  sq35.display();
  sq36.display();
  ground.display();
  base1.display();
  hex.display();
  sling.display();

}

function mouseDragged(){

  Matter.Body.setPosition(hex.body,{x:mouseX,y:mouseY});
  
  }
  
  function mouseReleased(){
  
    sling.fly();
  
  }

  async function getBackGroundImg(){

    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Tokyo");
    var responseJSON = await response.json();
    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11,13);
    
    if(hour>=06 && hour<=18){
    
        bg =  "light.jpg";
    
    }
    else
    {
        
        bg ="background.jpg";
    
    }
    
    backgroundImg = loadImage(bg);
    
    console.log(backgroundImg);
    
    
    }