$(document).ready(function()
{
document.getElementById("onlinequizform").onsubmit=function() {
       a = parseInt(document.querySelector('input[name = "a"]:checked').value);
	   b = parseInt(document.querySelector('input[name = "b"]:checked').value);
	   c = parseInt(document.querySelector('input[name = "c"]:checked').value);
	   d = parseInt(document.querySelector('input[name = "d"]:checked').value);


	   result = a + b + c + d;

	document.getElementById("finalScore").innerHTML = result;

  if (50 < result) {result2 = "I dont think you studied. Try again."};
  if (50 > result < 80 ) {result2 = "So close. fairly passed."};
  if (result > 80 ) {result2 = "Excellent! You have passed as a pro!"};

  document.getElementById("gradeScorescore").innerHTML = result2;

return false; // required to not refresh the page; just leave this here
} //this ends the submit function
});
