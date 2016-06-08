$(document).ready(function() {
	setInterval("reloj()", 1000);
})

function reloj() {
	var complet = new Date();
	var hora = complet.getHours();
	var minutos = complet.getMinutes();
	var segundos = complet.getSeconds();

	if(hora<10) {
		hora = "0" + hora;
	} if(minutos<10) {
		minutos = "0" + minutos;
	} if(segundos<10) {
		segundos = "0" + segundos;
	}

	var horaFinal = hora + ":" +minutos+ ":" +segundos;
	return horaFinal;
}

/*enviarmensaje*/
function valText() {
	var miMensaje = document.getElementById("textmsj")
	return miMensaje.value;
}

function mandarMensaje() {
	var miMensaje = valText();
	if(miMensaje != "") {
		conversacion(miMensaje);
		clean();
	}
}

function conversacion(mensaje){
	var hora = reloj();
	var cajaMensaje = document.getElementById("conversacion");

	var mensajeIngresado = document.createElement("div");
 	mensajeIngresado.className = "msj yo";

 	// var hour = document.createElement("p");
 	// hour.className = "hora-chat";

 	mensajeIngresado.innerHTML = mensaje;
 	cajaMensaje.appendChild(mensajeIngresado);


 	var crearHora = document.createElement("p");
	crearHora.className = "hora-chat";
 	crearHora.innerHTML = hora;

 	mensajeIngresado.appendChild(crearHora);
	// crearHora.appendChild(relojFecha());
}

function clean() {
	var miMensaje = document.getElementById("textmsj");
	miMensaje.value="";
}

/*buscador*/
function valbuscar() {
	var buscando = document.getElementById("buscar");
	return buscando.value;
}

function newConversacion() {

	var contactos = [{
			value: "Laboratoria" ,
			name: "Laboratoria",
			image: "image/logocodeacademy.png"
		},{
			value: "Raymi Saldomando",
			name: "Raymi Saldomando",
			image: "image/raymi.jpg"
		},{
			value: "Mariana Costa",
			name: "Mariana Costa",
			image: "image/mariana.jpg"
		},{
			value: "Ana María Martinez Franklin" ,
			name: "Ana María Martinez Franklin",
			image: "image/anamaria.jpg"
		},{
			value:"Rodulfo Prieto" ,
			name:"Rodulfo Prieto",
			image: "image/rodulfo.jpg"
		},{
			value:"Andrea Lamas" ,
			name:"Andrea Lamas",
			image: "image/andrea.jpg"
		},{
			value:"Maria Paula Rivarola",
			name: "Maria Paula Rivarola",
			image: "image/mariapaula.jpg"
		},{
			value:"Katy Sanchez",
			name: "Katy Sanchez",
			image: "image/katy.jpg"
		},{
			value:"Aldo Alfaro",
			name:"Aldo Alfaro",
			image: "image/aldo.jpg"
	}];

	var valor = $(this).attr('data-id');

	var cambios = document.getElementById("chat").firstChild.nextSibling;
	cambios.setAttribute('src', contactos[valor].image);

	// var list = document.getElementById("myList");
 //    list.removeChild(list.childNodes[3]);

}
// newConversacion();