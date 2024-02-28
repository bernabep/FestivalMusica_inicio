document.addEventListener("DOMContentLoaded", function () {
  iniciarApp();
});

function iniciarApp() {
  navegacionFija();
  crearGaleria();
  scrollNav();
}

function scrollNav() {
  const enlaces = document.querySelectorAll(".navegacion-principal a");
  enlaces.forEach((enlace) => {
    enlace.addEventListener("click", function (e) {
      e.preventDefault(); //Elimina el comportamiento por defecto, moverse rapido a la seccion
      const seccionScroll = e.target.attributes.href.value;
      const seccion = document.querySelector(seccionScroll);
      seccion.scrollIntoView({ behavior: "smooth" }); //Con esto configuro como quiero que se mueva el scroll al hacer clic en la seccion
    });
  });
}

function navegacionFija(){
  const barra = document.querySelector('.header');
  const sobreFestival = document.querySelector('.sobre-festival');
  const body = document.querySelector('body');

  window.addEventListener('scroll',function(){
    const posicion = sobreFestival.getBoundingClientRect().bottom
    console.log(sobreFestival.getBoundingClientRect().y)
    if(posicion<0){
      barra.classList.add('fijo')
      body.classList.add('body-scroll')
    }else{
      barra.classList.remove('fijo')
      body.classList.remove('body-scroll')
    }
  })

}

function crearGaleria() {
  const galeria = document.querySelector(".galeria-imagenes");

  for (let i = 1; i <= 12; i++) {
    const imagen = document.createElement("picture");
    imagen.innerHTML = `
            <source srcset="build/img/thumb/${i}.avif" type="image/avif" />
            <source srcset="build/img/thumb/${i}.webp" type="image/webp" />
            <img loading="lazy" width="200" height="300" src="build/img/thumb/${i}.jpg" alt="imagen galeria"/>
        `;

    galeria.appendChild(imagen);

    imagen.onclick = function () {
      mostrarImagen(i);
    };
  }
}

function mostrarImagen(id) {
  console.log(id);
  const imagen = document.createElement("picture");
  imagen.innerHTML = `
            <source srcset="build/img/grande/${id}.avif" type="image/avif" />
            <source srcset="build/img/grande/${id}.webp" type="image/webp" />
            <img loading="lazy" width="400" height="600" src="build/img/grande/${id}.jpg" alt="imagen galeria"/>
        `;

  //Crear el Overlay con la Imagen
  const overlay = document.createElement("DEV");
  overlay.appendChild(imagen);
  overlay.classList.add("overlay");
  overlay.onclick = function () {
    const body = document.querySelector("body");
    body.classList.remove("fijar-body");
    overlay.remove();
  };

  //Boton para cerrar el Modal
  const cerrarModal = document.createElement("P");
  cerrarModal.textContent = "X";
  cerrarModal.classList.add("btn-cerrar");
  cerrarModal.onclick = function () {
    const body = document.querySelector("body");
    body.classList.remove("fijar-body");
    overlay.remove();
  };

  overlay.appendChild(cerrarModal);

  //

  //Añadirlo al HTML
  const body = document.querySelector("body");
  body.appendChild(overlay);
  body.classList.add("fijar-body");
}
