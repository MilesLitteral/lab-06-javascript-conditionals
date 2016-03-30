function calculate(degrees)
{
	var degrees = degrees * (9/5) + 32;
	return degrees;
}

$(document).ready(function()
	{
		var cake = prompt("Enter temperature celsius");
		alert("temperature celsius: " + cake + " temperature farenheit: "+ calculate(cake));
	})