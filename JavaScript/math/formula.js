function calculate(degrees)
{
	if(degrees % 1000 > 0)
	{	
		console.log();
		if(degrees % 100 > 0)
		{
			console.log((degrees % 1000 > 0) + "Hundreds");
			if(degres % 10 > 0)
			{
				console.log((degrees % 1000 > 0) + "Tens");
				if(degrees % 1)
				{
					console.log((degrees % 1000 > 0) + "Thousands" + (degrees % 1000 > 0) + "ones");
				}
			}
		}
	}
}

$(document).ready(function()
	{
		var cake = prompt("Enter a number");
		alert(calculate(cake));
	})