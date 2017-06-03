var tickrate = 60;
var angle = 0;
var speed = 0;
var decay = 0.1;
var max_speed = 10;
var click_increment = 1;
var all_spinners = new Array();
var spinner = null;
var app = null;



window.onload = game_setup;
window.onresize = resize;

function resize(){
	console.log("I've been resized!!");
}

function load_stage(){
    app = new PIXI.Application(800, 600, {backgroundColor : 0x3ed1f2});
	document.getElementById("pixi-container").appendChild(app.view);
}

function load_textures(){
    var texture = PIXI.utils.TextureCache["images/spinner-fixed2.png"]
    var sprite = PIXI.Sprite.fromImage("images/spinner-fixed2.png");

    sprite.anchor.set(0.5);
    sprite.x = app.renderer.width / 2;
    sprite.y = app.renderer.height / 2;
    sprite.height = 200;
    sprite.width = 200;

    app.stage.addChild(sprite);
}

function game_setup(){
	load_stage();
    load_textures();
}

/*
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
*/
