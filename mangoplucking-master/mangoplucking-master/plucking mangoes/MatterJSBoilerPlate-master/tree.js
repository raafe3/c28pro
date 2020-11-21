class Tree{
    constructor(x,y){
        var options = {
            isStatic : true
        }
        this.body = Bodies.rectangle(x,y,400,600);
        this.image = loadImage("tree.png");
        World.add(world,this.body)
    }

    display(){
 
        push ();
        translate(this.body.position.x,this.body.position.y)
        rotate(this.body.angle)
        imageMode(CENTER);
        image(this.image,0,0,400,600);
pop ();
    }
}