class Ground{
    constructor(x,y,w,h){
        var op1 = {
            isStatic:true
        }
        this.ground = Bodies.rectangle(x,y,w,h,op1)
        World.add(world,this.ground)
        this.width=w
        this.height=h
    }
    display(){
        rectMode(CENTER)
        fill("blue")
        rect(this.ground.position.x,this.ground.position.y,this.width,this.height)
    }
}
