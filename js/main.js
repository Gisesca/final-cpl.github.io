// Menu
const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

abrir.addEventListener("click", () => {
    nav.classList.add("visible");
})

cerrar.addEventListener("click", () => {
    nav.classList.remove("visible");
})

//Cambio de imagen
document.getElementById("imagenes").addEventListener('mouseover', changeImage);
document.getElementById("imagenes").addEventListener('mouseout', resetImage);

function changeImage() {
  var image = document.getElementById("imagenes");
  image.src = "img/1.jpg"; // Reemplaza con la ruta de la nueva imagen
}

function resetImage() {
  var image = document.getElementById("imagenes");
  image.src = "img/3.jpg"; // Reemplaza con la ruta de la imagen original
}

// Funcionalidad Dark-Mode 
function enableDarkMode() {
  let main_body = document.body;
  main_body.classList.toggle("dark-mode");

  // Check if checkbox is checked or not
  if (document.getElementById('checkitem').checked) {
      console.log("checked");
  } else {
      console.log("NOT checked");
  }
}

//Active
menuIten.forEach(function(item){
    item.addEventListener('click', function(e) {
        const currentItem = documet.querySelector('.active');
        currentItem.classList.remove ('active');
        e.target.classList.add ('active');
    })
});