export const copy = () => {
  return app.gulp
    .src([`!src/js/scripts.js`, `src/*.woff`, `src/js/*.js`], {
      base: `src`,
    })
    .pipe(app.gulp.dest(app.path.buildFolder));
};
