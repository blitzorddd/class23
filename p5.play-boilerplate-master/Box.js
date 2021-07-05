class Box{
    constructor(x,y,width,height){
      var op = {
          restitution:0.6
      }
        this.box = Bodies.rectangle(x,y,width,height,op)
        this.width = width;
        this.height = height;
      World.add(world,this.box)
    }
    display(){
       //used to capture a new setting
        push()
        translate(this.box.position.x,this.box.position.y)
        rotate(this.box.angle)
        rectMode(CENTER)
        fill("red");
        rect(0,0,this.width,this.height)
        //used to revert back to the old setting
        pop()
    }
}
