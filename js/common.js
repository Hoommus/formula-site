$(document).ready(function() {
	$("#pause").fadeOut(1);
	$("#top-one").height($(window).height() - 120);
	setTimeout(() => {
		if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
		} else {
			$(".parallax-mirror").append('<iframe id="vimeo_player" src="https://player.vimeo.com/video/45196609?loop=1&title=0&byline=0&portrait=0" width=100% height=100% frameborder="0"></iframe>');
			console.log("logged!");
			let iframe = document.querySelector('#vimeo_player'),
            player = new Vimeo.Player(iframe);

            player.ready().then( function() {
                player.setVolume(0.15);

                $(".parallax-slider").fadeOut();

                $("#pause").on('click', (e) => {
                	player.pause();
                })
                $("#pause").fadeIn();
                player.play();
            });
		}

	}, 1000)
	

});
/*
var rotation = 0;
var myVar = setInterval( function() {
		let arr = document.getElementsByClassName("nim-dialog");
		for(let i = 0; i < arr.length; i++) {
			arr[i].style.transform = "rotate(" + rotation + "deg)";
		}
		rotation = rotation + 4;
		console.log("loop");
	}, 1);
*/