const gulp = require('gulp');
const fileInclude = require('gulp-file-include');
const sass = require('gulp-sass')(require('sass'));
const browserSync = require('browser-sync').create();
const { deleteAsync } = require('del');
const esbuild = require('esbuild');

function clean() {
  return deleteAsync(['dist']);
}

function html() {
  return gulp
    .src('src/index.html')
    .pipe(
      fileInclude({
        prefix: '@@',
        basepath: '@file'
      })
    )
    .pipe(gulp.dest('dist'));
}

function scss() {
  return gulp
    .src('src/scss/main.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('dist/css'))
    .pipe(browserSync.stream());
}

function typescript() {
  return esbuild.build({
    entryPoints: ['src/ts/main.ts'],
    bundle: true,
    outfile: 'dist/js/main.js',
    format: 'esm',
    target: 'es2020',
    sourcemap: true
  });
}

function serve(done) {
  browserSync.init({
    server: './dist',
    port: 3000,
    open: false
  });

  done();
}

function reload(done) {
  browserSync.reload();
  done();
}

function watchFiles() {
  gulp.watch('src/**/*.html', gulp.series(html, reload));
  gulp.watch('src/**/*.scss', scss);
  gulp.watch('src/**/*.ts', gulp.series(typescript, reload));
}

const build = gulp.series(
  clean,
  gulp.parallel(html, scss, typescript)
);

const dev = gulp.series(
  build,
  serve,
  watchFiles
);

exports.clean = clean;
exports.html = html;
exports.scss = scss;
exports.typescript = typescript;
exports.build = build;
exports.dev = dev;
exports.default = dev;