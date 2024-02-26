//para instalar dependiencia de gulp.
// npm i -D gulp

//luego crear un archivo en la raiz del proyecto con nombre

const { src, dest, watch, parallel } = require("gulp");

//CSS
const sass = require('gulp-sass')(require('sass'));
const plumber = require('gulp-plumber');

//Imagenes
const webp = require('gulp-webp');


function css(done) {  

src('src/scss/**.*.scss') // Identificar el archivo SASS
    .pipe( plumber() ) //Con esto evito que se detenga el código cada vez que de un error
    .pipe( sass() ) // Compilarlo
    .pipe(dest('build/css')) // Almacenar

  done(); //Callback que avisa a gulp cuando llegamos al final
}

function versionWebp(done){
  const opciones = {
    quality:50
  };
  src('src/img/**/*.{png,jpg}')
  .pipe(webp(opciones))
  .pipe(dest('build/img'))
  done();
}

function dev(done){
    watch('src/scss/**/*.scss', css);
    done();
}

exports.css = css;
exports.versionWebp = versionWebp;
exports.dev = parallel(versionWebp, dev);


