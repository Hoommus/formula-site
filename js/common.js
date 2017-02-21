$(document).ready(function() {
	var rotation = 0;
	let translation = 0;
	let up = true
	var myVar = setInterval( function() {
		//document.getElementById("rotate").style.transform = "rotate(" + rotation + "deg)";
		/*if (translation == 100){
			up = false;
		} else if (translation == -100) {
			up = true;
		}
		if(up) { translation += 1; } else {	translation -= 1;}*/
		//$("#move").css({"transform" : "translateY(" + translation + "%)"})
		$(".nim-dialog").css({"transform" : "rotate(" + rotation + "deg)"});
		rotation = rotation + 4;
		console.log("loop");
	}, 1);
});

var myVar = setInterval( function() {
		let arr = document.getElementsByClassName("nim-dialog");
		for(let i = 0; i < arr.length; i++) {
			arr[i].style.transform = "rotate(" + rotation + "deg)";
		}
		rotation = rotation + 4;
		console.log("loop");
	}, 1);