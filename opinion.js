function addToDom(){
    //fecha actual
    var fechaActual = obtenerFecha();
    //Obtener valores ingresados por el usuario
    var comentario = document.getElementById("inputTexto").value;
    var nombre = document.getElementById("inputNombre").value;

    //Obtener contenedor donde iran los mensajes
    var contenedor = document.getElementById("contenedorTexto");

    //Crear etiquetas que conforman el mensaje
    var parrafoComentario = document.createElement("p");    
    var parrafoNombre = document.createElement("p");    
    var parrafoFecha = document.createElement("p");    
    var nuevoDiv = document.createElement("div");
    
    //Meter datos ingresados por el usuario en etiquetas <p>
    parrafoComentario.textContent = comentario;
    parrafoNombre.textContent = 'Usuario: ' + nombre;
    parrafoFecha.textContent = 'Fecha: ' + fechaActual;

    // Agregar los parrafos al div    
    nuevoDiv.appendChild(parrafoNombre);
    nuevoDiv.appendChild(parrafoComentario);
    nuevoDiv.appendChild(parrafoFecha);
    
    // Agregar div con parrafos al contenedor de mensajes
    contenedor.appendChild(nuevoDiv);
}

function obtenerFecha() {
    // Crear un nuevo objeto de fecha
    var fechaActual = new Date();
  
    // Obtener los componentes de la fecha (día, mes, año)
    var dia = fechaActual.getDate();
    var mes = fechaActual.getMonth() + 1; // Sumar 1 ya que los meses van de 0 a 11
    var año = fechaActual.getFullYear();
    // Obtener los componentes de la hora (hora, minuto, segundo)
    var hora = fechaActual.getHours();
    var minuto = fechaActual.getMinutes();
    var segundo = fechaActual.getSeconds();
  
    // Formatear la fecha como texto
    var fechaTexto = dia + '/' + mes + '/' + año + ' ' + hora + ':' + minuto + ':' + segundo;
  
    // Devolver la fecha formateada
    return fechaTexto;
  }