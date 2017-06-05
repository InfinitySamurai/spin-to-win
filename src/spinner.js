function Spinner(start_speed, decay, max_speed, sprite){
	this.speed = start_speed;
	this.decay = decay;
	this.max_speed = max_speed;
    this.sprite = sprite;
	this.angle = 0;
    this.click_strength = 0.1;


    this.update = function(delta){
        this.changeSpeed(-this.decay*delta);
        this.angle += this.speed;
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
};

