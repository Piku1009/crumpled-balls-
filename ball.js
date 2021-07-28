class Ball{
    constructor(x,y,radius){
        var options = {
           'isStatic':false,
            'restitution':0.3,
            'friction':0.5,
            'density':1.2
        }

        this.body = Bodies.circle(x,y,radius,options);
        World.add(world,this.body);

        this.radius = radius;
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill("white");
        circle(0,0,this.radius);
        pop();
    }
    keyPressed(){
        if(keyDown("UP_ARROW")){
            Matter.Body.applyForce(this.body,this.body.position,{x:85,y:-85});
        }
    }
}