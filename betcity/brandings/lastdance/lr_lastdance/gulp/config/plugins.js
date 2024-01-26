import replace from "gulp-replace";
import browserSync from "browser-sync";
import rename from "gulp-rename";
import newer from "gulp-newer";
import gulpIf from "gulp-if";
import size from "gulp-size";

export const plugins = {
  replace: replace,
  browserSync: browserSync,
  rename: rename,
  newer: newer,
  if: gulpIf,
  size: size,
};
