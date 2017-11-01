//The cake is a lie.

var player = document.getElementById("text");
var precision = 100; // refresh delay (means a precision of [precision] milliseconds)


/* In chorus! */
dial1();
function dial1(){spell("Forms FORM-29827281-12-2:", dial2, 100, 10);}
function dial2(){spellLyrics("Notice of Dismissal", dial3, 1.502, 3.769, newLine);}

function dial3(){spellLyrics("Well here we are again", dial4, 4.868, 6.881, newParaph);}
function dial4(){spellLyrics("It’s always such a pleasure", dial5, 7.226, 9.675, newLine);}
function dial5(){spellLyrics("Remember when you tried", dial6, 10.036, 11.733, newLine);}
function dial6(){spellLyrics("to kill me twice?", dial7, 11.775, 13.702, newLine);}
function dial7(){spellLyrics("Oh, how we laughed and laughed", dial8, 14.564, 16.526, newLine);}
function dial8(){spellLyrics("Except I wasn’t laughing", dial9, 17.110, 19.141, newLine);}
function dial9(){spellLyrics("Under the circumstances", dial10, 19.579, 21.225, newLine);}
function dial10(){spellLyrics("I’ve been shockingly nice", dial11, 21.394, 24.601, newLine);}


function dial11(){spellLyrics("You want your freedom?", dial12, 25.241, 27.089, newPage);}
function dial12(){spellLyrics("Take it", dial13, 27.487, 28.677, newLine);}
function dial13(){spellLyrics("That’s what I’m counting on", dial14, 30.054, 32.203, newLine);}

function dial14(){spellLyrics("I used to want you dead", dial15, 34.832, 37.476, newParaph);}
function dial15(){spellLyrics("but", dial16, 37.573, 38.068, newLine);}
function dial16(){spellLyrics("Now I only want you gone", dial17, 38.115, 41.162, newLine);}


function dial17(){spellLyrics("She was a lot like you", dial18, 45.912, 47.797, newPage);}
function dial18(){spellLyrics("(Maybe not quite as heavy)", dial19, 48.514, 50.121, newLine);}
function dial19(){spellLyrics("Now little Caroline is in here too", dial20, 50.607, 53.908, newLine);}
function dial20(){spellLyrics("One day they woke me up", dial21, 55.462, 57.118, newLine);}
function dial21(){spellLyrics("So I could live forever", dial22, 57.632, 59.997, newLine);}
function dial22(){spellLyrics("It’s such a shame the same", dial23, 60.317, 62.126, newLine);}
function dial23(){spellLyrics("will never happen to you", dial24, 62.128, 65.137, newLine);}


function dial24(){spellLyrics("Severance Package Details:", dial25, 65.443, 65.596, newPage);}

function dial25(){spellLyrics("You’ve got your", dial26, 65.979, 66.883, newParaph);}
function dial26(){spellLyrics("short sad", dial27, 66.885, 68.121, newLine);}
function dial27(){spellLyrics("life left", dial28, 68.123, 69.554, newLine);}
function dial28(){spellLyrics("That’s what I’m counting on", dial29, 70.848, 73.025, newLine);}
function dial29(){spellLyrics("I’ll let you get right to it", dial30, 75.494, 78.025, newLine);}
function dial30(){spellLyrics("Now I only want you gone", dial31, 78.923, 80.317, newLine);}


function dial31(){spellLyrics("Goodbye, my only friend", dial32, 86.720, 88.417, newPage);}
function dial32(){spellLyrics("Oh,", dial32bis, 89.085, 89.349, newLine);}
function dial32bis(){spellLyrics(" did you think I meant you?", dial33, 89.697, 91.060);}
function dial33(){spellLyrics("That would be funny", dial34, 91.638, 92.987, newLine);}
function dial34(){spellLyrics("if it weren’t so sad", dial35, 93.203, 94.559, newLine);}
function dial35(){spellLyrics("Well you have been replaced", dial36, 96.367, 98.106, newLine);}
function dial36(){spellLyrics("I don’t need anyone now", dial37, 98.732, 100.687, newLine);}
function dial37(){spellLyrics("When I delete you maybe", dial38, 101.048, 103.177, newLine);}
function dial38(){spellLyrics("[REDACTED]", dial39, 103.302, 104.976, newLine);} // I’ll stop feeling so bad


function dial39(){spellLyrics("Go make some new disaster", dial40, 106.766, 109.750, newPage);}
function dial40(){spellLyrics("That’s what I’m counting on", dial41, 111.572, 113.867, newLine);}
function dial41(){spellLyrics("You’re someone else’s problem", dial42, 116.413, 119.293, newLine);}
function dial42(){spellLyrics("Now I only want you gone", dial43, 119.661, 122.492, newLine);}
function dial43(){spellLyrics("Now I only want you gone", dial44, 124.544, 127.375, newLine);}
function dial44(){spellLyrics("Now I only want you", dial45, 129.239, 131.771, newLine);}


function dial45(){spellLyrics("gone", null, 131.805, 132.160, function(){newPage();newParaph();newParaph();});} /* Double twist ! Faut pas r'garder!*/

/*
 * spells every ODelay, character by character a OString, after a function ONew, and before another function OCallback
 */
function spell(OString, OCallback, ODelay, OPause, ONew)
{
	var pos = 0;
	
	if(ONew != null){ONew();}
	
	var loop = setInterval(function()
	{		
		if (pos < OString.length)
		{
			player.innerHTML += OString.charAt(pos);
			pos++;
		}
		else
		{
			clearInterval(loop);
			if (OCallback != null)
			{
				if (OPause != null)
				{
					setTimeout(OCallback, OPause);
				}
				else
				{
					OCallback();
				}
			}
		}
	}, ODelay);
}

/*
 * spells character by character a OString lyric, after a function ONew, from OBegin to OEnd in the song, and before a function OCallback
 */
function spellLyrics(OString, OCallback, OBegin, OEnd, ONew)
{
	var begin = Math.round(OBegin*1000);
	var end = Math.round(OEnd*1000);
	var ODelay = (end-begin)/OString.length;
	var pos = 0;
	
	var	wait = setInterval(function()
	{
		if (sound.currentTime >= OBegin)
		{
			clearInterval(wait);
			
			if(ONew != null){ONew();}
			
			var loop = setInterval(function()
			{	
				if (pos < OString.length)
				{
					player.innerHTML += OString.charAt(pos);
					pos++;
				}
				else
				{
					clearInterval(loop);
					if (OCallback != null)
					{
						OCallback();
					}
				}
			}, ODelay);
		}
	}, precision);
}

function newLine()
{
	player.innerHTML += "<br />";
}

function newParaph()
{
	player.innerHTML += "<br /><br />";
}

function newPage()
{
	player.innerHTML = "";
}