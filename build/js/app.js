document.addEventListener("DOMContentLoaded", function () {
  iniciarApp();
});

function iniciarApp() {
  crearGaleria();
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
      
    }
  }
}

function mostrarImagen(id) {
    console.log(id)
    const imagen = document.createElement("picture");
    imagen.innerHTML = `
            <source srcset="build/img/grande/${id}.avif" type="image/avif" />
            <source srcset="build/img/grande/${id}.webp" type="image/webp" />
            <img loading="lazy" width="400" height="600" src="build/img/grande/${id}.jpg" alt="imagen galeria"/>
        `;

    const overlay = document.createElement('DEV');
    overlay.appendChild(imagen);
    overlay.classList.add('overlay');

    const body = document.querySelector('body');
    body.appendChild(overlay);
}


