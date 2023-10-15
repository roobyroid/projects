export const json = () => {
  return app.gulp
    .src(app.path.src.json)
    .pipe(app.gulp.dest(app.path.build.json))
    .pipe(app.plugins.browserSync.stream());
};
