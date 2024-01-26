import renderNjk from 'gulp-nunjucks-render';
import beautifyHTML from 'gulp-html-beautify';
import plumber from 'gulp-plumber';
import versionNumber from 'gulp-version-number';

export const html = () => {
  return app.gulp
    .src(app.path.src.html)
    .pipe(plumber())
    .pipe(
      renderNjk({
        path: [app.path.src.blocks],
      }),
    )
    .pipe(beautifyHTML())
    .pipe(
      app.plugins.if(
        app.isBuild,
        versionNumber({
          value: '%DT%',
          append: {
            key: '_v',
            cover: 0,
            to: ['css', 'js'],
          },
          output: {
            file: 'gulp/version.json',
          },
        }),
      ),
    )
    .pipe(app.gulp.dest(app.path.build.html))
    .pipe(app.plugins.browserSync.stream());
};
