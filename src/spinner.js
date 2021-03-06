function Spinner(start_speed, decay, min_speed, max_speed, click_strength, money_per_spin, sprite){
    this.speed_final = null
	this.speed = start_speed;
    this.decay_final = null;
	this.decay = decay;
    this.decay_on = true;
    this.min_speed = min_speed;
    this.min_speed_final = 0
	this.max_speed = max_speed;
    this.max_speed_final = null
    this.click_strength = click_strength;
    this.click_strength_final = null;
    this.money_per_spin = money_per_spin;

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
        this.min_speed_final = this.min_speed/tickrate;
    }

    this.update = function(delta){
        this.adjustedNumbers(tickrate);
        if(this.decay_on){
            this.changeSpeed(-this.decay_final*delta);
        }
        this.sprite.rotation += spinner.speed_final;
        this.progress_box.update();
        stats.addMoney(this.money_per_spin * this.speed_final / 2 * Math.PI / 10);
    };

    this.changeSpeed = function(amount){
        this.speed += amount;
        if(this.speed > this.max_speed){
            this.speed = this.max_speed;
        }
        else if(this.speed < this.min_speed){
            this.speed = this.min_speed;
        }
    };

    this.progressBox = function(){
        var minx = (app.renderer.width / 2) - (this.sprite.width / 2);
        var miny = sprite.y + sprite.height / 2 + 10;
        var width = this.sprite.width;
        var height = 50;
        this.progress_box = new ProgressBox(minx, miny, width, height, 
            this, "speed", "max_speed", true, false, this.spinner_container);
    };

    this.onClick = function(){
        this.changeSpeed(this.click_strength);
    };

    this.sprite.on('mousedown', this.onClick, this);
    this.progressBox();
};

