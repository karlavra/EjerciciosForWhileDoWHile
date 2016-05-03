/*FOR*/
function edad(){
	var cantidad= prompt ("Ingrese la cantidad de alumnos :");
	var suma= null;
	for(var i=1; i<= cantidad; i++){
		var numero = prompt ("Ingrese edad del alumno"+i+": ");
		suma= suma+parseInt(numero); 
	}
	var promedio= suma/cantidad;
	alert("El promedio de las edades es : "+ promedio);
}
edad();

/*While*/
function edad(){
	var cantidad= prompt ("Ingrese la cantidad de alumnos :");
	var suma= null;
	var i= 1;
	while (i<= cantidad){
		var numero = prompt ("Ingrese edad del alumno"+i+": ");
		suma = suma+parseInt(numero);
		i++; 
	} 
	var promedio= suma/cantidad;
	alert("El promedio de las edades es : "+ promedio);
}
edad();

/*DoWhile*/
function edad(){
	var cantidad= prompt ("Ingrese la cantidad de alumnos :");
	var suma= null;
	var i= 1;
	do {
		var numero = prompt ("Ingrese edad del alumno"+i+": ");
		suma= suma+parseInt(numero);
		i++; 
	} while (i<= cantidad);
	var promedio= suma/cantidad;
	alert("El promedio de las edades es : "+ promedio);
}
edad();