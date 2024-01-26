// Get the project folder name
import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());

// paths to the source folder and the result folder
// Replace the upper line with the lower one if a folder with
// the project name should be created instead of the dist folder (the "name" value in package.json).
const buildFolder = `./dist`;
// const buildFolder = process.env.npm_package_name;
const srcFolder = `./src`;

export const path = {
  src: {
    html: `${srcFolder}/*.html`,
    blocks: `${srcFolder}/blocks/`,
    scss: `${srcFolder}/scss/style.scss`,
    js: `${srcFolder}/js/scripts.js`,
    json: `${srcFolder}/json/**/*.json`,
    images: [
      `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp,svg,ico}`,
      `!${srcFolder}/img/svg-to-sprite/**/*.svg`,
    ],
    svg: `${srcFolder}/img/svg-to-sprite/*.svg`,
    fonts: `${srcFolder}/fonts/**/*.woff2`,
    files: `${srcFolder}/files/**/*.*`,
  },
  build: {
    html: `${buildFolder}/`,
    css: `${buildFolder}/css/`,
    js: `${buildFolder}/js/`,
    json: `${buildFolder}/json/`,
    images: `${buildFolder}/img/`,
    fonts: `${buildFolder}/fonts/`,
    video: `${buildFolder}/video/`,
    sprites: `${buildFolder}/sprites/`,
    files: `${buildFolder}/files/`,
  },
  watch: {
    js: `${srcFolder}/js/**/*.js`,
    html: `${srcFolder}/**/*.html`,
    scss: `${srcFolder}/scss/**/*.scss`,
    images: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp,ico,svg}`,
    svg: `${srcFolder}/img/svg-to-sprite/*.svg`,
    json: `${srcFolder}/json/**/*.json`,
    files: `${srcFolder}/files/**/*.*`,
  },
  clean: buildFolder,
  buildFolder: buildFolder,
  rootFolder: rootFolder,
  srcFolder: srcFolder,
  ftp: `public_html/olegolegovich.ru`, // the path to the desired folder on the remote server. gulp will add the project folder name automatically
};
