// shows how to use the p5.svg.js library to export a p5 drawing as svg

// requires p5.svg.js v0.5.2 and  p5.js v0.4.13
// https://github.com/zenozeng/p5.js-svg/releases
// https://github.com/processing/p5.js/releases
var myTurtle;


function setup() {
	// create a place to draw use "SVG" to activate the SVG p5 plugin
	createCanvas(6 * 72, 6 * 72, SVG);
	noLoop();
	//fill(255, 0, 0);
	stroke(100, 20, 255);
	strokeWeight(1);

	// use p5.dom.js to create a button and set it up to call "save()"
	var button = createButton("Save SVG");
	button.mousePressed(function() {
		save();
	});

	myTurtle = new Turtle();

}

function draw() {
	// clear the background
	clear();

	// draw a 1-inch ellipse (72 pixels per inch)
	myTurtle.penUp();
	myTurtle.moveBackward(0);
	//add
	myTurtle.turnLeft(90);
	myTurtle.moveForward(100);
	myTurtle.penDown();

	for (var i = 0; i < 100; i++) {
		for (var y = 0; y < 5; y++) {
			myTurtle.turnLeft(170); // start
			myTurtle.moveForward(200);
		}
		myTurtle.turnLeft(5);
	}


}
