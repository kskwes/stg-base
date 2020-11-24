const { src, dest, watch } = require("gulp");
const sass = require("gulp-sass");
const pug = require("gulp-pug");

// Sassをコンパイルする
const compileSass = () =>
   src("src/scss/*.scss")
   .pipe(
       sass({
           outputStyle: "expanded"
       })
   )
   .pipe(dest("dest/css"));

// Sassファイルを監視
const watchSassFiles = () => 
  watch("src/scss/*.scss", compileSass);

// pugをコンパイルする
const compilePug = () =>
   src("src/*.pug")
   .pipe(
       pug({
           pretty: true
       })
   )
   .pipe(dest("dest"));

// pugファイルを監視
const watchPugFiles = () =>
   watch("src/*.pug", compilePug);

// npx gulpで実行される関数
exports.default = () =>
   watchSassFiles();
   watchPugFiles();