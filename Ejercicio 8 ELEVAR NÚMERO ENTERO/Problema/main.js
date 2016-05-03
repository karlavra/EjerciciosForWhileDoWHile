function potencia(){
	var numero = prompt("Ingresa el numero : ");
	var exponente= prompt ("Ingresa el exponente : ");
	var resultado= Math.pow(numero,exponente);
	document.write("El resultado es : " +resultado);
}

potencia();
