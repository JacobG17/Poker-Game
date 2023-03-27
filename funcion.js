//Arreglo con imagenes
var lista=[
"Ac.jpg","2c.jpg","3c.jpg","4c.jpg","5c.jpg","6c.jpg","7c.jpg","8c.jpg","9c.jpg","Dc.jpg","Jc.jpg","Qc.jpg","Kc.jpg",
"Ae.jpg","2e.jpg","3e.jpg","4e.jpg","5e.jpg","6e.jpg","7e.jpg","8e.jpg","9e.jpg","De.jpg","Je.jpg","Qe.jpg","Ke.jpg",
"Ad.jpg","2d.jpg","3d.jpg","4d.jpg","5d.jpg","6d.jpg","7d.jpg","8d.jpg","9d.jpg","Dd.jpg","Jd.jpg","Qd.jpg","Kd.jpg",
"At.jpg","2t.jpg","3t.jpg","4t.jpg","5t.jpg","6t.jpg","7t.jpg","8t.jpg","9t.jpg","Dt.jpg","Jt.jpg","Qt.jpg","Kt.jpg"
];

//Funcion para generar numeros aleatorios
function numeroAleatorios(min,max)
{
	return Math.round(Math.random()*(max-min)+min);		
}

//Funcion para cambiar el mazo
function CambiarMazo()
{
	// Obtener los estados de los checkboxes
	const checkbox1 = document.getElementById("checkCarta1");
	const checkbox2 = document.getElementById("checkCarta2");
	const checkbox3 = document.getElementById("checkCarta3");
	const checkbox4 = document.getElementById("checkCarta4");
	const checkbox5 = document.getElementById("checkCarta5");

	// Verificar si todos los checkboxes están desactivados
	if (!checkbox1.checked && !checkbox2.checked && !checkbox3.checked && !checkbox4.checked && !checkbox5.checked) {
		// Cambiar todas las cartas
		comprobar("ii1");
		comprobar("ii2");
		comprobar("ii3");
		comprobar("ii4");
		comprobar("ii5");
	}
	else
	{
		//LLamar esta funcion si algun checkbox esta activado
		evaluarCheckbox() 
	}
	
}

//Funcion para verificar el estado de los checkbox
function evaluarCheckbox() 
{
	// Recorrer cada uno de los checkbox
	for (var i = 1; i <= 5; i++) 
	{
	  //Obtener id del checkbox dependiendo el numero de la iteracion
	  var checkbox = document.getElementById("checkCarta" + i);
	  //Obtener id de la imagen dependiendo el numero de la iteracion
	  var contenedor = ("ii" + i)
	  //Evaluacion sí el checkbox esta activado
	  if (checkbox.checked) 
	  {
		comprobar(contenedor);
	  }
	  else
	  {
		
	  }
	}
}

//Funcion para no repetir cartas
function comprobar(contenedor)
{
	//Obtener Direccion de la imagen = http://127.0.0.1:5500/8t.jpg
	urlcarta1 = document.getElementById("ii1").src
	urlcarta2 = document.getElementById("ii2").src
	urlcarta3 = document.getElementById("ii3").src
	urlcarta4 = document.getElementById("ii4").src
	urlcarta5 = document.getElementById("ii5").src
	//Separar direccion y obtener el nombre de la imagen solamente "8t.jpg"
	var carta1 = urlcarta1.split("/").pop();
	var carta2 = urlcarta2.split("/").pop();
	var carta3 = urlcarta3.split("/").pop();
	var carta4 = urlcarta4.split("/").pop();
	var carta5 = urlcarta5.split("/").pop();
	//Generar nueva carta para cambiar
  	nuevacarta = lista[numeroAleatorios(0,50)]
	//condiciones para que no se repita la carta
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

//Funcion que activa el checkbox al hacerle click sobre la imagen 
//(sinceramente no entiendo como funciona sin llamarla en ningun lado pero funciona)
function activarcheck(num)
{
	var imagen = document.getElementById("ii" + num);

	if (imagen.classList.contains("clicked")) 
	{
		imagen.classList.remove("clicked");
		document.getElementById("checkCarta" + num).checked = false;
	} 
	else 
	{
		imagen.classList.add("clicked");
		document.getElementById("checkCarta" + num).checked = true;
	}
}

function EvaluarJugada()
{
	//Obtener todas las imágenes por su ID
	var images = document.querySelectorAll("img");

	// Crear un arreglo vacío para almacenar los nombres
	var cartas = [];

	// Iterar sobre cada imagen y obtener su nombre sin la extensión ".jpg"
	images.forEach(function(image) 
	{
		var nombre = image.src.split('/').pop().split('.')[0];
		cartas.push(nombre);
	});

	// El arreglo 'Cartas' ahora contiene los nombres de las imágenes sin la extensión ".jpg"
	console.log(cartas);

	// Separa los valores de las cartas y los palos
	const valores = cartas.map(carta => carta.charAt(0));
	const palos = cartas.map(carta => carta.charAt(1));

	//Variable de referencia para ordenar los valores en la siguiente funcion flecha
	const valoresOrdenados = '23456789DJQKA';

	//Ordenar los valores de las cartas de menos a mayor
	valores.sort((a,b) => {
		return valoresOrdenados.indexOf(a) - valoresOrdenados.indexOf(b);
	});
	console.log(valores)

	//Verifica si hay escalera funcion
	var esEscalera;
	if (valores.every((valor, index) => {
		if (index === 0) {
		  return true;
		} else {
		  const valorAnterior = valores[index - 1];
		  return valoresOrdenados.indexOf(valor) === valoresOrdenados.indexOf(valorAnterior) + 1;
		}
	  })) {
		esEscalera = true;
	  } else {
		esEscalera = false;
	  }
 
	//Verifica si hay color
	const esColor = palos.every(palo => palo === palos[0]);
	console.log(esColor)

	//Verifica la jugada Flor Imperial
	if (esEscalera && esColor && valores[0] === 'D') 
	{
		console.log("Flor imerial")
	}
	else if (esEscalera && esColor) {
		console.log("Escalera de color")
	}
	else if (esColor) {
		console.log("Colorl")
	} 
	else if (esEscalera == true) {
		console.log("Escalera")

	} else if (valores[0] === valores[3] || valores[1] === valores[4]) {
		console.log("Poker")
	} 
	else if ((valores[0] === valores[2] && valores[3] === valores[4]) || (valores[0] === valores[1] && valores[2] === valores[4])) {
		console.log("Full House")
	} 
	else if (valores[0] === valores[2] || valores[1] === valores[3] || valores[2] === valores[4]) {
		console.log("Tercia")
	} 
	else if ((valores[0] === valores[1] && valores[2] === valores[3]) || (valores[0] === valores[1] && valores[3] === valores[4]) || (valores[1] === valores[2] && valores[3] === valores[4])) {
		console.log("Dos pares")
	} 
	else if (valores[0] === valores[1] || valores[1] === valores[2] || valores[2] === valores[3] || valores[3] === valores[4]) {
		console.log("Par")
	} 
	else {
		console.log("Carta Alta")
	}

}


