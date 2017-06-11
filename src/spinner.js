function Spinner(start_speed, decay, max_speed, click_strength, sprite){
    this.speed_final = null
	this.speed = start_speed;
    this.decay_final = null;
	this.decay = decay;
    this.decay_on = true;
	this.max_speed = max_speed;
    this.max_speed_final = null
    this.click_strength = click_strength;
    this.click_strength_final = null;

    this.sprite = sprite;
    // create a container for the sprite and the progress bar
    this.spinner_container = new PIXI.Container();
    this.spinner_container.addChild(this.sprite);

    app.stage.addChild(this.spinner_container);

    this.adjustedNumbers = function(tickrate){
        this.speed_final = this.speed/tickrate*circle_radians;
        this.decay_final = this.decay/tickrate;
        this.max_speed_final = this.max_speed/tickrate;
        this.click_strength_final = this.click_strength/tickrate;
    }

    this.update = function(delta){
        this.adjustedNumbers(tickrate);
        if(this.decay_on){
            this.changeSpeed(-this.decay_final*delta);
        }
        this.sprite.rotation += spinner.speed_final;
        this.progress_box.update();
    };

    this.changeSpeed = function(amount){
        this.speed += amount;
        if(this.speed > this.max_speed){
            this.speed = this.max_speed;
        }
        else if(this.speed < 0){
            this.speed = 0;
        }
    };

    this.progressBox = function(){
        var minx = (app.renderer.width / 2) - (this.sprite.width / 2);
        var miny = sprite.y + sprite.height / 2 + 10;
        var width = this.sprite.width;
        var height = 50;
        this.progress_box = new ProgressBox(minx, miny, width, height, 
            this, "speed", "max_speed", true, true);

        this.spinner_container.addChild(this.progress_box.box_graphics);
        this.spinner_container.addChild(this.progress_box.bar_graphics);
        this.spinner_container.addChild(this.progress_box.values);

    };

    this.onClick = function(){
        this.changeSpeed(this.click_strength);
    };

    this.sprite.on('mousedown', this.onClick, this);
    this.progressBox();
};

