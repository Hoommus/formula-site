$(document).ready(function() {
	$("#pause").fadeOut(1);
	$("#top-one").height($(window).height() - 120);
	/* setTimeout(() => {
		if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|Opera Mini/i.test(navigator.userAgent) ) {
		} else {
			$(".parallax-mirror").append('<iframe id="vimeo_player"
			src="https://player.vimeo.com/video/45196609?loop=1&title=0&byline=0&portrait=0" 
			width=100% height=100% frameborder="0"></iframe>');
			console.log("logged!");
			let iframe = document.querySelector('#vimeo_player'),
            player = new Vimeo.Player(iframe);

            player.ready().then( () => {
                player.setVolume(0.15);

                $(".parallax-slider").fadeOut();

                $("#pause").on('click', (e) => {
                	player.pause();
                	$(".parallax-slider").fadeIn();
                	$("#pause").fadeOut();
                })
                $("#pause").fadeIn();
                player.play();
            });
		}

	}, 1000)
	*/

	$(".gallery-jq").hover(() => {
		$(".gallery").animate({marginBottom: "-20px"}, 600);
	}, () => {
		$(".gallery").animate({marginBottom: "-100px"}, 600);
	} );
});