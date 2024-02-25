//para instalar dependiencia de gulp.
// npm i -D gulp

//luego crear un archivo en la raiz del proyecto con nombre

const { src,dest,watch } = require("gulp");
const sass = require('gulp-sass')(require('sass'));

function css(done) {  

src('src/scss/**.*.scss') // Identificar el archivo SASS
    .pipe( sass() ) // Compilarlo
    .pipe(dest('build/css')) // Almacenar

  done(); //Callback que avisa a gulp cuando llegamos al final
}


function dev(done){
    watch('src/scss/**/*.scss', css)

    done();
}

exports.css = css;
exports.dev = dev;