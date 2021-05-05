const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

function preload() {
    Polygon = loadImage("polygon.png");
}

function setup() {
    createCanvas(900, 400)
    engine = Engine.create();
    world = engine.world;
    
    ground = new Ground(450, 395, 900, 10)

    stand1 = new Ground(390, 300, 150, 10)
    stand2 = new Ground(700, 200, 150, 10)
    
    //level one
    block1 = new Block(640, 135, 30, 40);
    block2 = new Block(670, 135, 30, 40);
    block3 = new Block(700, 135, 30, 40);
    block4 = new Block(730, 135, 30, 40);
    block5 = new Block(760, 135, 30, 40);
    //level two
    block6 = new Block(670, 95, 30, 40);
    block7 = new Block(700, 95, 30, 40);
    block8 = new Block(730, 95, 30, 40);
    //level three
    block9 = new Block(700, 55, 30, 40);

    //level one
    block10 = new Block(330, 235, 30, 40);
    block11 = new Block(360, 235, 30, 40);
    block12 = new Block(390, 235, 30, 40);
    block13 = new Block(420, 235, 30, 40);
    block14 = new Block(450, 235, 30, 40);
    //level two
    block15 = new Block(360, 195, 30, 40);
    block16 = new Block(390, 195, 30, 40);
    block17 = new Block(420, 195, 30, 40);
    //level three
    block18 = new Block(390, 155, 30, 40);
    
    polygon = Bodies.rectangle(50, 200, 70, 70);
    World.add(world, polygon)

    slingShot = new SlingShot(this.polygon, {x: 100, y: 200});
}

function draw() {
    background(0, 0, 0)
    Engine.update(engine);
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    block13.display();
    block14.display();
    block15.display();
    block16.display();
    block17.display();
    block18.display();

    ground.display();

    stand1.display();
    stand2.display();

    slingShot.display();

    imageMode(CENTER);
    image(Polygon, polygon.position.x, polygon.position.y, 70, 70);
}

function mouseDragged() {
    Matter.Body.setPosition(this.polygon, {x: mouseX, y: mouseY});
}

function mouseReleased() {
    slingShot.fly();
}