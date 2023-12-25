export const copy = () => {
  return app.gulp
    .src(app.path.src.jsFolder)
	  .pipe(app.gulp.dest(app.path.build.js))
};
