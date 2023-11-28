import webpack from "webpack-stream";
import TerserPlugin from 'terser-webpack-plugin'; 

export const js = () => {
  return app.gulp
    .src(app.path.src.js, { sourcemaps: app.isDev })
    .pipe(
      webpack({
        mode: app.isBuild ? "production" : "development",
        output: {
          filename: "app.min.js",
        },
          optimization: {
          minimizer: [
            new TerserPlugin() // Додали TerserPlugin для мініфікації
          ],
        },
        plugins: [
        
        ],
      })
    )
    .pipe(app.plugins.if(app.isBuild, app.plugins.size({ title: 'JS', showFiles: true })))
    .pipe(app.gulp.dest(app.path.build.js))
    .pipe(app.plugins.browserSync.stream());
};
