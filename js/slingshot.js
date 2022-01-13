class Slingshot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length:10
        }
        this.bodyA=body;
        this.pointB=pointB;
        World.add(world.this.sling);
    }
    display(){
        var pointB=this.pointB;
        var pointA = this.sling.bodyA.position;
        line(pointA.x, pointA.y, pointB.x, pointB.y)
        var pointB = this.pointB;
        strokeWeight(4);
    }
    attach(body){
        this.slingshot.bodyA=body;
    }
    fly(){
        this.slingshot.bodyA=null;
    }
}