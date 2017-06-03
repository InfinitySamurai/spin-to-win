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
