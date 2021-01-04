class Pinko {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.circle(x,y,this.radius,options);
      this.radius = 10;
      this.color = color(random(0,255),random(0,255),random(0,255))
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      circleMode(CENTER);
      
      fill("brown");
      circle(pos.x, pos.y, this.radius);
    }
  };