class Stone{
    constructor(x,y,radius){
        var options = {
            isStatic : false,
            restitution : 0,
            friction : 1,
            density: 1.2
        }
        this.body = Bodies.circle(x,y,radius,options);
        this.image = loadImage("Plucking mangoes 2/stone.png");
        World.add(world,this.body);
        this.r=radius;
    }
    display(){
        var pos = this.body.position;
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,40,40);
       
    }
}