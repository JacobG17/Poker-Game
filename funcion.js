var lista=["0.jpeg", "1.jpeg", "2.jpeg", "3.jpeg", "4.jpeg", "5.jpeg"];

function numeroAleatorios(min, max) 
{
	return Math.round(Math.random() * (max - min) + min);		
}

function cambiacarta(){
	document.getElementById("ii1").src = lista[numeroAleatorios(0,5)];
	document.getElementById("ii2").src = lista[numeroAleatorios(0,5)];
	document.getElementById("ii3").src = lista[numeroAleatorios(0,5)];
	document.getElementById("ii4").src = lista[numeroAleatorios(0,5)];
	document.getElementById("ii5").src = lista[numeroAleatorios(0,5)];
}

	