// import ttf2woff2 from "gulp-ttf2woff2";

export const fonts = () => {
  return app.gulp
    .src(app.path.src.fonts)
    // .pipe(ttf2woff2())
    .pipe(app.plugins.if(app.isBuild, app.plugins.size({ title: 'FONTS', showFiles: true })))
    .pipe(app.gulp.dest(app.path.build.fonts));
};
