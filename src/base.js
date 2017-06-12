var tickrate = 60;
var circle_radians = 2*Math.PI;
var spinner = null;
var app = null;
var spinner_sprite = null;
var upgrade_texture = null;
var resolution = { x:1024, y:768};
var ui = null;
var state = null;

window.onload = game_setup;

function load_stage(){
    app = new PIXI.Application(resolution.x, resolution.y, {backgroundColor : 0x3ed1f2});
	document.getElementById("pixi-container").appendChild(app.view);
};

function load_textures(){
    spinner_sprite = PIXI.Sprite.fromImage("images/spinner-fixed2.png");
    spinner_sprite.interactive = true;

    spinner_sprite.anchor.set(0.5);
    spinner_sprite.x = app.renderer.width / 2;
    spinner_sprite.y = app.renderer.height / 2;
    spinner_sprite.height = 300;
    spinner_sprite.width = 300;

    upgrade_texture = PIXI.BaseTexture.fromImage("images/upgrade.png");

};

function create_objects(){
    stats = new Stats();
    spinner = new Spinner(0, 1, 1, 0.2, 1, spinner_sprite);
};


function game_loop(){
    app.ticker.add(function(delta) {
        spinner.update(delta);
        ui.update();
    });
};

function game_setup(){
	load_stage();
    load_textures();
    create_objects();
    ui = new UI();
    game_loop();
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
