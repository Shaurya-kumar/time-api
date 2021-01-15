class Hex{

    constructor(x,y,r){
    
    var options={
    
        isStatic:false,
        restitution:1,
        friction:1,
        density:5
    
    }
    
    this.x = x;
    this.y = y;
    this.r = r;
    
    this.image = loadImage("hex.png");

    this.body = Bodies.circle(x,y,r,options); 
    World.add(world,this.body);
    
    }
    display(){
    
    var pos = this.body.position;
    
    push()
    translate(pos.x,pos.y)
    //fill(238, 0, 255);
    imageMode(CENTER);
    image(this.image,0,0,this.r*6,this.r*6) 
    pop();
    
    }
    
    }