var play = document.getElementById("playing");
var mute = document.getElementById("muted");
var sound = document.getElementById("sound");
var volume = 0.9;
var soundCookieName = "sound";

play.addEventListener('click', function() {
	boolMute(0, true);
	}, false);
mute.addEventListener('click', function() {
	boolMute(1, true);
	}, false);

boolMute(1, true);
setTimeout(function(){sound.play();}, 1500);
	
function boolMute(fac, bool)
{
	switch(fac)
	{
	case 0:
		sound.volume = 0;
		mute.style.display = "inline";
		play.style.display = "none";
	break;
	case 1:
		sound.volume = volume;
		mute.style.display = "none";
		play.style.display = "inline";
	break;
	}
}