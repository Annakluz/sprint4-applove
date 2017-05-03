/*
 * Archivo principal de funcionalidad de JS
 */
 let modal = document.getElementById('fondoModal');
 let img = document.getElementsByClassName('img');
 let imgProducto = document.getElementById("img01");
 let borrar = document.getElementsByClassName("cerrar")[0];
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