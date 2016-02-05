// just draws a circle

function setup() {
	// create a place to draw
	createCanvas(640, 360);
}


function draw() {
	// clear the background
	background(0, 0, 0);

	// set drawing styles
	stroke(255, 0, 0);
	fill(255, 255, 255);
	//strokeWeight(20);

	// draw a circle
	rect(320, 180, 100, 100);
}
