

function expandirImagen(imagen){
    var modal = document.getElementById('modalImagen');
    var imagenExpandida = document.getElementById('imagenExpandida');
    imagenExpandida.src = imagen.src;
    modal.style.display = "block"
}

function cerrarModal() {
    var modal = document.getElementById("modalImagen");
    modal.style.display = "none";
}


