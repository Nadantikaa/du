const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var pinkos = [];
    var divisions = [];
    var particles = [];
    
    var divisionHeight = 30;


function setup(){
    var canvas = createCanvas(800,480);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    
}




function draw(){
    background(0,0,0);
    Engine.update(engine);

    
    for(var k = 0;k <= width ; k = k +80){
      divisions.push(new Division(k , height - divisionHeight/2,10,divisionHeight));
    
    }


    for(var j = 0;j<=width ; j = j+50){
        pinkos.push(new Pinko(j,75));
    }
    for(var j = 0;j<=width ; j = j+50){
        pinkos.push(new Pinko(j,175));
    }
    for(var j = 0;j<=width ; j = j+50){
        pinkos.push(new Pinko(j,275));
    }
    for(var j = 0;j<=width ; j = j+50){
        pinkos.push(new Pinko(j,375));
    }
    for(var j = 0;j<=width ; j = j+50){
        pinkos.push(new Pinko(j,475));
    }
    for(var j = 0;j<=width ; j = j+50){
        pinkos.push(new Pinko(j,575));
    }
    for(var j = 0;j<=width ; j = j+50){
        pinkos.push(new Pinko(j,675));
    }

for(var j =0;j< particles.length; j++){
    particles[j].display();


}
for(var k = 0;k = division.length;k++){
    division[k].display();
}

if(frameCount%60 === 0){
    particles.push(new Particles(random(width/2-10,width/2+10),10,10));
}

    ground.display();

    drawSprites();
       
}

