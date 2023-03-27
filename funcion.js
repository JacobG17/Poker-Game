//Variable global para contar el numero de cambios realizados
var contadorCambios = 0;
//Timer para iniciar la funcion de voltear cartas despues de 3 segundos
window.setTimeout(voltearCartas,3000);

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
	let ganancia;
	const input = document.getElementById('money-input').value;
	let inputElement = parseFloat(input.replace(/[$,]/g, ''));
	const valorInput = inputElement;
	if(valorInput >= 10000)
	{
		resta = 1000;
	}
	else
	{
		resta = 10;
	}

	ganancia = valorInput-resta;
	// volver a formatear el resultado como una cadena de moneda
	let resultadoFormateado = '$ ' + ganancia.toLocaleString();
	// actualizar el valor del input con el resultado
	document.getElementById("money-input").value = resultadoFormateado;
	// Obtener los estados de los checkboxes
	const checkbox1 = document.getElementById("checkCarta1");
	const checkbox2 = document.getElementById("checkCarta2");
	const checkbox3 = document.getElementById("checkCarta3");
	const checkbox4 = document.getElementById("checkCarta4");
	const checkbox5 = document.getElementById("checkCarta5");

	// Verificar si todos los checkboxes están desactivados
	if (!checkbox1.checked && !checkbox2.checked && !checkbox3.checked && !checkbox4.checked && !checkbox5.checked) {
		// Cambiar todas las cartas
		voltearCartas()
	}
	else
	{
		//LLamar esta funcion si algun checkbox esta activado
		evaluarCheckbox() 
	}
	contadorCambios++;
	console.log(contadorCambios);
	var boton = document.getElementById("Cambio");
	if (contadorCambios => 1)
	{
		boton.disabled = true;
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

//Funcion que activa el checkbox al hacerle click sobre la imagen de la carta
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

//Funcion para Evaluar la Jugadas
function EvaluarJugada()
{
	// Verifica qué tipo de mano es
	contadorCambios = 0;
	console.log(contadorCambios);
	var boton = document.getElementById("Cambio");
	boton.disabled = false;

	let jugada;
	let ganancia;
	const input = document.getElementById('money-input').value;
	let inputElement = parseFloat(input.replace(/[$,]/g, ''));
	const valorInput = inputElement;

	if(valorInput >= 10000)
	{
		resta = 1000;
	}
	else
	{
		resta = 10;
	}

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
		jugada = "Flor imerial"
		Ganaste(jugada)
		ganancia = valorInput*20;

	}
	else if (esEscalera && esColor) {
		jugada = "Escalera de color"
		Ganaste(jugada)
		ganancia = valorInput*15;
	}
	else if (esColor) {
		jugada = "Color"
		Ganaste(jugada)
		ganancia = valorInput*5;
	} 
	else if (esEscalera == true) {
		jugada = "Escalera"
		Ganaste(jugada)
		ganancia = valorInput*2;

	} else if (valores[0] === valores[3] || valores[1] === valores[4]) {
		jugada = "Poker"
		Ganaste(jugada)
		ganancia = valorInput*9;
	} 
	else if ((valores[0] === valores[2] && valores[3] === valores[4]) || (valores[0] === valores[1] && valores[2] === valores[4])) {
		jugada = "Full House"
		Ganaste(jugada)
		ganancia = valorInput*7;
	} 
	else if (valores[0] === valores[2] || valores[1] === valores[3] || valores[2] === valores[4]) {
		jugada = "Tercia"
		Ganaste(jugada)
		ganancia = valorInput*3;
	} 
	else if ((valores[0] === valores[1] && valores[2] === valores[3]) || (valores[0] === valores[1] && valores[3] === valores[4]) || (valores[1] === valores[2] && valores[3] === valores[4])) {
		jugada = "Dos pares"
		Ganaste(jugada)
		ganancia = valorInput*4;
	} 
	else if (valores[0] === valores[1] || valores[1] === valores[2] || valores[2] === valores[3] || valores[3] === valores[4]) {
		jugada = "Par"
		Ganaste(jugada)
		ganancia = valorInput*2;
	} 
	else {
		perdio = "Carta Alta"
		Perdiste(perdio)
		ganancia = valorInput-20;
	}

	if (jugada === "Carta Alta")
	{
		
		// volver a formatear el resultado como una cadena de moneda
		let resultadoFormateado = '$ ' + ganancia.toLocaleString();
    
		// actualizar el valor del input con el resultado
		document.getElementById("money-input").value = resultadoFormateado;
	}
	else
	{
		// volver a formatear el resultado como una cadena de moneda
		let resultadoFormateado = '$ ' + ganancia.toLocaleString();
    
		// actualizar el valor del input con el resultado
		document.getElementById("money-input").value = resultadoFormateado;
	}

	window.setTimeout(voltearCartas,2500);

}

//Funcion de Alerta Ganadora
function Ganaste(jugada)
{
	Swal.fire({
		title: '!!Ganasteee!! 🤑',
		text: 'Excelente jugada con ' + jugada, 
		showConfirmButton: false,
		timer: 2000
	  })
}
//Funcion de Alerta Perdedora
function Perdiste(perdio)

{
	Swal.fire({
		Height:200,
		Width:30,
		title: '!Perdiste! 😭',
		text: 'Perdiste por ' + perdio, 
		text: '-20 creditos ',
		showConfirmButton: false,
		timer: 2000
	  })
}

//Funcion de Alerta Te quedaste pobre
function sinDinero()
{
	Swal.fire({
		Icon:'error',
		Height:200,
		Width:30,
		title: '!Te quedaste sin creditos! 🤧',
		text: 'Ingresa mas para seguir jugando',
		Intput: '', 
		showConfirmButton: false,
		timer: 2000
	  })
}

function voltearCartas()
{
	comprobar("ii1");
	comprobar("ii2");
	comprobar("ii3");
	comprobar("ii4");
	comprobar("ii5");
}
//Funcion para comenzar a jugar
function jugar()
{
	const game = document.getElementById("money-input").value;
	//Se evalua el puntaje para saber si se puede seguir jugando
	if (game == "$ 0")
	{
		Swal.fire({
			icon: 'error',
			title: 'Oops...',
			text: 'Te quedaste sin creditos, vuelviendo a iniciar una nueva partida 😵!',
		  })
		reiniciarPagina(game);
	}
	else
	{
		EvaluarJugada();
	}
}

//Funcion para Reiniciar la Partida
function nuevaPartida()
{
	const game = document.getElementById("money-input").value;
	Swal.fire({
		title: 'Comenzando Nueva Partida...🤠',
		text: '!Buena Suerte!',
	  })
	reiniciarPagina(game);
}

//Funcion para reiniciar la pagina
function reiniciarPagina(game) {
	let inputElement = parseFloat(game.replace(/[$,]/g, ''));
	var valorInput = inputElement;
	valorInput = 0;
	ganancia = valorInput + 100;
	// volver a formatear el resultado como una cadena de moneda
	let resultadoFormateado = '$ ' + ganancia.toLocaleString();
    
	// actualizar el valor del input con el resultado
	document.getElementById("money-input").value = resultadoFormateado;
	
	document.getElementById("ii1").src = "trasera.jpg";
	document.getElementById("ii2").src = "trasera.jpg";
	document.getElementById("ii3").src = "trasera.jpg";
	document.getElementById("ii4").src = "trasera.jpg";
	document.getElementById("ii5").src = "trasera.jpg";
	window.setTimeout(voltearCartas,5000);
}