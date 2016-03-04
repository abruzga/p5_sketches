// makes an image pixel by pixel

var myImage;

function setup() {
	// create a place to draw
	createCanvas(800, 600);

	//sliders
	rSlider = createSlider(0, 255, 100);
	rSlider.position(20, 20);
	gSlider = createSlider(0, 255, 0);
	gSlider.position(20, 50);
	bSlider = createSlider(0, 255, 255);
	bSlider.position(20, 80);


	myImage = createImage(800, 600);
	//noLoop();
}


function draw() {
	// clear the background
	background(0, 0, 0);

	var r = rSlider.value();
	var g = gSlider.value();
	var b = bSlider.value();

	// begin editing pixel data directly
	myImage.loadPixels();

	for (y = 0; y < 600; y++) {
		for (x = 0; x < 800; x++) {
			var pixelIndex = (y * 800 + x) * 4;


			// DEMO 1: Simple Gradients

			// myImage.pixels[pixelIndex] = (x / 800) * 255;
			// myImage.pixels[pixelIndex + 1] = (y / 600) * 255;
			// myImage.pixels[pixelIndex + 2] = random(255);


			// DEMO 2: Sin Waves
			myImage.pixels[pixelIndex] = random(255);
			myImage.pixels[pixelIndex + 1] = ((cos(x / 800.0 * PI * r) + 1) + (cos(
				y / 600.0 * PI * 2 * 8) + 1)) * g;
			myImage.pixels[pixelIndex + 2] = (sin(x / 800.0 * PI * 8) + 2) + (sin(x /
				800.0 * PI * 8) + 2) * b;



			myImage.pixels[pixelIndex + 3] = 210;
		}
	}

	//update image with modified pixel data
	myImage.updatePixels();

	image(myImage, 0, 0);
}
