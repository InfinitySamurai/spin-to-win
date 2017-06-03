var tickrate = 60;
var angle = 0;
var speed = 0;
var decay = 0.1;
var max_speed = 10;
var click_increment = 1;
var all_spinners = new Array();
var spinner = null;




window.onload = game_setup;
window.onresize = resize;

function resize(){
	console.log("I've been resized!!");
}

function load_stage(){
	var renderer = PIXI.autoDetectRenderer(256, 256);
	document.getElementById("pixi-container").appendChild(renderer.view);
	var stage = new PIXI.Container();
	renderer.render(stage);
}


function game_setup(){
	create_objects();
	clicks_setup();
	load_stage();
	game_loop();
}

function clicks_setup(){

	console.log("Document loaded");
	$("#spinner").click(function(){
		spinner.changeSpeed(click_increment);
	});

}

function create_objects(){
	spinner = new Spinner(0, 0.1, 10)
	all_spinners.push(spinner);
}

function game_loop(){
	window.setInterval(function(){
		spinner.update();
		$("#spinner").rotate(spinner.angle);
	}, tickrate);
}


game_setup()
