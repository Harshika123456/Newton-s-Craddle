class Chain{
constructor(bodyA, pointB){
var options = {
    bodyA: bodyA,
    pointB: pointB,
    length: 400
        
}
        
this.pointB = pointB
this.sling = Constraint.create(options);
World.add(world, this.sling);
    
}

fly(){
   this.sling.bodyA = null;
}

attach(body){
      this.sling.bodyA = body
}

display(){
       
var pointA = this.sling.bodyA.position;
var pointB = this.pointB;
push();
stroke(48,22,8);
strokeWeight(2);
line(pointA.x, pointA.y, pointB.x, pointB.y);
pop();
        
}
    
}