var tickrate = 60;
var angle = 0;
var speed = 0;
var decay = 0.1;
var max_speed = 10;
var click_increment = 1;
var all_spinners = new Array();
var spinner = null;


function Spinner(start_speed, decay, max_speed){
	this.speed = start_speed;
	this.decay = decay;
	this.max_speed = max_speed;
	this.angle = 0;
}

Spinner.prototype.changeSpeed = function(amount){
	this.speed += amount;

	if(this.speed > this.max_speed){
		this.speed = this.max_speed;
	}
	else if(this.speed < 0){
		this.speed = 0;
	}
	
}

Spinner.prototype.update = function(){
	this.changeSpeed(-this.decay);
	this.angle += this.speed;
}

$(document).ready(game_setup);


function game_setup(){
	clicks_setup();
	create_objects();
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

function increase(base_number, amount){
	base_number += amount;
	base_number = base_number.toFixed(2);
	return base_number;
}

game_setup()
