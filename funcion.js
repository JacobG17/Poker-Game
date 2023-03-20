var lista=[
"aceCorazones.jpg","dosCorazones.jpg","tresCorazones.jpg","cuatroCorazones.jpg","cincoCorazones.jpg","seisCorazones.jpg","sieteCorazones.jpg","ochoCorazones.jpg","nueveCorazones.jpg","diezCorazones.jpg","jotaCorazones.jpg","reynaCorazones.jpg","reyCorazones.jpg",
"aceEspadas.jpg","dosEspadas.jpg","tresEspadas.jpg","cuatroEspadas.jpg","cincoEspadas.jpg","seisEspadas.jpg","sieteEspadas.jpg","ochoEspadas.jpg","nueveEspadas.jpg","diezEspadas.jpg","jotaEspadas.jpg","reynaEspadas.jpg","reyEspadas.jpg",
"aceDiamantes.jpg","dosDiamantes.jpg","tresDiamantes.jpg","cuatroDiamantes.jpg","cincoDiamantes.jpg","seisDiamantes.jpg","sieteDiamantes.jpg","ochoDiamantes.jpg","nueveDiamantes.jpg","diezDiamantes.jpg","jotaDiamantes.jpg","reynaDiamantes.jpg","reyDiamantes.jpg",
"aceTreboles.jpg","dosTreboles.jpg","tresTreboles.jpg","cuatroTreboles.jpg","cincoTreboles.jpg","seisTreboles.jpg","sieteTreboles.jpg","ochoTreboles.jpg","nueveTreboles.jpg","diezTreboles.jpg","jotaTreboles.jpg","reynaTreboles.jpg","reyTreboles.jpg"
];


function numeroAleatorios(min,max)
{
	return Math.round(Math.random()*(max-min)+min);		
}

function cambiacarta()
{
	document.getElementById("ii1").src = lista[numeroAleatorios(0,50)];
	document.getElementById("ii2").src = lista[numeroAleatorios(0,50)];
	document.getElementById("ii3").src = lista[numeroAleatorios(0,50)];
	document.getElementById("ii4").src = lista[numeroAleatorios(0,50)];
	document.getElementById("ii5").src = lista[numeroAleatorios(0,50)];

}


function evaluarCheckbox() 
{
	// Recorrer cada uno de los checkbox
	for (var i = 1; i <= 5; i++) 
	{
	  var checkbox = document.getElementById("checkCarta" + i);
	  var contenedor = ("ii" + i)
	  if (checkbox.checked) 
	  {

	  }
	  else
	  {
		comprobar(contenedor);
	  }
	}
}

function comprobar(contenedor)
{
	urlcarta1 = document.getElementById("ii1").src
	urlcarta2 = document.getElementById("ii2").src
	urlcarta3 = document.getElementById("ii3").src
	urlcarta4 = document.getElementById("ii4").src
	urlcarta5 = document.getElementById("ii5").src

	var carta1 = urlcarta1.split("/").pop();
	var carta2 = urlcarta2.split("/").pop();
	var carta3 = urlcarta3.split("/").pop();
	var carta4 = urlcarta4.split("/").pop();
	var carta5 = urlcarta5.split("/").pop();

  	nuevacarta = lista[numeroAleatorios(0,50)]

	  if (nuevacarta == carta1)
	  {
		  comprobar(contenedor);
	  }
	  else if (nuevacarta == carta2)
	  {
		  comprobar(contenedor);
	  }
	  else if (nuevacarta == carta3)
	  {
		  comprobar(contenedor);
	  }
	  else if (nuevacarta == carta4)
	  {
		  comprobar(contenedor);
	  }
	  else if (nuevacarta == carta5)
	  {
		  comprobar(contenedor);
	  }
	  else
	  {
		document.getElementById(contenedor).src = nuevacarta
	  }
}
