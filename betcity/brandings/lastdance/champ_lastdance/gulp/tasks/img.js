import imagemin from 'gulp-imagemin';

export const img = () => {
  return (
    app.gulp
      .src(app.path.src.images)

      .pipe(app.gulp.src(app.path.src.images))
      .pipe(app.plugins.newer(app.path.build.images))
      .pipe(
        app.plugins.if(
          app.isBuild,
          imagemin({
            progressive: true,
            svgoPlugins: [{ removeViewBox: false }],
            interlaced: true,
            optimizationLevel: 3, // 0 to 7
          }),
        ),
      )
      .pipe(app.gulp.dest(app.path.build.images))
      .pipe(app.plugins.browserSync.stream())
  );
};
