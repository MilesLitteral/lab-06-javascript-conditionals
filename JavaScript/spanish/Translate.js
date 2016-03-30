var global = {'gato' : "cat", 'perro' : 'Dog', 'caballo': "Horse"}

$(document).ready(function()
	{
		var cake = prompt("Spanish to English Translator, input a word");
		if(cake == 'gato')
		{
			alert(global['gato']);
		}
		else if(cake == 'perro')
		{
			alert(global['perro']);
		}
		else if(cake == 'caballo')
		{
			alert(global['caballo']);
		}
		else
		{
			alert("No entiendo");
		}
	})