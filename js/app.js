/*
 * Archivo principal de funcionalidad de JS
 */
 var modal = document.getElementById('fondoModal');
 var img = document.getElementsByClassName('img');
 var imgProducto = document.getElementById("img01");
 var borrar = document.getElementsByClassName("cerrar")[0];
 borrar.addEventListener("click", cerrar);
 
 for(i=0; i< img.length; i++){
   img[i].addEventListener("click", popUp);
 }
 function popUp(){
     modal.style.display = "block";
     imgProducto.src = this.src;
 }
 function cerrar() {
     modal.style.display = "none";
 }