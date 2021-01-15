class Box extends BaseClass{

constructor(x,y,width,height){

super(x,y,width,height)

this.Visibility = 255;

}

display(){

if(this.body.speed<7){

    super.display();

}

else {

    World.remove(world,this.body);
    push();
    this.Visibility = this.Visibility - 5;
    tint(255,this.Visibility)
    pop();

}

}

score(){
 
    if(this.Visiblity < 0 && this.Visiblity> -1005 )
    {
   
    score++;
   
    }
    }

}