var pointer = document.getElementById("cursor");
var frequence = 250;

pointer.innerHTML = "_";
blinkCursor(frequence);

function blinkCursor(freq)
{
	var loop = setInterval(function()
	{
		if(pointer.innerHTML == "")
		{
			pointer.innerHTML = "_";
		}
		else
		{
			pointer.innerHTML = "";
		}
	}, freq);
}