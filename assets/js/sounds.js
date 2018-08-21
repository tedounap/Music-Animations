/*for(var x = 0; x < 1000; x+= 100) {
	for(var y = 0; y < 1000;y+= 100) {
		new Path.Circle(new Point(x, y), 10).fillColor = 'yellow';
	}
} */


var keyData = {
	a: {
	color: "purple",
	sound: new Howl({
		src: ['assets/sound/bubbles.mp3']
		})
	},
	s: {
	color: "yellow",
	sound: new Howl({
		src: ['assets/sound/clay.mp3']
		})
	},
	d: {
	color: "steelblue",
	sound: new Howl({
		src: ['assets/sound/confetti.mp3']
		})
	},
	f: {
	color: "blue",
	sound: new Howl({
		src: ['assets/sound/corona.mp3']
		})
	},
	g: {
	color: "red",
	sound: new Howl({
		src: ['assets/sound/dotted-spiral.mp3']
		})
	},
	h: {
	color: "green",
	sound: new Howl({
		src: ['assets/sound/flash-1.mp3']
		})
	},
	j: {
	color: "white",
	sound: new Howl({
		src: ['assets/sound/flash-2.mp3']
		})
	},
	k: {
	color: "salmon",
	sound: new Howl({
		src: ['assets/sound/glimmer.mp3']
		})
	},
	l: {
	color: "maroon",
	sound: new Howl({
		src: ['assets/sound/flash-3.mp3']
		})
	},
	q: {
	color: "deeppink",
	sound: new Howl({
		src: ['assets/sound/moon.mp3']
		})
	},
	w: {
	color: "mintcream",
	sound: new Howl({
		src: ['assets/sound/pinwheel.mp3']
		})
	},
	e: {
	color: "aqua",
	sound: new Howl({
		src: ['assets/sound/piston-1.mp3']
		})
	},
	r: {
	color: "orangered",
	sound: new Howl({
		src: ['assets/sound/prism-1.mp3']
		})
	},
	t: {
	color: "darkturquoise",
	sound: new Howl({
		src: ['assets/sound/piston-2.mp3']
		})
	},
	y: {
	color: "coral",
	sound: new Howl({
		src: ['assets/sound/prism-2.mp3']
		})
	},
	u: {
	color: "gold",
	sound: new Howl({
		src: ['assets/sound/splits.mp3']
		})
	},
	i: {
	color: "khaki",
	sound: new Howl({
		src: ['assets/sound/strike.mp3']
		})
	},
	o: {
	color: "lavender",
	sound: new Howl({
		src: ['assets/sound/squiggle.mp3']
		})
	},
	p: {
	color: "violet",
	sound: new Howl({
		src: ['assets/sound/prism-3.mp3']
		})
	},
	z: {
	color: "mediumpurple",
	sound: new Howl({
		src: ['assets/sound/suspension.mp3']
		})
	},
	x: {
	color: "indigo",
	sound: new Howl({
		src: ['assets/sound/timer.mp3']
		})
	},
	c: {
	color: "lime",
	sound: new Howl({
		src: ['assets/sound/ufo.mp3']
		})
	},
	v: {
	color: "teal",
	sound: new Howl({
		src: ['assets/sound/veil.mp3']
		})
	},
	b: {
	color: "deepskyblue",
	sound: new Howl({
		src: ['assets/sound/wipe.mp3']
		})
	},
	n: {
	color: "chocolate",
	sound: new Howl({
		src: ['assets/sound/zig-zag.mp3']
		})
	},
	m: {
	color: "aquamarine",
	sound: new Howl({
		src: ['assets/sound/piston-3.mp3']
		})
	}		
}

var circles = [];	

function onKeyDown(event) {
	// max point
	var maxPoint = new Point(view.size.width, view.size.height);
	var randomPoint = Point.random();
	// create a random point
	var point = maxPoint * randomPoint;
	// When a key is pressed, create a circle
	var newCircle = new Path.Circle(point, 100);
	// 		if (event.key === "a") {
	// 			sound1.play();
	// 			newCircle.fillColor = 'yellow';
	// 		} else {
	// 			sound2.play();
	// 			newCircle.fillColor = 'steelblue';
	// 		}
	newCircle.fillColor = keyData[event.key].color;
	keyData[event.key].sound.play();
	circles.push(newCircle);
}

//	var animatedCircle = new Path.Circle(new Point(300,300), 100);
//	animatedCircle.fillColor = "red";

function onFrame(event) {
	for(var i = 0; i < circles.length; i++) {
		circles[i].fillColor.hue += 1;
		circles[i].scale(.92);
		if (circles[i].area < 1) {
			circles[i].remove();
			circles.splice(i,1);
			// decrement i so the loop doesn't miss elements in an array
			i--;
		}
	}
}