class Mango{
    constructor(x,y,radius){
        var options = {
            isStatic : true,
            restitution : 0,
            friction : 1
        }
        this.body = Bodies.circle(x,y,radius,options);
        this.image = loadImage("Plucking mangoes 2/mango.png");
        World.add(world,this.body);
        this.r=radius;
       
    }
    display(){
        
        var pos = this.body.position;
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,50,50);
    }
}