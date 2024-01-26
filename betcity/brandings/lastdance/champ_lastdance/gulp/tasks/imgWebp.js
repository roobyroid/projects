import webp from 'gulp-webp';

export const imgWebp = () => {
  return app.gulp
    .src(app.path.src.images)
    .pipe(
      webp({
        quality: 85,
      }),
    )
    .pipe(app.gulp.dest(app.path.build.images))
};
