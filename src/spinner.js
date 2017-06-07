function Spinner(start_speed, decay, max_speed, sprite){
    this.speed = null
	this.nice_speed = start_speed;
    this.decay = null;
	this.nice_decay = decay;
    this.decay_on = false;
	this.nice_max_speed = max_speed;
    this.max_speed = null
    this.sprite = sprite;
	this.angle = 0;
    this.nice_click_strength = 1;
    this.click_strength = null;

    
    this.adjusted_numbers = function(tickrate){
        this.speed = this.nice_speed/tickrate;
        this.decay = this.nice_decay/tickrate;
        this.max_speed = this.nice_max_speed/tickrate;
        this.click_strength = this.nice_click_strength/tickrate;
    }

    this.update = function(delta){
        if(this.decay_on){
            this.changeSpeed(-this.decay*delta);
        }
        this.angle += this.speed/tickrate*circle_degrees;
        this.sprite.rotation += spinner.speed * delta;
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

    this.onClick = function(){
        this.changeSpeed(this.click_strength);
        console.log("spinner got clicked");
    };

    this.sprite.on('mousedown', this.onClick, this);

    this.adjusted_numbers(tickrate);
};

