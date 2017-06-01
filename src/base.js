var tickrate = 100
var angle = 0
var speed = 0
var click_increment = 1

$(document).ready(function(){
	console.log("Document loaded")
	$("#spinner").click(function(){
		speed += click_increment;
	});

	window.setInterval(function(){
		angle += speed
		$("#spinner").rotate(angle);

	}, tickrate);

});
