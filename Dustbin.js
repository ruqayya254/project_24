class Dustbin
{
    constructor(x,y){
        this.x=x
        this.y=y
        this.width=200
        this.height=100
        this.thickness=20
        this.angle=0
        this.bottomBody=Bodies.rectangle(this.x,this.y,this.width,this.thickness,{isStatic:true});
        this.leftWallBody=Bodies.rectangle(this.x-this.width/2,this.y-this.height/2,this.thickness,this.height,{isStatic:true});
        Matter.Body.setAngle(this.leftWallBody,this.angle)
        this.rightWallBody=Bodies.rectangle(this.x+this.width/2,this.y-this.height/2,this.thickness,this.height,{isStatic:true});
        Matter.Body.setAngle(this.rightWallBody,this.angle*-1)
        World.add(world,this.bottomBody)
        World.add(world,this.leftWallBody)
        World.add(world,this.rightWallBody)
    }

display(){
    var posBottom=this.bottomBody.position
    var posLeft=this.leftWallBody.position
    var posRight=this.rightWallBody.position
    push();
    translate(posLeft.x,posLeft.y)
    angleMode(RADIANS)
    rectMode(CENTER)
    strokeWeight(4)
    rotate(this.angle)
    stroke("green") 
    fill("red")
    rect(0,0,this.thickness,this.height)
    pop();


    push();
    translate(posRight.x,posRight.y)
    angleMode(RADIANS)
    rectMode(CENTER)
    strokeWeight(4)
    rotate(this.angle*-1)
    stroke("green") 
    fill("red")
    rect(0,0,this.thickness,this.height)
    pop();


    push();
    translate(posBottom.x,posBottom.y)
    angleMode(RADIANS)
    rectMode(CENTER)
    strokeWeight(4)
    stroke("green") 
    fill("red")
    rect(0,0,this.width,this.thickness)
    pop();
}
};