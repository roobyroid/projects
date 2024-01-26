import svgmin from "gulp-svgmin";
import gulpCheerio from "gulp-cheerio";
import svgSprite from "gulp-svg-sprite";

export const spritesGen = () => {
   return app.gulp
      .src(app.path.src.svg)
      .pipe(
         svgmin({
            js2svg: {
               multipass: true,
               pretty: true,
            },
            plugins: [
               "removeDoctype",
               "removeComments",
               "sortAttrs",
            ],
         }),
      )
      .pipe(
         gulpCheerio({
            run: function ($) {
               $("[fill]").removeAttr("fill");
               $("[stroke]").removeAttr("stroke");
               // $("[style]").removeAttr("style");
            },
            parserOptions: {
               xmlMode: true,
            },
         }),
      )
      .pipe(app.plugins.replace("&gt;", ">"))
      .pipe(
         svgSprite({
            mode: {
               symbol: {
                  sprite: "../sprite.svg",
                  // Page with svg examples
                  example: false,
               },
            },
            shape: {
               id: {
                  separator: "",
                  generator: "icon-",
               },
            },
            svg: {
               xmlDeclaration: false,
            },
         }),
      )
      .pipe(app.gulp.dest(app.path.build.images));
};

