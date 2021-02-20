
// Ryan Magliola


let angle = 0;
let w = 20;
let orthoAngle;
let maxD;

function setup() {
	createCanvas(400, 400, WEBGL);
	orthoAngle = atan(cos(QUARTER_PI));
	maxD = dist(0, 0, 200, 200);
}

function draw() {
	background(abs(255 - ((frameCount + 42) % 510)) + 10, abs(255 - ((frameCount + 127) % 510)) + 10, abs(255 - ((frameCount+212) % 510)) + 10);
	ortho(-400, 400, 400, -400, 0, 1000);
	rotateX(orthoAngle);
	rotateY(frameCount/120);
	rotateZ(frameCount/240);

	for (let z = 0; z < height; z += w) {
		for (let x = 0; x < width; x += w) {
			push();
			let d = dist(x, z, width / 2, height / 2);
			let offset = map(d, 0, maxD, -PI, PI);
			let a = angle + offset;
			let h = floor(map(sin(a), -1, 1, 100, 300));
			translate(x - width / 2, 0, z - height / 2);
			c = color(abs(255 - ((frameCount + 85) % 510)), abs(255 - ((frameCount + 170) % 510)), abs(255 - (frameCount % 510)));
			fill(c);
			box(w-4, h, w-4);
			pop();
		}
	}

	angle -= 0.05;
}