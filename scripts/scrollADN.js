var upperLeft = document.getElementById("ADN1A"), lowerLeft = document.getElementById("ADN1B");
var upperRight = document.getElementById("ADN2A"), lowerRight = document.getElementById("ADN2B");
var scrollSpeed = 15; //the higher is this value, the slower is the animation

upperRight.style.left = lowerRight.style.left = "124px";
lowerRight.style.top = "275px";
upperRight.style.top = "0px";
upperLeft.style.top = "-274px";
lowerLeft.style.top = "0px";

scrollADN();

function scrollADN()
{
	var loopUp = setInterval(function()
	{
		if(parseInt(lowerLeft.style.top) <= 275)
		{
			lowerLeft.style.top = (parseInt(lowerLeft.style.top) + 2) + "px";
		}
		else
		{
			lowerLeft.style.top = "0px";
		}
		if(parseInt(upperLeft.style.top) <= 0)
		{
			upperLeft.style.top = (parseInt(upperLeft.style.top) + 2) + "px";
		}
		else
		{
			upperLeft.style.top = "-274px";
		}
		
		if(parseInt(lowerRight.style.top) >= 0)
		{
			lowerRight.style.top = (parseInt(lowerRight.style.top) - 2) + "px";
		}
		else
		{
			lowerRight.style.top = "275px";
		}
		if(parseInt(upperRight.style.top) >= -274)
		{
			upperRight.style.top = (parseInt(upperRight.style.top) - 2) + "px";
		}
		else
		{
			upperRight.style.top = "0px";
		}
	}, scrollSpeed);
}