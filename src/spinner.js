function Spinner(start_speed, decay, max_speed, sprite){
	this.speed = start_speed;
	this.decay = decay;
	this.max_speed = max_speed;
    this.sprite = sprite;
	this.angle = 0;
    this.click_strength = 1;
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

Spinner.prototype.update = function(delta){
	this.changeSpeed(-this.decay*delta);
	this.angle += this.speed;
    sprite.rotation += spinner.speed * delta
}
