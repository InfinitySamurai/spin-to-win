function Spinner(start_speed, decay, max_speed, sprite){
    this.speed_final = null
	this.speed = start_speed;
    this.decay_final = null;
	this.decay = decay;
    this.decay_on = true;
	this.max_speed = max_speed;
    this.max_speed_final = null
    this.sprite = sprite;
    this.click_strength = 1;
    this.click_strength_final = null;

    
    this.adjusted_numbers = function(tickrate){
        this.speed_final = this.speed/tickrate*circle_radians;
        this.decay_final = this.decay/tickrate;
        this.max_speed_final = this.max_speed/tickrate;
        this.click_strength_final = this.click_strength/tickrate;
    }

    this.update = function(delta){
        this.adjusted_numbers(tickrate);
        if(this.decay_on){
            this.changeSpeed(-this.decay_final*delta);
        }
        this.sprite.rotation += spinner.speed_final;
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
};

