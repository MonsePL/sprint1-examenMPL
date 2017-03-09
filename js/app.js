var estudiantes = [];

function obtenerListaEstudiantes() {
    // TO DO: Retornar la lista de estudiantes

    return estudiantes;

}

function agregarEstudiante() {
    // TO DO: Preguntar al usuario por el nombre, puntos técnicos y puntos de HSE de un estudiante
    // Hint: El estudiante debe ser agregado a la lista de estudiantes
    // TO DO: Retornar el estudiante recientemente creado
 var nodeEstudiantes = estudiantes.length
 for (var i = 0; i < nodeEstudiantes; i++) {
   var nombre = prompt("Nombre de la estudiante"+ (i+1));
   var puntosTecnicos = parseInt(prompt("¿Cuántos puntos técnicos tiene?" + (i+1)));
   var puntosHse = parseInt(prompt("¿Cuántos puntos HSE tiene" + (i +1)));
   var crearEstudiante = {}
   estudiante.nombre = nombre;
   estudiante.puntosTecnicos = puntosTecnicos;
   estudiante.puntosHse = puntosHse;
   estudiante.push(estudiantes);
   return crearEstudiante;

}

function mostrar(estudiante) {
    // TO DO: Completar el template para que muestre las propiedades correctas del estudiante
    var resultado = "";
    resultado += "<div class='row'>";
    resultado += "<div class='col m12'>";
    resultado += "<div class='card blue-grey darken-1'>";
    resultado += "<div class='card-content white-text'>";
    resultado += "<p><strong>Nombre:</strong> " + estudiante.nombre + "</p>";
    resultado += "<p><strong>Puntos Técnicos:</strong> " + estudiante.puntosTecnicos + "</p>";
    resultado += "<p><strong>Puntos HSE:</strong> " + estudiante.puntosHse + "</p>";
    resultado += "</div>";
    resultado += "</div>";
    resultado += "</div>";
    resultado += "</div>";
    return resultado;
}

function mostrarLista(estudiantes) {
    // TO DO: Iterar la lista del estudiantes para devolverlos en el formato que usa la función mostrar(estudiante), NO entiendo el enunciado
    // Retornar el template de todos los estudiantes
    var nodeEstudiantes = estudiantes.length;
    for (var i = 0; i < nodeEstudiantes; i++);


     return estudiantes
}

function buscar(nombre, estudiantes) {
    // TO DO: Buscar el nombre en la lista de estudiantes que se recibe por parámetros
    // Retornar el objeto del estudiante buscado
    // Nota: NO IMPORTA SI EL USUARIO ESCRIBE EL NOMBRE EN MAYÚSCULAS O MINÚSCULAS

    var nodeEstudiantes = estudiantes.length
    for (var i = 0; i < nodeEstudiantes; i++);
    var nombreabuscar = prompt("¿Qué nombre buscas?" + (i+1));
    return nombrebuscar.toUpperCase();

}

function topTecnico(estudiantes) {
    // TO DO: Retornar el arreglo de estudiantes ordenado por puntaje técnico de mayor a menor
    var nodeEstudiantes = estudiantes.length
    for (var i = 0; i < nodeEstudiantes; i++);
    var estudiantesTecnico =  estudiantes.sort(function(, ) {
     .puntosTecnicos >  .puntosTecnicos;
     return estudiantesTecnico[i]});
}

function topHSE(estudiantes){
    // TO DO: Retornar el arreglo de estudiantes ordenado por puntaje de HSE de mayor a menor
    var nodeEstudiantes = estudiantes.length
    for (var i = 0; i < nodeEstudiantes; i++);
    var estudiantesHse = estudiantes.sort(function(c, d){
    .puntosHse > .puntosHse;
    return estudiantesHse[i]});
}
