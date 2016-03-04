// basic template sketch showing how to use the Turtle class
var myTurtle;
var myTurtle2;
var chick;
var egg;


function preload() {
	chick = loadImage("assets/chick.png");
	egg = loadImage("assets/egg.png");
}

function setup() {
	createCanvas(800, 600);
	noFill();
	stroke(255);
	background(0);
	noLoop();


	myTurtle = new Turtle();
	myTurtle2 = new Turtle();
}



function draw() {

	var z = random(20);
	// turtle1
	myTurtle.penUp();
	myTurtle.moveTo(400, 300);
	myTurtle.turnTo(-90);
	//myTurtle.penDown();



	for (var a = 0; a < 100; a++) {
		for (var i = 0; i < 400; i++) {
			myTurtle.moveForward(20);
			if (z < 10) {
				myTurtle.image(egg, 20 + i * 0.1, 20 + z);
			} else {
				myTurtle.image(chick, 20 + i * 0.1, 20 + a);
			}

			myTurtle.turnRight((a + i) + z);
			stroke(255);

		}
	}

	// turtle2
	var t = random(20);
	myTurtle2.penUp();
	myTurtle2.moveTo(400, 300);
	myTurtle2.turnTo(-90);
	//myTurtle2.penDown();

	for (var b = 0; b < 300; b++) {
		for (var y = 0; y < 300; y++) {
			myTurtle2.moveForward(20);
			if (t < 10) {
				myTurtle2.image(chick, 10 + t, 10 + y * 0.3);
			} else {
				myTurtle2.image(egg, 30 + t, 30 + y * 0.3);
			}

			myTurtle2.turnRight((b + y) + t);
			stroke(50);
		}
	}
}
